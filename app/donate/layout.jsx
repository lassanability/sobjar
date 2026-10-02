import { pageMetadata } from "@/app/lib/site";

export const metadata = pageMetadata({
  title: "Donate",
  description: "Support Somali Bantu youth, education and community programs in Alberta with a donation to Sobjar Canada.",
  path: "/donate",
});

export default function Layout({ children }) {
  return children;
}
