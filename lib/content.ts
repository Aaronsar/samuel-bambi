export type ShowDate = {
  id: string;
  city: string;
  venue: string;
  dept: string;
  dateLabel: string;
  iso: string;
  month: string;
  ticketUrl?: string;
  soldOut?: boolean;
  featured?: boolean;
};

export const instagramUrl = "https://www.instagram.com/samuelbambi/";
export const tiktokUrl = "https://www.tiktok.com/@samuelbambi?lang=fr";
export const bookingUrl = "https://samuelbambi.francebillet.com/artist/samuel-bambi/";

export const dates: ShowDate[] = [
  {
    id: "nice",
    city: "Nice",
    venue: "La Stella — La Trinité",
    dept: "06",
    dateLabel: "1er octobre",
    iso: "2026-10-01",
    month: "Octobre 2026",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-la-stella-21632997/",
  },
  {
    id: "bruxelles",
    city: "Bruxelles",
    venue: "Centre culturel d'Auderghem",
    dept: "BE",
    dateLabel: "13 octobre",
    iso: "2026-10-13",
    month: "Octobre 2026",
    ticketUrl: "https://ccauderghem.be/samuel-bambi-machine/",
  },
  {
    id: "liege",
    city: "Liège",
    venue: "Le Trocadéro",
    dept: "BE",
    dateLabel: "14 octobre",
    iso: "2026-10-14",
    month: "Octobre 2026",
    ticketUrl:
      "https://shop.utick.net/?pos=TROCADERO&module=ACTIVITYSERIEDETAILS&s=F48204B1-99D6-72FC-EF93-1C4FD05C104E&d=8D107933-2388-503E-94E9-7FF432725BB8",
  },
  {
    id: "marseille",
    city: "Marseille",
    venue: "Le Cepac Silo",
    dept: "13",
    dateLabel: "29 octobre",
    iso: "2026-10-29",
    month: "Octobre 2026",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-le-cepac-silo-21206971/",
  },
  {
    id: "strasbourg",
    city: "Strasbourg",
    venue: "Palais de la Musique et des Congrès",
    dept: "67",
    dateLabel: "31 octobre",
    iso: "2026-10-31",
    month: "Octobre 2026",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-p-m-c-strasbourg-21272074/",
  },
  {
    id: "metz",
    city: "Metz",
    venue: "Congrès Robert Schuman",
    dept: "57",
    dateLabel: "1er novembre",
    iso: "2026-11-01",
    month: "Novembre 2026",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-metz-congres-robert-schuman-21274162/",
  },
  {
    id: "rennes",
    city: "Rennes",
    venue: "Le Ponant — Pacé",
    dept: "35",
    dateLabel: "7 novembre",
    iso: "2026-11-07",
    month: "Novembre 2026",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-le-ponant-pace-21125113/",
  },
  {
    id: "cigale",
    city: "Paris",
    venue: "La Cigale",
    dept: "75",
    dateLabel: "20 → 22 novembre",
    iso: "2026-11-20",
    month: "Novembre 2026",
    ticketUrl:
      "https://billetterie-lacigale.tickandlive.com/evenement/samuel-bambi-dans-machine-2",
    featured: true,
  },
  {
    id: "nantes",
    city: "Nantes",
    venue: "Cité des Congrès",
    dept: "44",
    dateLabel: "25 novembre",
    iso: "2026-11-25",
    month: "Novembre 2026",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-cite-des-congres-nantes-21125157/",
  },
  {
    id: "tours",
    city: "Joué-lès-Tours",
    venue: "Espace Malraux",
    dept: "37",
    dateLabel: "26 novembre",
    iso: "2026-11-26",
    month: "Novembre 2026",
    ticketUrl: "https://az-prod.trium.fr/fr/t/-/event/67557",
  },
  {
    id: "nimes",
    city: "Nîmes",
    venue: "Auditorium Novotel Atria",
    dept: "30",
    dateLabel: "28 novembre",
    iso: "2026-11-28",
    month: "Novembre 2026",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-auditorium-hotel-novotel-atria-nimes-21217066/",
  },
  {
    id: "montpellier",
    city: "Montpellier",
    venue: "Le Corum",
    dept: "34",
    dateLabel: "29 novembre",
    iso: "2026-11-29",
    month: "Novembre 2026",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-le-corum-montpellier-21217076/",
  },
  {
    id: "grenoble",
    city: "Grenoble",
    venue: "L'Ilyade — Seyssinet-Pariset",
    dept: "38",
    dateLabel: "3 décembre",
    iso: "2026-12-03",
    month: "Décembre 2026",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-ilyade-seyssinet-pariset-21147610/",
  },
  {
    id: "lille",
    city: "Lille",
    venue: "Grand Palais",
    dept: "59",
    dateLabel: "6 décembre",
    iso: "2026-12-06",
    month: "Décembre 2026",
    soldOut: true,
  },
  {
    id: "lyon",
    city: "Lyon",
    venue: "Bourse du Travail",
    dept: "69",
    dateLabel: "10 décembre",
    iso: "2026-12-10",
    month: "Décembre 2026",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-bourse-du-travail-lyon-21131359/",
  },
  {
    id: "reims",
    city: "Reims",
    venue: "Le K",
    dept: "51",
    dateLabel: "16 décembre",
    iso: "2026-12-16",
    month: "Décembre 2026",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-le-k-21283906/",
  },
  {
    id: "clermont",
    city: "Clermont-Ferrand",
    venue: "Opéra-Théâtre",
    dept: "63",
    dateLabel: "23 janvier",
    iso: "2027-01-23",
    month: "Janvier 2027",
    ticketUrl:
      "https://billetterie.comediedesvolcans.fr/reserver/samuel-bambi/158446",
  },
  {
    id: "toulouse",
    city: "Toulouse",
    venue: "Casino Barrière",
    dept: "31",
    dateLabel: "26 janvier",
    iso: "2027-01-26",
    month: "Janvier 2027",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-casino-barriere-toulouse-21199018/",
  },
  {
    id: "bordeaux",
    city: "Bordeaux",
    venue: "Théâtre Fémina",
    dept: "33",
    dateLabel: "27 janvier",
    iso: "2027-01-27",
    month: "Janvier 2027",
    ticketUrl: "https://theatrefemina.dstickets.fr/reserver/samuel-bambi/157238",
  },
  {
    id: "limoges",
    city: "Limoges",
    venue: "Espace Crouzy — Boisseuil",
    dept: "87",
    dateLabel: "28 janvier",
    iso: "2027-01-28",
    month: "Janvier 2027",
    ticketUrl:
      "https://spectacles.bleucitron.net/reserver/samuel-bambi-boisseuil-crouzy/9321?idwl=6",
  },
  {
    id: "lourdes",
    city: "Lourdes",
    venue: "Palais des Congrès",
    dept: "65",
    dateLabel: "30 janvier",
    iso: "2027-01-30",
    month: "Janvier 2027",
    ticketUrl: "https://my.weezevent.com/samuel-bambi-machine",
  },
  {
    id: "avignon",
    city: "Avignon",
    venue: "Confluence Spectacles",
    dept: "84",
    dateLabel: "6 février",
    iso: "2027-02-06",
    month: "Février 2027",
    ticketUrl:
      "https://www.ticketmaster.fr/fr/manifestation/samuel-bambi-billet/idmanif/663401/idtier/37360865",
  },
  {
    id: "toulon",
    city: "Toulon",
    venue: "Palais Neptune",
    dept: "83",
    dateLabel: "5 mars",
    iso: "2027-03-05",
    month: "Mars 2027",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-palais-neptune-toulon-21617293/",
  },
  {
    id: "valence",
    city: "Bourg-lès-Valence",
    venue: "Théâtre le Rhône",
    dept: "26",
    dateLabel: "6 mars",
    iso: "2027-03-06",
    month: "Mars 2027",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-theatre-le-rhone-bourg-les-valence-21624347/",
  },
  {
    id: "perpignan",
    city: "Perpignan",
    venue: "Palais des Congrès",
    dept: "66",
    dateLabel: "16 mars",
    iso: "2027-03-16",
    month: "Mars 2027",
    ticketUrl:
      "https://billetterie-boitaclous.tickandlive.com/reserver/samuel-bambi/158912",
  },
  {
    id: "beziers",
    city: "Béziers",
    venue: "Zinga Zanga",
    dept: "34",
    dateLabel: "17 mars",
    iso: "2027-03-17",
    month: "Mars 2027",
    ticketUrl:
      "https://www.ticketmaster.fr/fr/manifestation/samuel-bambi-billet/idmanif/657568/idtier/43209120",
  },
  {
    id: "laruns",
    city: "Laruns",
    venue: "Espace 2015",
    dept: "64",
    dateLabel: "20 mars",
    iso: "2027-03-20",
    month: "Mars 2027",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-espace-2015-laruns-21654930/",
  },
  {
    id: "folies",
    city: "Paris",
    venue: "Les Folies Bergère",
    dept: "75",
    dateLabel: "24 mars",
    iso: "2027-03-24",
    month: "Mars 2027",
    ticketUrl:
      "https://samuelbambi.francebillet.com/artist/samuel-bambi/samuel-bambi-machine-les-folies-bergere-paris-4072824/",
    featured: true,
  },
  {
    id: "saint-etienne",
    city: "Saint-Étienne",
    venue: "La Comète",
    dept: "42",
    dateLabel: "10 avril",
    iso: "2027-04-10",
    month: "Avril 2027",
    ticketUrl:
      "https://samuelbambi.francebillet.com/event/samuel-bambi-machine-tournee-la-comete-st-etienne-21617606/",
  },
];

