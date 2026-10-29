import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow empty-page">
        <span className="eyebrow">Page not found</span>
        <h1 className="post-title">We couldn&apos;t find that page.</h1>
        <Link className="button button-primary" href="/">Back to home</Link>
      </div>
    </section>
  );
}
