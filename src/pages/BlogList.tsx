import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { ArrowIcon, PageHero } from "../components/ui";

const FALLBACK_IMAGE = "/blog-thumbnails/_fallback.jpg";

// The original WordPress site split recipe posts across two overlapping
// categories ("Recipe" / recipe and "Mushroom Recipe" / mushroom_recipe) —
// most posts only carry one or the other, not both. Treat them as one
// category here so the site's "Recipe" section actually shows every recipe.
const RECIPE_SLUGS = new Set(["recipe", "mushroom_recipe"]);

export default function BlogList() {
  const { category } = useParams();
  const normalizedCategory = category?.toLowerCase();
  const filtered = normalizedCategory
    ? posts.filter((p) =>
        p.categories.some((c) =>
          normalizedCategory === "recipe" ? RECIPE_SLUGS.has(c.slug) : c.slug === normalizedCategory
        )
      )
    : posts;
  const categoryLabel = normalizedCategory
    ? normalizedCategory === "recipe"
      ? "Recipe"
      : filtered[0]?.categories.find((c) => c.slug === normalizedCategory)?.name ??
        normalizedCategory.replace(/[-_]/g, " ")
    : null;

  return (
    <div>
      <PageHero title={categoryLabel ?? "Coonfresh Blog"} />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {filtered.map((post) => (
          <article key={post.slug} className="card flex flex-col overflow-hidden">
            <img
              src={post.image ?? FALLBACK_IMAGE}
              alt=""
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm font-semibold text-brand-peach-deep">
                {post.date} | {post.category}
              </p>
              <h2 className="font-heading mt-2 text-xl font-semibold leading-snug text-ink">{post.title}</h2>
              <p className="mt-3 flex-1">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="link-arrow mt-4 self-start"
                aria-label={`Read more: ${post.title}`}
              >
                Read more <ArrowIcon />
              </Link>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center">No posts in this category yet.</p>
        )}
      </div>
    </div>
  );
}
