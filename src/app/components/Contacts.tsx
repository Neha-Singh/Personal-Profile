"use client";

import { useState } from "react";
import styles from "../styles/contact.module.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send via API route / email service
    setSent(true);
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Let’s build something great together
          </h2>
          <p className={styles.note}>
            Prefer email? <a href="mailto:neha@example.com">neha@example.com</a>
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
            />
          </label>
          <label className={styles.full}>
            Message
            <textarea
              name="message"
              rows={3}
              placeholder="Project, timeline, budget…"
            ></textarea>
          </label>
          <button type="submit" className={styles.submit}>
            {sent ? "Sent ✅" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
