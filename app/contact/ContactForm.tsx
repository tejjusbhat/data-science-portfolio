"use client";
import { useEffect, useRef, useState } from "react";
import Section from "@/components/Section";
import { Frame } from "@/components/Ornaments";

export default function ContactForm() {
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const t0 = useRef<number>(Date.now());
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    t0.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setOk(null);
    setErr(null);
    const fd = new FormData(e.currentTarget);
    fd.set("elapsed", String(Date.now() - t0.current));
    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed");
      setOk("Your raven has flown. I’ll reply soon.");
      (e.target as HTMLFormElement).reset();
    } catch (ex: unknown) {
      setErr(ex instanceof Error ? ex.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section title="Send a Raven" kicker="Contact">
      <Frame as="form" className="raven" onSubmit={onSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required placeholder="you@example.com" />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={6} placeholder="What quest do you bring?" />
        </div>
        {/* optional honeypot */}
        <input
          name="company"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          style={{ position: "absolute", left: "-5000px", opacity: 0 }}
        />
        <div className="form-actions">
          <button className="btn btn-primary" disabled={submitting}>
            {submitting ? "Dispatching…" : "Dispatch raven"}
          </button>
          <small className="helper">
            Or email: <a href="mailto:tejjusbhat@gmail.com">tejjusbhat@gmail.com</a>
          </small>
        </div>
        {ok && <p role="status" className="form-msg ok">{ok}</p>}
        {err && <p role="alert" className="form-msg err">{err}</p>}
      </Frame>
    </Section>
  );
}
