import type { Metadata } from "next";
import { Anton, Bebas_Neue, IBM_Plex_Sans, Newsreader } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.samuelbambi.com"),
  title: {
    default: "Samuel Bambi — Machine",
    template: "%s · Samuel Bambi",
  },
  description:
    "Samuel Bambi, humoriste. Spectacle Machine en tournée. Un cœur qui bat sous ce corps imberbe.",
  openGraph: {
    title: "Samuel Bambi — Machine",
    description:
      "Le one-man-show. En tournée. Un cœur qui bat sous ce corps imberbe.",
    locale: "fr_FR",
    type: "website",
    url: "https://www.samuelbambi.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Bambi — Machine",
    description: "Le one-man-show. En tournée.",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${bebas.variable} ${anton.variable} ${newsreader.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <a
          href="#dates"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:bg-red focus:px-3 focus:py-2 focus:text-paper"
        >
          Aller aux dates
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
