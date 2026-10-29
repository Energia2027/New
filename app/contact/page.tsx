import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Field, PreviewForm } from "@/components/PreviewForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project."
        intro="Whether you have a project, want to bid on one or are exploring the East African market, we would like to hear from you."
      />
      <section className="section">
        <div className="container split">
          <div>
            <h2>Contact details</h2>
            <dl className="contact-list">
              <div><dt>Email</dt><dd>{site.email}</dd></div>
              <div><dt>Phone</dt><dd>{site.phone}</dd></div>
              <div><dt>Office</dt><dd>{site.address}</dd></div>
            </dl>
            <div className="notice">Contact details are placeholders until the company confirms them.</div>
          </div>
          <div className="card">
            <h2 className="card-title">Send an enquiry</h2>
            <PreviewForm submitLabel="Send enquiry">
              <Field label="Your name"><input name="name" autoComplete="name" required /></Field>
              <Field label="Organisation"><input name="organisation" autoComplete="organization" /></Field>
              <Field label="Email"><input name="email" type="email" autoComplete="email" required /></Field>
              <Field label="I am a…">
                <select name="type" defaultValue="" required>
                  <option value="" disabled>Choose one</option>
                  <option>Project owner / developer</option>
                  <option>EPC contractor</option>
                  <option>Financier / investor</option>
                  <option>Insurance provider</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Country of the project">
                <select name="country" defaultValue="">
                  <option value="">Not specific</option>
                  {["Kenya", "Uganda", "Tanzania", "Rwanda", "Ethiopia", "Other"].map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="How can we help?"><textarea name="message" rows={5} required /></Field>
            </PreviewForm>
          </div>
        </div>
      </section>
    </>
  );
}
