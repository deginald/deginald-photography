import { MainNav } from "@/components/main-nav";
import { HeroSection } from "@/components/hero-section";
import { MarqueeStrip } from "@/components/marquee-strip";
import { AboutSection } from "@/components/about-section";
import { ServicesGrid } from "@/components/services-grid";
import { GeneralContact } from "@/components/general-contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <MainNav bookHref="#contact" />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <ServicesGrid />
        <GeneralContact />
      </main>
      <SiteFooter />
    </>
  );
}
