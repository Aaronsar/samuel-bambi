"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { instagramPosts, instagramUrl } from "@/lib/content";

export default function InstaJournal() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const post = instagramPosts[index];
  const total = instagramPosts.length;

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tick = window.setTimeout(() => {
      setIndex((current) => (current + 1) % total);
    }, 4500);
    return () => window.clearTimeout(tick);
  }, [index, paused, total]);

  const go = (next: number) => {
    setIndex((next + total) % total);
  };

  return (
    <div className="journal">
      <div
        className={`journal-phone${paused ? " is-paused" : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="journal-progress" aria-hidden="true">
          {instagramPosts.map((item, i) => (
            <span key={item.src} className={i === index ? "is-on" : i < index ? "is-done" : ""}>
              {i === index ? <i /> : null}
            </span>
          ))}
        </div>
        <div className="journal-screen">
          <Image
            src={post.src}
            alt={post.alt}
            fill
            sizes="(max-width: 800px) 70vw, 280px"
            priority={index === 0}
          />
        </div>
        <button
          type="button"
          className="journal-hit journal-hit-prev"
          aria-label="Story précédente"
          onClick={() => go(index - 1)}
        />
        <button
          type="button"
          className="journal-hit journal-hit-next"
          aria-label="Story suivante"
          onClick={() => go(index + 1)}
        />
        <p className="journal-count">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>

      <div className="journal-side">
        <ol className="journal-sum">
          {instagramPosts.map((item, i) => (
            <li key={item.src}>
              <button
                type="button"
                className={i === index ? "is-on" : ""}
                onClick={() => setIndex(i)}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                {item.line}
              </button>
            </li>
          ))}
        </ol>
        <a
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          className="ticket"
        >
          Voir sur Instagram
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ticket ticket-ghost"
        >
          Le compte
        </a>
      </div>
    </div>
  );
}
