"use client";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3rem 1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.875rem", opacity: 0.6 }}>
            &copy; {new Date().getFullYear()} Personal Blog. All rights reserved.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.875rem",
                opacity: 0.6,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.875rem",
                opacity: 0.6,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
            >
              Twitter
            </a>
            <a
              href="/rss.xml"
              style={{
                fontSize: "0.875rem",
                opacity: 0.6,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
