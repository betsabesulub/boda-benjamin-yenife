import { weddingData, type SectionConfig } from '../../data/weddingData';
import { SectionWrapper } from '../layout/SectionWrapper';

type SectionProps = {
  section: SectionConfig;
};

export function SponsorsSection({ section }: SectionProps) {
  const sponsors = weddingData.content.sponsors;
  const definedSponsors = sponsors.list.filter((sponsor) => sponsor.role);
  const accompanyingSponsors = sponsors.list.filter((sponsor) => !sponsor.role);

  return (
    <SectionWrapper id={section.id} className="sponsors-section family-info-section">
      <header className="section__header section-info-header sponsors-section__header reveal reveal-up">
        <p className="section-eyebrow">Testigos de nuestro amor</p>
        <h2 className="section-title sponsors-section__title" aria-label={sponsors.title}>
          <span>Nuestros</span>
          <span className="section-script-title">Padrinos</span>
        </h2>
        <p className="section-description">{sponsors.intro}</p>
      </header>

      <div className="section-divider sponsors-section__divider reveal reveal-divider delay-100" aria-hidden="true">
        <span />
      </div>

      <div className="info-card-list sponsors-section__list">
        {definedSponsors.map((sponsor, index) => (
          <article
            className={`info-card sponsors-section__card reveal reveal-scale ${index === 0 ? 'delay-150' : 'delay-250'}`}
            key={`${sponsor.names.join('-')}-${index}`}
          >
            <h3 className="info-card-title">{sponsor.role}</h3>
            <div className="info-card-names sponsors-section__names">
              {sponsor.names.map((name) => (
                <p className="info-card-name" key={name}>
                  {name}
                </p>
              ))}
            </div>
          </article>
        ))}

        {accompanyingSponsors.length > 0 && (
          <article className="info-card sponsors-section__card reveal reveal-scale delay-250">
            <h3 className="info-card-title">CON CARIÑO NOS ACOMPAÑAN</h3>
            <div className="info-card-names sponsors-section__names">
              {accompanyingSponsors.map((group, groupIndex) => (
                <div className="sponsors-section__pair" key={`${group.names.join('-')}-${groupIndex}`}>
                  {group.names.map((name) => (
                    <p className="info-card-name" key={name}>
                      {name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </article>
        )}
      </div>
    </SectionWrapper>
  );
}
