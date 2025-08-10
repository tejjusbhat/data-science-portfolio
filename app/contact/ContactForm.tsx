"use client";
import { useEffect, useRef, useState } from "react";

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
      setOk("Thanks! I’ll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (ex: unknown) {
      setErr(ex instanceof Error ? ex.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ maxWidth: 780, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Contact</h1>
      <form
        onSubmit={onSubmit}
        className="card"
        style={{ maxWidth: 640, margin: "16px auto" }}
      >
        <div className="form-field">
          <label>Name</label>
          <input name="name" required placeholder="Your name" />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="form-field">
          <label>Message</label>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="How can I help?"
          />
        </div>
        {/* optional honeypot */}
        <input
          name="company"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          style={{ position: "absolute", left: "-5000px", opacity: 0 }}
        />
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 12,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <button className="cta" disabled={submitting}>
            {submitting ? "Sending…" : "Send"}
          </button>
          <small className="helper">
            Or email:{" "}
            <a href="mailto:tejjusbhat@gmail.com">tejjusbhat@gmail.com</a>
          </small>
        </div>
        {ok && (
          <p role="status" style={{ marginTop: 12 }}>
            {ok}
          </p>
        )}
        {err && (
          <p role="alert" style={{ marginTop: 12 }}>
            {err}
          </p>
        )}
      </form>
    </div>
  );
}
