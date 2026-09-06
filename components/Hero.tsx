import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="poster">
      <div className="poster-top">
        <p className="poster-kicker">
          <span className="poster-stars" aria-hidden="true">
            ★ ★ ★
          </span>
          Very Good Show et Pan Pan production présentent
        </p>
        <h1 className="poster-name">Samuel Bambi</h1>
      </div>

      <div className="poster-shot">
        <Image
          src="/photos/affiche.jpg"
          alt="Samuel Bambi, lunettes noires et pinceau — spectacle Machine"
          fill
          priority
          sizes="100vw"
          className="poster-photo"
        />
        <div className="poster-shot-shade" />
        <div className="poster-shot-copy">
          <p className="poster-machine">
            Machine
            <span aria-hidden="true">!</span>
          </p>
          <p className="poster-tag">Un cœur qui bat sous ce corps imberbe</p>
          <div className="poster-actions">
            <a href="#dates" className="ticket">
              Réserver
            </a>
            <a href="#spectacle" className="ticket ticket-ghost ticket-ghost-light">
              Le spectacle
            </a>
          </div>
        </div>
      </div>

      <div className="poster-sticker" aria-hidden="true">
        <Image
          src="/photos/trophee.jpg"
          alt=""
          fill
          sizes="120px"
          className="object-cover"
        />
      </div>

      <div className="poster-strip">
        <p>20 → 22 novembre 2026</p>
        <span aria-hidden="true">★</span>
        <p>La Cigale</p>
      </div>
    </section>
  );
}
