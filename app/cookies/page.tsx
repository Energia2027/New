import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Cookie policy" };

export default function CookiesPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie policy" />
      <section className="section">
        <div className="container narrow prose">
          <div className="notice" style={{ marginTop: 0 }}>
            Draft for the website preview. The final wording should be reviewed by the company&apos;s legal adviser
            before launch.
          </div>
          <h2>What cookies are</h2>
          <p>
            Cookies are small text files a website stores on your device. They can be needed for a site to work, or
            used to understand how visitors use it.
          </p>
          <h2>Cookies we use</h2>
          <p>
            This website currently uses no advertising or analytics cookies. Only cookies strictly necessary for the
            site to function may be set.
          </p>
          <h2>Analytics</h2>
          <p>
            If we add analytics in the future, we will update this policy and, where required, ask for your consent
            before any non-essential cookies are set.
          </p>
          <h2>Managing cookies</h2>
          <p>You can block or delete cookies in your browser settings. Blocking essential cookies may affect how the site works.</p>
          <h2>More information</h2>
          <p>See our <Link href="/privacy">privacy policy</Link> for how we handle personal information.</p>
        </div>
      </section>
    </>
  );
}
