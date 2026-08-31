import type { Metadata } from "next";
import { MainNav } from "@/components/main-nav";
import { RealEstateHero } from "@/components/re-hero";
import { RealEstatePortfolio } from "@/components/re-portfolio";
import { RealEstatePackageBuilder } from "@/components/re-package-builder";
import { BookingSection } from "@/components/booking-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Real Estate Photography & Video | Deginald",
  description:
    "Real estate media packages — interior/exterior photography, drone aerial coverage, video walkthroughs, and twilight edits. Build your package and see live pricing.",
};

export default function RealEstatePage() {
  return (
    <>
      <MainNav />
      <main>
        <RealEstateHero />
        <RealEstatePortfolio />
        <RealEstatePackageBuilder />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  );
}