export const photos = [
  {
    src: "/photos/portrait.jpg",
    alt: "Samuel Bambi, portrait chemise blanche",
    className: "span-2",
  },
  {
    src: "/photos/denim.jpg",
    alt: "Samuel Bambi en veste en jean",
    className: "",
  },
  {
    src: "/photos/trophee.jpg",
    alt: "Samuel Bambi avec le trophée de Danse avec les stars",
    className: "",
  },
  {
    src: "/photos/chaise.jpg",
    alt: "Samuel Bambi assis sur une chaise",
    className: "",
  },
  {
    src: "/photos/ocre.jpg",
    alt: "Samuel Bambi, chemise rayée sur fond ocre",
    className: "",
  },
];

export const instagramPosts = [
  {
    src: "/instagram/3978151864517574269.jpg",
    href: "https://www.instagram.com/p/Dc1PAsrIL59/",
    alt: "Publication Instagram de Samuel Bambi",
    width: 360,
    height: 640,
  },
  {
    src: "/instagram/3975967241883870316.jpg",
    href: "https://www.instagram.com/p/DcteSQTE-Rs/",
    alt: "Samuel Bambi — Un dimanche à la campagne",
    width: 1080,
    height: 1350,
  },
  {
    src: "/instagram/3975029332803888659.jpg",
    href: "https://www.instagram.com/p/DcqJB4ZiKYT/",
    alt: "Samuel Bambi à Nice — Machine",
    width: 1122,
    height: 1409,
  },
  {
    src: "/instagram/3967240589415769245.jpg",
    href: "https://www.instagram.com/p/DcOeEv2o2Sd/",
    alt: "Publication Instagram de Samuel Bambi",
    width: 360,
    height: 640,
  },
  {
    src: "/instagram/3967744249384562967.jpg",
    href: "https://www.instagram.com/p/DcQQl9wKnEX/",
    alt: "Publication Instagram de Samuel Bambi",
    width: 360,
    height: 640,
  },
  {
    src: "/instagram/3962164308766789681.jpg",
    href: "https://www.instagram.com/p/Db8b3JFxpAx/",
    alt: "Publication Instagram de Samuel Bambi",
    width: 360,
    height: 640,
  },
  {
    src: "/instagram/3896284451986521443.jpg",
    href: "https://www.instagram.com/p/DYSYhDQiL1j/",
    alt: "Portrait studio de Samuel Bambi",
    width: 1080,
    height: 1438,
  },
  {
    src: "/instagram/3884709672410176515.jpg",
    href: "https://www.instagram.com/p/DXpQt1viFwD/",
    alt: "Publication Instagram de Samuel Bambi",
    width: 1080,
    height: 1292,
  },
  {
    src: "/instagram/3881070075927081418.jpg",
    href: "https://www.instagram.com/p/DXcVKvYCDHK/",
    alt: "Publication Instagram de Samuel Bambi",
    width: 360,
    height: 640,
  },
  {
    src: "/instagram/3878873329457170661.jpg",
    href: "https://www.instagram.com/p/DXUhr3zCAjl/",
    alt: "Publication Instagram de Samuel Bambi",
    width: 360,
    height: 639,
  },
  {
    src: "/instagram/3877954677569996617.jpg",
    href: "https://www.instagram.com/p/DXRQzujn8dJ/",
    alt: "Publication Instagram de Samuel Bambi",
    width: 360,
    height: 640,
  },
  {
    src: "/instagram/3877878988282831090.jpg",
    href: "https://www.instagram.com/p/DXQ_mTajKDy/",
    alt: "Publication Instagram de Samuel Bambi",
    width: 360,
    height: 640,
  },
];

export const contacts = [
  {
    role: "Production",
    name: "Very Good Show",
    email: "booking@verygoodshow.com",
  },
  {
    role: "Tournée",
    name: "Fanny Jourdan",
    email: "fanny@tcholele.fr",
  },
  {
    role: "Presse",
    name: "Stéphane Cohen",
    email: "stephane@impresario-presse.com",
  },
];
