import { weddingData, type SectionConfig } from '../../data/weddingData';
import { SectionWrapper } from '../layout/SectionWrapper';
import { EventCard } from '../ui/EventCard';

type SectionProps = {
  section: SectionConfig;
};

export function ItinerarySection({ section }: SectionProps) {
  const itinerary = weddingData.content.itinerary;

  return (
    <SectionWrapper id={section.id} className="itinerary-section family-info-section">
      <header className="section__header section-info-header itinerary-section__header reveal reveal-up">
        <h2 className="section-title itinerary-section__title" aria-label={itinerary.title}>
          <span>Nuestro</span>
          <span className="section-script-title">Itinerario</span>
        </h2>
        <p className="section-description">Compartamos juntos cada momento especial.</p>
      </header>

      <div className="section-divider itinerary-section__divider reveal reveal-divider delay-100" aria-hidden="true">
        <span />
      </div>

      <div className="event-list">
        {itinerary.events.map((event, index) => (
          <div className={`event-list__item reveal reveal-scale ${index === 0 ? 'delay-150' : 'delay-250'}`} key={`${event.title}-${event.time}`}>
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
