export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "EA SPORTS UFC 5 Wiki",
  shortName: "EA SPORTS UFC 5",
  logoText: "UFC",
  tagline: "Fighter Guides, Combos & Career Mode",
  description: "Your ultimate guide to EA SPORTS UFC 5! Explore fighter ratings, striking combos, grappling techniques, submissions, career mode strategies, controls, and gameplay guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://easportsufc5.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://easportsufc5.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.ea.com/games/ufc/ufc-5",
  heroVideoId: "ZBDDNym74Vg", // EA SPORTS UFC 5 official gameplay deep dive
  social: {
    youtube: "https://www.youtube.com/@EASPORTSUFC",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
