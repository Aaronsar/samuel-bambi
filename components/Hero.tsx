import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="poster">
      <div className="poster-full">
        <Image
          src="/photos/affiche.jpg"
          alt="Affiche du spectacle Machine — Samuel Bambi"
          width={787}
          height={1181}
          priority
          sizes="(max-width: 600px) 100vw, 540px"
          className="poster-full-img"
        />
        <div className="poster-actions">
          <a href="#dates" className="ticket text-lg">
            Réserver
          </a>
          <a href="#spectacle" className="ticket ticket-ghost text-lg">
            Le spectacle
          </a>
        </div>
      </div>
      <div className="poster-sticker" aria-hidden="true">
        <Image
          src="/photos/trophee.jpg"
          alt=""
          fill
          sizes="150px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
