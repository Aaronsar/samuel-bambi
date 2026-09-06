import Image from "next/image";
import { photos } from "@/lib/content";

const [lead, ...pack] = photos;

export default function PhotosWall() {
  return (
    <section id="photos" className="lookbook">
      <header className="lookbook-mast">
        <p className="lookbook-kicker">Planche studio</p>
        <h2 className="lookbook-title">En images</h2>
        <p className="lookbook-credit">David Djian</p>
      </header>

      <div className="lookbook-sheet">
        <figure className="lookbook-lead">
          <Image
            src={lead.src}
            alt={lead.alt}
            fill
            sizes="(max-width: 800px) 100vw, 42vw"
          />
          <figcaption>01</figcaption>
        </figure>

        <div className="lookbook-pack">
          {pack.map((photo, i) => (
            <figure key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 800px) 50vw, 28vw"
              />
              <figcaption>{String(i + 2).padStart(2, "0")}</figcaption>
            </figure>
          ))}
          <p className="lookbook-stamp">
            <span>©</span>
            David Djian
          </p>
        </div>
      </div>
    </section>
  );
}
