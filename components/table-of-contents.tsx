"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const items: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      items.push({
        id,
        text,
        level: match[1].length,
      });
    }

    setHeadings(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav
      style={{
        position: "sticky",
        top: "6rem",
        alignSelf: "flex-start",
        width: "16rem",
        flexShrink: 0,
      }}
      className="hidden xl:block"
    >
      <p
        style={{
          fontSize: "0.875rem",
          fontWeight: 500,
          marginBottom: "1rem",
          opacity: 0.6,
          margin: "0 0 1rem 0",
        }}
      >
        On this page
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              marginLeft: heading.level === 3 ? "1rem" : 0,
              marginBottom: "0.5rem",
            }}
          >
            <a
              href={`#${heading.id}`}
              style={{
                fontSize: "0.875rem",
                transition: "opacity 0.2s",
                opacity: activeId === heading.id ? 1 : 0.5,
                fontWeight: activeId === heading.id ? 500 : 400,
                display: "block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => {
                if (activeId !== heading.id)
                  e.currentTarget.style.opacity = "0.5";
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
