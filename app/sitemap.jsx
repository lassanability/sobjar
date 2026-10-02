import { posts } from "@/app/lib/posts";
import { SITE_URL } from "@/app/lib/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/sobjar-star", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/mission", priority: 0.8 },
  { path: "/programs", priority: 0.7 },
  { path: "/getInvolved", priority: 0.7 },
  { path: "/donate", priority: 0.7 },
  { path: "/blog", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap() {
  const pages = routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
  const articles = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));
  return [...pages, ...articles];
}
