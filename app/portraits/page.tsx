import type { Metadata } from "next";
import { MainNav } from "@/components/main-nav";
import { PortraitsHero } from "@/components/portraits-hero";
import { MarqueeStrip } from "@/components/marquee-strip";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { PortraitsPricing } from "@/components/portraits-pricing";
import { BookingSection } from "@/components/booking-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Portrait & Mini Session Photography | Deginald",
  description:
    "On-location mini session portrait photography — $75 sessions, 5 edited images.",
};

export default function PortraitsPage() {
  return (
    <>
      <MainNav />
      <main>
        <PortraitsHero />
        <MarqueeStrip />
        <PortfolioGallery />
        <PortraitsPricing />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  );
}
