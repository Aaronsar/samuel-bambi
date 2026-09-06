import { contacts, instagramUrl, tiktokUrl } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-4xl leading-none">Samuel Bambi</p>
          <p className="font-poster mt-2 text-3xl text-ocre">MACHINE!</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-70">
            Humoriste. En tournée. Un cœur qui bat sous ce corps imberbe.
          </p>
        </div>
        <div>
          <p className="font-display text-lg tracking-[0.14em] uppercase opacity-50">Le site</p>
          <ul className="mt-3 space-y-1 font-display text-xl tracking-wide uppercase">
            <li><a href="/#dates">Dates</a></li>
            <li><a href="/#spectacle">Le spectacle</a></li>
            <li><a href="/#photos">Photos</a></li>
            <li><a href="/mentions-legales">Mentions légales</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-lg tracking-[0.14em] uppercase opacity-50">Écrire</p>
          <ul className="mt-3 space-y-2 text-sm">
            {contacts.map((c) => (
              <li key={c.email}>
                <span className="opacity-60">{c.role} — {c.name}</span>
                <br />
                <a href={`mailto:${c.email}`} className="underline decoration-ocre/60 underline-offset-4">
                  {c.email}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4 font-display text-lg tracking-widest uppercase">
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            <a href={tiktokUrl} target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </div>
      <p className="border-t border-paper/15 px-4 py-4 text-center text-xs opacity-50 md:px-8">
        Photos © David Djian · Very Good Show & Pan Pan Production
      </p>
    </footer>
  );
}
