import { useState } from "react";
import { org, contact } from "../data/content.js";
import { Section } from "../components/ui.jsx";

const encode = (d) => Object.keys(d).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(d[k])).join("&");
const blank = { first: "", last: "", email: "", phone: "", subject: contact.subjects[0], message: "" };

export default function Contact() {
  const [v, setV] = useState(blank);
  const [status, setStatus] = useState("idle");
  const on = (e) => setV((s) => ({ ...s, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault(); setStatus("sending");
    try {
      const r = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: encode({ "form-name": "contact", ...v }) });
      if (!r.ok) throw new Error(r.status);
      setStatus("sent"); setV(blank);
    } catch { setStatus("error"); }
  };

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Message us.</h1>
          <p className="lede">Volunteer, partner, donate, or just say hello. We read every message.</p>
        </div>
      </section>
      <Section className="contact-band">
        <div className="contact-grid">
          {status === "sent" ? (
            <div className="cf cf-done" role="status"><strong>Thank you.</strong><p>We got your message and will be in touch soon.</p></div>
          ) : (
            <form className="cf" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}>
              <input type="hidden" name="form-name" value="contact" />
              <p className="cf-hp" aria-hidden="true"><label>Leave blank: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
              <div className="cf-row">
                <label htmlFor="c-first">First name<input id="c-first" name="first" required value={v.first} onChange={on} autoComplete="given-name" /></label>
                <label htmlFor="c-last">Last name<input id="c-last" name="last" required value={v.last} onChange={on} autoComplete="family-name" /></label>
              </div>
              <div className="cf-row">
                <label htmlFor="c-email">Email<input id="c-email" name="email" type="email" required value={v.email} onChange={on} autoComplete="email" /></label>
                <label htmlFor="c-phone">Phone (SMS)<input id="c-phone" name="phone" type="tel" required value={v.phone} onChange={on} autoComplete="tel" /></label>
              </div>
              <label htmlFor="c-subject">Subject
                <select id="c-subject" name="subject" value={v.subject} onChange={on}>{contact.subjects.map((s) => <option key={s}>{s}</option>)}</select>
              </label>
              <label htmlFor="c-message">How can we help you?<textarea id="c-message" name="message" rows={6} required value={v.message} onChange={on} /></label>
              {status === "error" && <p className="cf-err" role="alert">Something went wrong. Please try again or email us directly.</p>}
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Submit"}</button>
            </form>
          )}
          <aside className="contact-aside">
            <h3>Get in touch</h3>
            <p><a href={`mailto:${org.email}`}>{org.email}</a></p>
            <p><a href={org.phoneHref}>{org.phone}</a></p>
            <p>{org.address[0]}<br />{org.address[1]}</p>
            <p className="muted">{org.name} is a registered {org.status} nonprofit.</p>
          </aside>
        </div>
      </Section>
    </>
  );
}
