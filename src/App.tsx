import { weddingData } from './data/weddingData';
import { HeroSection } from './components/sections/HeroSection';
import { ParentsSection } from './components/sections/ParentsSection';
import { SponsorsSection } from './components/sections/SponsorsSection';
import { DateSection } from './components/sections/DateSection';
import { CountdownSection } from './components/sections/CountdownSection';
import { ItinerarySection } from './components/sections/ItinerarySection';
import { DressCodeSection } from './components/sections/DressCodeSection';
import { RSVPSection } from './components/sections/RSVPSection';
import { GiftSection } from './components/sections/GiftSection';
import { GallerySection } from './components/sections/GallerySection';
import { ClosingSection } from './components/sections/ClosingSection';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';

const sectionComponents = {
  hero: HeroSection,
  parents: ParentsSection,
  sponsors: SponsorsSection,
  date: DateSection,
  countdown: CountdownSection,
  itinerary: ItinerarySection,
  dressCode: DressCodeSection,
  rsvp: RSVPSection,
  gift: GiftSection,
  gallery: GallerySection,
  closing: ClosingSection,
};

export function App() {
  useRevealOnScroll();

  const enabledSections = weddingData.sections.filter((section) => section.enabled);

  return (
    <main className="page-shell">
      {enabledSections.map((section) => {
        const Section = sectionComponents[section.type];
        return <Section key={section.id} section={section} />;
      })}
    </main>
  );
}
