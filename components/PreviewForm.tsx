"use client";

import { useState, type FormEvent, type ReactNode } from "react";

// Preview-only form: validates in the browser and confirms, but sends nothing.
// At launch this becomes a server action that validates input and emails the company inbox via Resend.
export function PreviewForm({ children, submitLabel }: { children: ReactNode; submitLabel: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="notice" role="status">
        <strong>Thank you — this is a preview.</strong> Nothing was sent. On the live website this form will go
        straight to the company&apos;s email inbox.
        <div>
          <button className="button button-light" type="button" onClick={() => setSent(false)}>
            Back to the form
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      {children}
      <button className="button button-primary full" type="submit">
        {submitLabel} <span aria-hidden="true">→</span>
      </button>
      <p className="form-note">Preview only: submissions are not sent or stored.</p>
    </form>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}
