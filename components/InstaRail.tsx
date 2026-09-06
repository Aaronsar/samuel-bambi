"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { instagramPosts, instagramUrl } from "@/lib/content";

const loop = [...instagramPosts, ...instagramPosts];

export default function InstaRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const tick = () => {
      if (!paused.current) {
        const half = rail.scrollWidth / 2;
        rail.scrollLeft += 0.55;
        if (rail.scrollLeft >= half) rail.scrollLeft -= half;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const pause = () => {
    paused.current = true;
  };
  const resume = () => {
    paused.current = false;
  };

  return (
    <div
      className="insta-wrap"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onPointerDown={pause}
      onPointerUp={resume}
    >
      <div ref={railRef} className="insta-rail" tabIndex={0} onFocus={pause} onBlur={resume}>
        {loop.map((post, i) => (
          <a
            key={`${post.src}-${i}`}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-card"
            aria-label={post.alt}
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              sizes="300px"
              className="object-cover"
            />
            <span aria-hidden="true">★</span>
          </a>
        ))}
      </div>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ticket ticket-ghost mt-6"
      >
        Ouvrir Instagram
      </a>
    </div>
  );
}
