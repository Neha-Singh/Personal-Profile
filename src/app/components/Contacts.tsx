"use client";

import { useRef, useState } from "react";
import styles from "../styles/contact.module.css";

type Status = "idle" | "loading" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // ✅ stable reference to the form element
  const formRef = useRef<HTMLFormElement>(null);

  // --- validation helpers ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateField(name: "name" | "email" | "message", value: string) {
    switch (name) {
      case "name":
        if (!value.trim()) return "Please enter your name.";
        if (value.trim().length < 2)
          return "Name should be at least 2 characters.";
        return "";
      case "email":
        if (!value.trim()) return "Please enter your email.";
        if (!emailRegex.test(value.trim()))
          return "Please enter a valid email.";
        return "";
      case "message":
        if (!value.trim()) return "Please enter your message.";
        if (value.trim().length < 10)
          return "Message should be at least 10 characters.";
        return "";
    }
  }

  function validateAll(formEl: HTMLFormElement) {
    const form = new FormData(formEl);
    const next: FieldErrors = {};

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    const nameErr = validateField("name", name);
    const emailErr = validateField("email", email);
    const messageErr = validateField("message", message);

    if (nameErr) next.name = nameErr;
    if (emailErr) next.email = emailErr;
    if (messageErr) next.message = messageErr;

    return next;
  }

  // validate individual field on blur (uncontrolled inputs)
  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const name = target.name as "name" | "email" | "message";
    if (!["name", "email", "message"].includes(name)) return;

    const msg = validateField(name, target.value);
    setFieldErrors((prev) => ({ ...prev, [name]: msg || undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const formEl = formRef.current; // <-- stable, won’t be null after await
    if (!formEl) return;

    // front-end validation
    const nextErrors = validateAll(formEl);
    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setStatus("idle");
      return;
    }

    const form = new FormData(formEl);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const hp = String(form.get("company") || ""); // honeypot

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, hp }),
      });

      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json?.error || "Failed to send message");
      }

      // ✅ safe reset using the ref
      formEl.reset();
      setFieldErrors({});
      setStatus("success");

      // optional: return to idle after a few seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong. Please try again.");
    }
  }

  // helper to apply red border when a field has an error (no new CSS needed)
  const invalidStyle = { borderColor: "#ef4444" }; // tailwind red-500 color

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Let’s build something great together
          </h2>
        </div>

        {/* ✅ attach the ref here */}
        <form
          ref={formRef}
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Honeypot – hidden from humans, bots often fill this */}
          <label className={styles.srOnly}>
            Company
            <input name="company" autoComplete="off" tabIndex={-1} />
          </label>

          {/* Name */}
          <label>
            Name
            <input
              name="name"
              placeholder="Your name"
              required
              onBlur={handleBlur}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              style={fieldErrors.name ? invalidStyle : undefined}
            />
            {fieldErrors.name && (
              <p
                id="name-error"
                className={styles.error}
                style={{ marginTop: 6 }}
              >
                {fieldErrors.name}
              </p>
            )}
          </label>

          {/* Email */}
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              inputMode="email"
              autoComplete="email"
              required
              onBlur={handleBlur}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              style={fieldErrors.email ? invalidStyle : undefined}
            />
            {fieldErrors.email && (
              <p
                id="email-error"
                className={styles.error}
                style={{ marginTop: 6 }}
              >
                {fieldErrors.email}
              </p>
            )}
          </label>

          {/* Message */}
          <label className={styles.full}>
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Project, timeline, budget…"
              required
              onBlur={handleBlur}
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={
                fieldErrors.message ? "message-error" : undefined
              }
              style={fieldErrors.message ? invalidStyle : undefined}
            />
            {fieldErrors.message && (
              <p
                id="message-error"
                className={styles.error}
                style={{ marginTop: 6 }}
              >
                {fieldErrors.message}
              </p>
            )}
          </label>

          {/* Actions */}
          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.submit}
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" && "Sending…"}
              {status === "success" && "Sent ✅"}
              {(status === "idle" || status === "error") && "Send Message"}
            </button>

            <span
              aria-live="polite"
              className={
                status === "error" ? styles.error : styles.confirmation
              }
            >
              {status === "success" && "Thanks! I’ll get back to you shortly."}
              {status === "error" && error}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
