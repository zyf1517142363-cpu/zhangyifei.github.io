"use client";

import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import type { Post } from "@/lib/posts";

export function HomePage({ posts }: { posts: Post[] }) {
  const featuredPosts = posts.slice(0, 2);
  const latestPosts = posts.slice(0, 5);

  return (
    <div style={{ paddingTop: "6rem" }}>
      {/* Hero Section */}
      <section style={{ maxWidth: "48rem", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.6, marginBottom: "1rem" }}>
          Hello, I&apos;m
        </p>
        <h1
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          A thoughtful builder
        </h1>
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "1.125rem",
            opacity: 0.7,
            maxWidth: "36rem",
            lineHeight: 1.7,
          }}
        >
          I write about AI systems, agent architectures, and the craft of
          building intelligent software. Currently exploring the frontier of
          human-AI interaction.
        </p>
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link
            href="/articles"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.625rem 1.25rem",
              fontSize: "0.875rem",
              backgroundColor: "var(--fg)",
              color: "var(--bg)",
              borderRadius: "9999px",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Read Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.625rem 1.25rem",
              fontSize: "0.875rem",
              border: "1px solid var(--border)",
              borderRadius: "9999px",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg-alt)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            padding: "4rem 1.5rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          <h2
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              opacity: 0.6,
              marginBottom: "2rem",
              margin: "0 0 2rem 0",
            }}
          >
            Featured
          </h2>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/articles/${post.slug}`}
                style={{
                  display: "block",
                  padding: "1.5rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.75rem",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--bg-alt)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <time style={{ fontSize: "0.75rem", opacity: 0.5 }}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h3
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.875rem",
                    opacity: 0.6,
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  {post.description}
                </p>
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.125rem 0.5rem",
                        borderRadius: "9999px",
                        backgroundColor: "var(--bg-alt)",
                        opacity: 0.7,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "4rem 1.5rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              opacity: 0.6,
              margin: 0,
            }}
          >
            Latest Articles
          </h2>
          <Link
            href="/articles"
            style={{
              fontSize: "0.875rem",
              opacity: 0.6,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
          >
            View all →
          </Link>
        </div>
        <div>
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
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
            <p style={{ fontSize: "0.875rem", opacity: 0.6, padding: "2rem 0" }}>
              No articles yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "4rem 1.5rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 500, margin: 0 }}>
            Stay Updated
          </h2>
          <p
            style={{
              marginTop: "0.75rem",
              opacity: 0.6,
              maxWidth: "28rem",
              margin: "0.75rem auto 0 auto",
            }}
          >
            Get notified when I publish new articles about AI, technology, and
            building intelligent systems.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              maxWidth: "24rem",
              margin: "1.5rem auto 0 auto",
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: "0.625rem 1rem",
                fontSize: "0.875rem",
                backgroundColor: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "9999px",
                outline: "none",
                color: "inherit",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--fg)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            />
            <button
              style={{
                padding: "0.625rem 1.25rem",
                fontSize: "0.875rem",
                backgroundColor: "var(--fg)",
                color: "var(--bg)",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
