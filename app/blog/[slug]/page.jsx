import { notFound } from "next/navigation";
import ButtonLink from "@/app/component/ButtonLink";
import JsonLd from "@/app/component/JsonLd";
import PageHero from "@/app/component/PageHero";
import Section from "@/app/component/Section";
import { getPost, posts } from "@/app/lib/posts";
import { SITE_NAME, absoluteUrl, pageMetadata } from "@/app/lib/site";
import styles from "@/app/styles/article.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl("/assets/medal.jpeg"),
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: absoluteUrl("/assets/logo.png") } },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <PageHero
        eyebrow={`${post.category} · ${post.dateLabel}`}
        title={post.title}
        image={post.image}
        imageAlt="Alberta Soccer 2026 Provincial Championships medals"
      />
      <Section>
        <article className={styles.article}>
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ButtonLink href="/blog">All news</ButtonLink>
        </article>
      </Section>
    </>
  );
}
