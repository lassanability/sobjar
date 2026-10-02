import { pageMetadata } from "@/app/lib/site";

export const metadata = pageMetadata({
  title: "Our Mission",
  description: "Our mission is to promote the social well-being of the Somali Bantu community in Alberta and support successful integration into Canadian society.",
  path: "/mission",
});

export default function Layout({ children }) {
  return children;
}
