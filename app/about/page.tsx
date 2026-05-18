import { Metadata } from "next";
import { AboutPage } from "./about-page";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me and what I do.",
};

export default function Page() {
  return <AboutPage />;
}
