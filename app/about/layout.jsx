import { pageMetadata } from "@/app/lib/site";

export const metadata = pageMetadata({
  title: "About Us",
  description: "Learn about Sobjar Canada, a non-profit supporting the Somali Bantu Jareer/weyne community in Alberta through culture, advocacy and youth programs.",
  path: "/about",
});

export default function Layout({ children }) {
  return children;
}
