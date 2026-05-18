"use client";

export function AboutPage() {
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
            About
          </h1>

          <div style={{ marginTop: "3rem" }}>
            <p
              style={{
                fontSize: "1.125rem",
                opacity: 0.8,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              我是张一飞，欢迎来到我的博客。2026年伊始开始深耕于AI agent领域，创建这个博客主要是想和大家分享一些我对行业看法，以及一些项目经验和方法。
            </p>
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <h2
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                opacity: 0.6,
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              What I Write About
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "AI agent architectures and multi-agent systems",
                "Retrieval-augmented generation (RAG) and knowledge systems",
                "Building production-ready AI applications",
                "The craft of software engineering",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      marginTop: "0.5rem",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--fg)",
                      opacity: 0.4,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ opacity: 0.8 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <h2
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                opacity: 0.6,
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Connect
            </h2>
            <p style={{ opacity: 0.8, marginBottom: "1rem" }}>
              I&apos;m always interested in connecting with fellow builders and
              researchers. Feel free to reach out.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {[
                { label: "GitHub", href: "https://github.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Email", href: "mailto:hello@example.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    fontSize: "0.875rem",
                    padding: "0.5rem 1rem",
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
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
