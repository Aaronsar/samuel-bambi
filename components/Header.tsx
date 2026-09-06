"use client";

import { useState } from "react";
import { bookingUrl, instagramUrl } from "@/lib/content";

const links = [
  { href: "/#dates", label: "Dates" },
  { href: "/#spectacle", label: "Machine" },
  { href: "/#photos", label: "Photos" },
  { href: "/#insta", label: "Insta" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-paper/20 bg-ink text-paper">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="/#top" className="font-display text-[1.7rem] leading-none tracking-[0.04em]">
          Samuel Bambi
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[1.15rem] tracking-[0.08em] uppercase opacity-80 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="font-display hidden text-[1.15rem] tracking-[0.08em] uppercase opacity-80 hover:opacity-100 xl:inline">
            @samuelbambi
          </a>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="ticket text-[1.05rem]">
            Places
          </a>
        </nav>

        <button
          type="button"
          className="font-display text-xl tracking-widest uppercase md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t-2 border-ink bg-paper px-4 py-4 text-ink md:hidden"
          aria-label="Navigation mobile"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-3xl tracking-wide uppercase"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="ticket mt-2 w-fit text-lg">
              Prendre une place
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
