"use client";

import { ArticleCard } from "@/components/article-card";
import { useState } from "react";
import type { Post } from "@/lib/posts";

export function ArticlesPage({
  posts,
  tags,
}: {
  posts: Post[];
  tags: string[];
}) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div style={{ paddingTop: "6rem" }}>
      <section style={{ maxWidth: "48rem", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div>
          <h1
            style={{
              fontSize: "1.875rem",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Articles
          </h1>
          <p style={{ marginTop: "0.75rem", opacity: 0.6 }}>
            Thoughts on AI, technology, and building intelligent systems.
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <button
              onClick={() => setSelectedTag(null)}
              style={{
                fontSize: "0.75rem",
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                backgroundColor:
                  selectedTag === null ? "var(--fg)" : "var(--bg-alt)",
                color: selectedTag === null ? "var(--bg)" : "inherit",
                opacity: selectedTag === null ? 1 : 0.7,
              }}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                style={{
                  fontSize: "0.75rem",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  backgroundColor:
                    selectedTag === tag ? "var(--fg)" : "var(--bg-alt)",
                  color: selectedTag === tag ? "var(--bg)" : "inherit",
                  opacity: selectedTag === tag ? 1 : 0.7,
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Articles List */}
        <div style={{ marginTop: "3rem" }}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <ArticleCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                description={post.description}
                tags={post.tags}
              />
            ))
          ) : (
            <p
              style={{
                fontSize: "0.875rem",
                opacity: 0.6,
                padding: "3rem 0",
                textAlign: "center",
              }}
            >
              {selectedTag
                ? `No articles found with tag "${selectedTag}".`
                : "No articles yet. Check back soon."}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
