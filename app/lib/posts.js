import MedalImage from "@/public/assets/medal.jpeg";

export const posts = [
  {
    slug: "sobjar-star-wins-provincial-silver-2026",
    title: "Sobjar Star FC Wins Silver at the 2026 Alberta Soccer Provincials",
    excerpt:
      "Our senior men's team returned from the Alberta Soccer Outdoor Provincial Championships with silver medals in Tier 3.",
    category: "Sports",
    date: "2026-09",
    dateLabel: "September 2026",
    readTime: "2 min read",
    image: MedalImage,
    body: [
      "Sobjar Star FC finished as provincial silver medallists in Men's Tier 3 at the 2026 Alberta Soccer Outdoor Provincial Championships.",
      "The team delivered strong group stage performances, with wins over YBG Dons, Bonnyville U23 and Croatia Torcida.",
      "Sobjar Star was built to remove barriers for newcomer and low-income youth, using sport to grow confidence, leadership and a sense of belonging. A provincial medal is proof of what a united community can do.",
      "Congratulations to head coach Abdihakim Aweys Noor, every player, and the families and volunteers who made the season possible.",
    ],
  },
];

export const getPost = (slug) => posts.find((post) => post.slug === slug);
