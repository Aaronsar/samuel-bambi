import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <p className="font-display text-sm tracking-[0.2em] text-red uppercase">
        Informations légales
      </p>
      <h1 className="font-display mt-2 text-6xl leading-none md:text-7xl">
        Mentions légales
      </h1>

      <section className="mt-10 space-y-3 text-[0.95rem] leading-relaxed">
        <h2 className="font-display text-3xl">Éditeur</h2>
        <p>
          Very Good Show
          <br />
          39 rue du Sentier
          <br />
          75002 Paris — France
          <br />
          Téléphone : 01 42 36 85 24
          <br />
          SIREN : 520 987 983 · SIRET : 520 987 983 00019
          <br />
          Code APE : 9001Z — Arts du spectacle vivant
        </p>
      </section>

      <section className="mt-10 space-y-3 text-[0.95rem] leading-relaxed">
        <h2 className="font-display text-3xl">Hébergement</h2>
        <p>
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133
          <br />
          Covina, CA 91723 — États-Unis
        </p>
      </section>

      <section className="mt-10 space-y-3 text-[0.95rem] leading-relaxed">
        <h2 className="font-display text-3xl">Photos</h2>
        <p>
          Les photographies de Samuel Bambi sont l’œuvre de David Djian. Elles
          ne peuvent être reproduites sans son accord, et doivent être créditées
          à son nom.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-[0.95rem] leading-relaxed">
        <h2 className="font-display text-3xl">Données personnelles</h2>
        <p>
          Ce site ne dépose pas de cookies de mesure d’audience et ne collecte
          pas d’adresse e-mail. Les liens vers les billetteries et les réseaux
          sociaux renvoient vers des sites tiers, soumis à leurs propres
          politiques.
        </p>
        <p>
          Conformément au RGPD, pour toute question :{" "}
          <a href="mailto:booking@verygoodshow.com" className="underline underline-offset-4">
            booking@verygoodshow.com
          </a>
          . Vous pouvez aussi saisir la CNIL.
        </p>
      </section>
    </main>
  );
}
