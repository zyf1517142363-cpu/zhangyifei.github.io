"use client";

import { useRef } from "react";
import { formatDate } from "@/lib/utils";
import { TableOfContents } from "@/components/table-of-contents";
import { ReadingProgress } from "@/components/reading-progress";
import { BackToTop } from "@/components/back-to-top";
import type { Post } from "@/lib/posts";

export function ArticlePage({ post }: { post: Post }) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ReadingProgress />
      <div style={{ paddingTop: "6rem" }}>
        <article style={{ maxWidth: "48rem", margin: "0 auto", padding: "4rem 1.5rem" }}>
          {/* Header */}
          <header style={{ marginBottom: "3rem" }}>
            <time style={{ fontSize: "0.875rem", opacity: 0.5 }}>
              {formatDate(post.date)}
            </time>
            <h1
              style={{
                marginTop: "0.75rem",
                fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                margin: "0.75rem 0 0 0",
              }}
            >
              {post.title}
            </h1>
            <p style={{ marginTop: "1rem", fontSize: "1.125rem", opacity: 0.6 }}>
              {post.description}
            </p>
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    backgroundColor: "var(--bg-alt)",
                    opacity: 0.7,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "1.5rem", fontSize: "0.875rem", opacity: 0.5 }}>
              {post.readingTime}
            </div>
          </header>

          {/* Content */}
          <div style={{ display: "flex", gap: "4rem" }}>
            <div
              ref={contentRef}
              className="prose"
              style={{ flex: 1 }}
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />
            <TableOfContents content={post.content} />
          </div>
        </article>
      </div>
      <BackToTop />
    </>
  );
}

function renderMarkdown(content: string): string {
  let html = content
    // Headers
    .replace(/^### (.*$)/gm, (_, text) => {
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return `<h3 id="${id}">${text}</h3>`;
    })
    .replace(/^## (.*$)/gm, (_, text) => {
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return `<h2 id="${id}">${text}</h2>`;
    })
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")

    // Bold and italic
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")

    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')

    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")

    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
      return `<pre><code class="language-${lang || "text"}">${code.trim()}</code></pre>`;
    })

    // Unordered lists
    .replace(/^\s*[-*]\s+(.*$)/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")

    // Ordered lists
    .replace(/^\s*\d+\.\s+(.*$)/gm, "<li>$1</li>")

    // Blockquotes
    .replace(/^>\s+(.*$)/gm, "<blockquote><p>$1</p></blockquote>")

    // Horizontal rules
    .replace(/^---$/gm, "<hr />")

    // Paragraphs - wrap lines that don't start with HTML tags
    .replace(/^(?!<[a-zA-Z])(.*$)/gm, (match) => {
      if (match.trim() === "") return "";
      return `<p>${match}</p>`;
    })

    // Clean up empty paragraphs
    .replace(/<p>\s*<\/p>/g, "")

    // Line breaks
    .replace(/\n\n/g, "\n");

  return html;
}
