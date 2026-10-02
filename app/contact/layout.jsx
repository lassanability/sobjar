import { pageMetadata } from "@/app/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Contact Sobjar Canada in Edmonton, Alberta by phone, email or message. We would love to hear from you.",
  path: "/contact",
});

export default function Layout({ children }) {
  return children;
}
