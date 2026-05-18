import { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { ArticlesPage } from "./articles-page";

export const metadata: Metadata = {
  title: "Articles",
  description: "Thoughts on AI, technology, and building intelligent systems.",
};

export default function Page() {
  const posts = getAllPosts();
  const tags = getAllTags();
  return <ArticlesPage posts={posts} tags={tags} />;
}
