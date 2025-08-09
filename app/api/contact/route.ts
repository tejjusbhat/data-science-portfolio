import { NextRequest, NextResponse } from 'next/server';

const memory = new Map<string, number[]>(); // naive rate limit per IP

export async function POST(req: NextRequest){
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0';
  const form = await req.formData();
  const name = String(form.get('name') || '');
  const email = String(form.get('email') || '');
  const message = String(form.get('message') || '');
  const company = String(form.get('company') || ''); // honeypot
  const elapsed = Number(form.get('elapsed') || '0');

  // Basic validation
  if(!name || !email || !message) return NextResponse.json({error:'Missing fields'}, {status:400});
  if(company) return NextResponse.json({ok:true}); // silently accept bots
  if(elapsed < 3000) return NextResponse.json({error:'Hmm, that was too fast. Please try again.'}, {status:429});
  if(/https?:\/\//i.test(message)) return NextResponse.json({error:'Links are disabled. Please email me if needed.'}, {status:400});

  // Simple rate limit: 3 requests / 5 minutes
  const now = Date.now();
  const arr = memory.get(ip) || [];
  const windowMs = 5*60*1000;
  const recent = arr.filter(t => now - t < windowMs);
  if(recent.length >= 3) return NextResponse.json({error:'Too many messages. Try later.'}, {status:429});
  memory.set(ip, [...recent, now]);

  // Forward to Formspree if configured
  const fs = process.env.FORMSPREE_ENDPOINT;
  if(fs){
    const payload = new URLSearchParams({ name, email, message }).toString();
    const r = await fetch(fs, {
      method:'POST',
      headers:{ 'Accept':'application/json', 'Content-Type':'application/x-www-form-urlencoded' },
      body: payload
    });
    if(!r.ok) return NextResponse.json({error:'Mail provider error'}, {status:502});
  }

  // Otherwise: pretend success (dev) — swap later to Resend/SMTP if you prefer
  return NextResponse.json({ok:true});
}
