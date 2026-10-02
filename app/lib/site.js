export const SITE_URL = "https://sobjarcanada.org";
export const SITE_NAME = "Sobjar Canada";
export const SITE_TAGLINE = "Supporting Somali Bantu youth and families in Alberta";
export const SITE_DESCRIPTION =
  "Sobjar Canada is a non-profit serving the Somali Bantu Jareer/weyne community in Alberta through education, advocacy, youth sports and community support.";
export const BANNER_URL = `${SITE_URL}/assets/banner.png`;

export const CONTACT = {
  email: "sobjar12@gmail.com",
  phone: "(+1) 780-200-6752",
  phoneHref: "+17802006752",
  address: "12607 124 Street, Edmonton, Alberta T5L 0N8, Canada",
  city: "Edmonton",
  region: "Alberta",
  country: "CA",
};

export const SOCIALS = [
  { id: "facebook", label: "Facebook", href: "https://m.facebook.com/SobjarCanada/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/sobjarstar/" },
  { id: "whatsapp", label: "WhatsApp", href: "https://chat.whatsapp.com/CnjBdL4RvVT7raFaJHml88" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/channel/UCquX1JwHrF0_ijoCIZGuwhA" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@sobjarstar5" },
];

export const WHATSAPP_URL = SOCIALS.find((s) => s.id === "whatsapp").href;

export const TEAM = {
  name: "Sobjar Star FC",
  path: "/sobjar-star",
  coach: "Abdihakim Aweys Noor",
  division: "Alberta Soccer Men's Tier 3",
  season: "2026",
  honour: "Provincial Silver Medallists",
};

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function pageMetadata({ title, description, path }) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: [BANNER_URL] },
    twitter: { card: "summary_large_image", title, description, images: [BANNER_URL] },
  };
}
