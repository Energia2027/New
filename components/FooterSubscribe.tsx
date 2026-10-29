"use client";

import { useState, type FormEvent } from "react";

// Preview-only: confirms on screen and sends nothing.
export function FooterSubscribe() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="footer-subscribe">
      <h2>Stay informed</h2>
      <p>New project opportunities and updates, straight to your inbox.</p>
      {done ? (
        <p role="status" className="subscribe-done">Thank you. This is a preview, so nothing was sent.</p>
      ) : (
        <form onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="subscribe-email">Email address</label>
          <input id="subscribe-email" type="email" placeholder="Your email address" required />
          <button className="button button-lime" type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
}
