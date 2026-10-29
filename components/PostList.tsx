import Link from "next/link";
import type { Post } from "@/lib/content";
import { formatDate } from "@/lib/site";

export function PostList({ posts, base }: { posts: Post[]; base: string }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <article className="post-item" key={post.slug}>
          <div className="badges">
            <span className="badge">{post.category}</span>
            <span className="badge badge-sample">Sample</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h3>
            <Link href={`${base}/${post.slug}`}>{post.title}</Link>
          </h3>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
