import { getAllPosts } from "@/lib/posts";
import { HomePage } from "./home-page";

export default function Home() {
  const posts = getAllPosts();
  return <HomePage posts={posts} />;
}
