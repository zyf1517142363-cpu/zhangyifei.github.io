"use client";

import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  index?: number;
}

export function ArticleCard({
  slug,
  title,
  date,
  description,
  tags,
}: ArticleCardProps) {
  return (
    <article
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Link
        href={`/articles/${slug}`}
        style={{
          display: "block",
          padding: "1.5rem 0",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "var(--fg)",
                margin: 0,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "0.875rem",
                opacity: 0.6,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                margin: "0.5rem 0 0 0",
              }}
            >
              {description}
            </p>
            <div
              style={{
                marginTop: "0.75rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {tags.map((tag) => (
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
          </div>
          <time
            style={{
              fontSize: "0.875rem",
              opacity: 0.5,
              flexShrink: 0,
            }}
          >
            {formatDate(date)}
          </time>
        </div>
      </Link>
    </article>
  );
}
