"use client";

import { useEffect, useRef, useState } from "react";

const flaps = ["tl", "tr", "bl", "br"] as const;

export default function SpectacleBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpen(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setOpen(true));
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="spectacle" className="spectacle">
      <div className="spectacle-inner">
        <div
          ref={ref}
          className={`affiche-stage${open ? " is-open" : ""}`}
          role="img"
          aria-label="Affiche du spectacle Machine, photos David Djian"
        >
          <div className="affiche-sheet">
            {flaps.map((flap) => (
              <div key={flap} className={`affiche-flap affiche-flap-${flap}`}>
                <div className="affiche-flap-face">
                  <span className="affiche-wrinkles" aria-hidden="true" />
                </div>
                <div className="affiche-flap-back" aria-hidden="true" />
              </div>
            ))}
          </div>
          <span className="affiche-tape affiche-tape-tl" aria-hidden="true" />
          <span className="affiche-tape affiche-tape-br" aria-hidden="true" />
        </div>

        <div className="spectacle-copy">
          <p className="font-display text-sm tracking-[0.22em] text-red uppercase">
            Le spectacle
          </p>
          <h2 className="font-poster mt-1 text-[clamp(3.6rem,11vw,7.2rem)] leading-[0.85] text-red">
            MACHINE!
          </h2>
          <blockquote className="font-serif mt-5 max-w-xl text-2xl leading-snug italic md:text-[1.75rem]">
            Si Samuel était une scène de film, il serait l’orchestre du Titanic
            : celui qui continue de jouer pendant que le bateau coule.
          </blockquote>
          <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed opacity-80">
            Stand-up, personnages, autodérision. Co-écrit avec Jonathan Demayo
            et Benjamin Ifrah. Mis en scène par Nicolas Nebot. Une heure où ça
            ne s’arrête pas — même après Danse avec les stars.
          </p>
          <p className="mt-3 text-sm opacity-55">
            (Audacieux et hilarant. Cette phrase, c’est de lui.)
          </p>
          <a href="#dates" className="ticket mt-7 w-fit text-lg">
            Je viens rire
          </a>
        </div>
      </div>
    </section>
  );
}
