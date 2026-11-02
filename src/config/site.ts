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
    reddit?: string;
    forums?: string;
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
  description: "Explore EA SPORTS UFC 5 fighter ratings, controls, combos, career mode tips, weight classes, and gameplay guides. Master striking, grappling, and submissions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://easportsufc5.top",
  supportEmail: "support@easportsufc5.top",
  gameUrl: "https://www.ea.com/games/ufc/ufc-5",
  heroVideoId: "ZBDDNym74Vg", // EA SPORTS UFC 5 official gameplay deep dive
  social: {
    reddit: "https://www.reddit.com/r/EASportsUFC/",
    forums: "https://forums.ea.com/",
    youtube: "https://www.youtube.com/@EASPORTSUFC",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
