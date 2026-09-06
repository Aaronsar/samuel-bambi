import Image from "next/image";
import DatesList from "@/components/DatesList";
import Hero from "@/components/Hero";
import {
  bookingUrl,
  contacts,
  instagramPosts,
  instagramUrl,
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

      <section id="spectacle" className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] items-center gap-0 lg:grid-cols-2">
          <div className="flex justify-center bg-paper px-4 py-10 md:px-12 md:py-16">
            <Image
              src="/photos/affiche.jpg"
              alt="Affiche du spectacle Machine, photos David Djian"
              width={787}
              height={1181}
              sizes="(max-width: 1024px) 90vw, 420px"
              className="h-auto w-full max-w-[420px]"
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
              rel="noopener noreferrer"
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
                rel="noopener noreferrer"
                className="group relative aspect-[4/5] overflow-hidden bg-ink"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.06]"
                />
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm opacity-60">
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
