import type { Metadata } from "next";
import { MainNav } from "@/components/main-nav";
import { DroneSection } from "@/components/drone-section";
import { DronePortfolio } from "@/components/drone-portfolio";
import { DronePricing } from "@/components/drone-pricing";
import { BookingSection } from "@/components/booking-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Drone Services | Deginald",
  description:
    "Aerial photography and video — portraits, events, and property flyovers.",
};

export default function DronePage() {
  return (
    <>
      <MainNav />
      <main className="pt-20">
        <DroneSection />
        <DronePortfolio />
        <DronePricing />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  );
}
