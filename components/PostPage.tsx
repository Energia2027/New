import Link from "next/link";
import type { Post } from "@/lib/content";
import { formatDate } from "@/lib/site";

export function PostPage({ post, back }: { post: Post; back: { href: string; label: string } }) {
  const list = post.body.length > 2;
  return (
    <article className="section">
      <div className="container narrow">
        <Link className="text-link" href={back.href}>← {back.label}</Link>
        <div className="badges" style={{ marginTop: 24 }}>
          <span className="badge">{post.category}</span>
          <span className="badge badge-sample">Sample</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <div className="prose">
          {list ? (
            <ul>{post.body.map((line) => <li key={line}>{line}</li>)}</ul>
          ) : (
            post.body.map((line) => <p key={line}>{line}</p>)
          )}
        </div>
        <div className="notice">This is sample content for the website preview.</div>
      </div>
    </article>
  );
}
