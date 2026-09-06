import Image from "next/image";
import DatesList from "@/components/DatesList";
import Hero from "@/components/Hero";
import InstaRail from "@/components/InstaRail";
import SpectacleBlock from "@/components/SpectacleBlock";
import {
  bookingUrl,
  contacts,
  photos,
  tiktokUrl,
} from "@/lib/content";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="dates" className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <DatesList />
      </section>

      <SpectacleBlock />

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
        <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8 md:py-16">
          <div className="mb-6">
            <p className="font-display text-sm tracking-[0.2em] text-red uppercase">
              Le vrai journal
            </p>
            <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.85]">
              @samuelbambi
            </h2>
          </div>
          <InstaRail />
          <p className="mt-4 text-sm opacity-60">
            Coulisses, dates, et le reste. TikTok aussi :{" "}
            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
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
              className="bg-paper p-6 transition duration-200 hover:-translate-y-1 hover:bg-ocre"
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
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="ticket mt-10 text-lg">
          Billetterie officielle
        </a>
      </section>
    </main>
  );
}
