import Image from "next/image";
import { photos } from "@/lib/content";

export default function PhotosWall() {
  return (
    <section id="photos" className="prints">
      <div className="prints-inner">
        <p className="prints-kicker">Photos · David Djian</p>
        <h2 className="prints-title">En images</h2>
        <p className="prints-note">Épreuves studio. Collées à même le mur.</p>
        <div className="prints-wall">
          {photos.map((photo, i) => (
            <figure key={photo.src} className="print">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 800px) 78vw, 30vw"
              />
              <figcaption aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
