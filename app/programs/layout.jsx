import { pageMetadata } from "@/app/lib/site";

export const metadata = pageMetadata({
  title: "Programs",
  description: "Youth programs, community outreach and educational initiatives from Sobjar Canada that help Somali Bantu families and youth in Alberta thrive.",
  path: "/programs",
});

export default function Layout({ children }) {
  return children;
}
