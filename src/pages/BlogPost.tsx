import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../data/posts";
import { PlayIcon } from "../components/ui";

const FALLBACK_IMAGE = "/blog-thumbnails/_fallback.jpg";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-heading text-3xl font-semibold text-ink">Post not found</h1>
        <Link to="/blog" className="link-arrow mt-4">
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link to="/blog" className="link-arrow">
        ← Back to blog
      </Link>
      <h1 className="font-heading mt-4 text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.12] text-ink">
        {post.title}
      </h1>
      <p className="mt-3 text-sm font-semibold text-brand-peach-deep">
        by {post.author} | {post.date} | {post.category}
      </p>
      {post.image !== `/blog-thumbnails/video-thumbnails/${post.videoId}.jpg` && (
        <img
          src={post.image ?? FALLBACK_IMAGE}
          alt={post.title}
          className="mt-8 w-full rounded-panel object-cover shadow-card"
        />
      )}
      {post.videoId && (
        <a
          href={`https://www.youtube.com/watch?v=${post.videoId}`}
          target="_blank"
          rel="noreferrer"
          className="group relative mt-8 block overflow-hidden rounded-panel shadow-card"
        >
          <img
            src={`/blog-thumbnails/video-thumbnails/${post.videoId}.jpg`}
            alt={`Watch: ${post.title}`}
            className="w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-dark/20 transition-colors duration-150 group-hover:bg-dark/30">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-brand-blue-deep shadow-float transition-transform duration-150 group-active:scale-95">
              <PlayIcon className="ml-1 h-8 w-8" />
            </span>
          </span>
        </a>
      )}
      <div className="post-content mt-10">
        {post.paragraphs.map((p, i) => (
          // eslint-disable-next-line react/no-danger
          <div key={i} dangerouslySetInnerHTML={{ __html: p.html }} />
        ))}
      </div>
    </article>
  );
}
