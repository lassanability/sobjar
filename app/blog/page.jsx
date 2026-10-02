import FeatureCard from "@/app/component/FeatureCard";
import Section from "@/app/component/Section";
import SectionHeader from "@/app/component/SectionHeader";
import { posts } from "@/app/lib/posts";
import { pageMetadata } from "@/app/lib/site";
import grid from "@/app/styles/cardGrid.module.css";

export const metadata = pageMetadata({
  title: "News & Stories",
  description:
    "News from Sobjar Canada and Sobjar Star FC: community updates, match results and stories from Somali Bantu families in Alberta.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Section>
      <SectionHeader
        tag="News"
        title="News and stories"
        description="Updates from our community, programs and the Sobjar Star football team."
      />
      <div className={grid.grid}>
        {posts.map((post) => (
          <FeatureCard
            key={post.slug}
            href={`/blog/${post.slug}`}
            title={post.title}
            description={post.excerpt}
            image={post.image}
            cta="Read story"
          />
        ))}
      </div>
    </Section>
  );
}
