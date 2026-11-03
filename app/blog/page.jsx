import FeatureCard from "@/app/component/FeatureCard";
import PageHero from "@/app/component/PageHero";
import Section from "@/app/component/Section";
import HomeImage1 from "@/public/assets/home1.jpg";
import { posts } from "@/app/lib/posts";
import { pageMetadata } from "@/app/lib/site";
import grid from "@/app/styles/cardGrid.module.css";

export const metadata = pageMetadata({
  title: "News & Stories",
  description:
    "News from Sobjar Canada and Sobjar FC: community updates, match results and stories from Somali Bantu families in Alberta.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="News" title="News and stories" description="Updates from our community, programs and Sobjar FC." image={HomeImage1} imageAlt="A Sobjar community celebration in Edmonton" />
      <Section>
        <div className={grid.grid}>
          {posts.map((post) => (
            <FeatureCard key={post.slug} href={`/blog/${post.slug}`} title={post.title} description={post.excerpt} image={post.image} meta={`${post.category} · ${post.dateLabel} · ${post.readTime}`} cta="Read story" />
          ))}
        </div>
      </Section>
    </>
  );
}
