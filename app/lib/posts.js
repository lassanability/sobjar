import MedalImage from "@/public/assets/medal.jpeg";

export const posts = [
  {
    slug: "sobjar-fc-wins-provincial-silver-2026",
    title: "Sobjar FC Wins Silver at the 2026 Alberta Soccer Provincials",
    excerpt:
      "Sobjar FC returned from the 2026 Alberta Soccer Provincial Championships with silver medals.",
    category: "Sports",
    date: "2026-09",
    dateLabel: "September 2026",
    readTime: "2 min read",
    image: MedalImage,
    body: [
      "Sobjar FC finished as provincial silver medallists at the 2026 Alberta Soccer Provincial Championships.",
      "Football brings our youth and families together, building confidence, leadership and a sense of belonging. A provincial medal is proof of what a united community can do.",
      "Congratulations to every player, and to the families and volunteers who made the season possible.",
    ],
  },
];

export const getPost = (slug) => posts.find((post) => post.slug === slug);
