import Image from "next/image";
import DatesList from "@/components/DatesList";
import {
  bookingUrl,
  contacts,
  dates,
  instagramPosts,
  instagramUrl,
  photos,
  tiktokUrl,
} from "@/lib/content";

const cities = Array.from(new Set(dates.map((d) => d.city.toUpperCase())));

export default function Home() {
  return (
    <main id="top">
      <section className="relative overflow-hidden bg-[#c7a05e]">
        <div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-[1500px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 flex flex-col justify-end px-4 py-10 md:px-8 md:py-14 lg:py-16">
            <p className="font-display text-sm tracking-[0.22em] uppercase md:text-base">
              Very Good Show · Pan Pan Production
            </p>
            <h1 className="font-display mt-3 text-[clamp(3.4rem,12vw,8.5rem)] leading-[0.82] tracking-[0.02em]">
              Samuel
              <br />
              Bambi
            </h1>
            <p className="font-poster mt-2 text-[clamp(3.2rem,11vw,8rem)] leading-[0.85] text-paper">
              MACHINE!
            </p>
            <p className="font-serif mt-5 max-w-lg text-xl italic leading-snug md:text-[1.65rem]">
              « Un cœur qui bat sous ce corps imberbe. »
            </p>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed md:text-base">
              La dernière fois, complet en 40 min. Là vous prenez votre temps.
              J’aime pas trop le délire.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#dates" className="ticket text-lg">
                Voir les dates
              </a>
              <a href="#spectacle" className="ticket ticket-ghost text-lg">
                Le spectacle
              </a>
            </div>
          </div>

          <div className="relative min-h-[54vh] lg:min-h-[calc(100svh-64px)]">
            <Image
              src="/photos/hero.jpg"
              alt="Samuel Bambi, sourire, chemise rayée"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[50%_12%]"
            />
            <p className="font-display absolute right-4 bottom-4 bg-ink px-3 py-1 text-sm tracking-[0.16em] text-paper uppercase">
              En tournée 26 · 27
            </p>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <span key={copy}>
              {cities.map((city) => (
                <span key={`${copy}-${city}`} className="px-4">
                  {city} ★
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section id="dates" className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm tracking-[0.2em] text-red uppercase">Tournée</p>
            <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.85]">
              Les dates
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed opacity-70">
            {dates.length} salles. Lille est déjà complet. Le reste, c’est
            maintenant ou jamais.
          </p>
        </div>
        <DatesList />
      </section>

      <section id="spectacle" className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] items-stretch gap-0 lg:grid-cols-2">
          <div className="relative min-h-[70vh] overflow-hidden">
            <Image
              src="/photos/affiche.jpg"
              alt="Affiche du spectacle Machine, photos David Djian"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-14 md:px-12 md:py-20">
            <p className="font-display text-sm tracking-[0.22em] text-ocre uppercase">
              Le spectacle
            </p>
            <h2 className="font-poster mt-2 text-[clamp(4rem,12vw,8rem)] leading-[0.85]">
              MACHINE!
            </h2>
            <blockquote className="font-serif mt-6 max-w-xl text-2xl leading-snug italic md:text-[1.85rem]">
              Si Samuel était une scène de film, il serait l’orchestre du Titanic
              : celui qui continue de jouer pendant que le bateau coule.
            </blockquote>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed opacity-80">
              Stand-up, personnages, autodérision. Co-écrit avec Jonathan Demayo
              et Benjamin Ifrah. Mis en scène par Nicolas Nebot. Une heure où ça
              ne s’arrête pas — même après Danse avec les stars.
            </p>
            <p className="mt-4 text-sm opacity-55">
              (Audacieux et hilarant. Cette phrase, c’est de lui.)
            </p>
            <a href="#dates" className="ticket mt-8 w-fit text-lg">
              Je viens rire
            </a>
          </div>
        </div>
      </section>

      <section id="photos" className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.85]">
            En images
          </h2>
          <p className="text-sm opacity-60">Photos © David Djian</p>
        </div>
        <div className="photo-grid">
          {photos.map((photo) => (
            <figure key={photo.src} className="relative min-h-[280px] overflow-hidden bg-paper-2">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      <section id="insta" className="border-y-2 border-ink bg-paper-2">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-sm tracking-[0.2em] text-red uppercase">
                Le vrai journal
              </p>
              <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.85]">
                @samuelbambi
              </h2>
            </div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="ticket ticket-ghost"
            >
              Ouvrir Instagram
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
            {instagramPosts.map((post) => (
              <a
                key={post.src}
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-[4/5] overflow-hidden bg-ink"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm opacity-60">
            Coulisses, dates, et le reste. TikTok aussi :{" "}
            <a href={tiktokUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              @samuelbambi
            </a>
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.85]">
          Contact
        </h2>
        <p className="mt-3 max-w-lg text-base opacity-70">
          Pour booker, la tournée ou la presse. Le public, c’est plutôt Insta.
        </p>
        <div className="mt-10 grid gap-px bg-ink sm:grid-cols-3">
          {contacts.map((c) => (
            <a
              key={c.email}
              href={`mailto:${c.email}`}
              className="bg-paper p-6 transition hover:bg-ocre"
            >
              <p className="font-display text-sm tracking-[0.16em] uppercase opacity-50">
                {c.role}
              </p>
              <p className="font-display mt-2 text-3xl leading-none">{c.name}</p>
              <p className="mt-3 text-sm underline decoration-red/70 underline-offset-4">
                {c.email}
              </p>
            </a>
          ))}
        </div>
        <a href={bookingUrl} target="_blank" rel="noreferrer" className="ticket mt-10 text-lg">
          Billetterie officielle
        </a>
      </section>
    </main>
  );
}
