import { weddingData, type SectionConfig } from '../../data/weddingData';
import { SectionWrapper } from '../layout/SectionWrapper';

type SectionProps = {
  section: SectionConfig;
};

export function ParentsSection({ section }: SectionProps) {
  const parents = weddingData.content.parents;

  return (
    <SectionWrapper id={section.id} className="parents-section family-info-section">
      <header className="section__header section-info-header parents-section__header reveal reveal-up">
        <p className="section-eyebrow">Con gratitud y amor</p>
        <h2 className="section-title parents-section__title" aria-label={parents.title}>
          <span>Nuestros</span>
          <span className="section-script-title">Padres</span>
        </h2>
        <p className="section-description">{parents.intro}</p>
      </header>

      <div className="section-divider parents-section__divider reveal reveal-divider delay-100" aria-hidden="true">
        <span />
      </div>

      <div className="info-card-list parents-section__list">
        {parents.list.map((group, index) => (
          <article
            className={`info-card parents-section__card reveal reveal-scale ${index === 0 ? 'delay-150' : 'delay-250'}`}
            key={group.role}
          >
            {group.role && <h3 className="info-card-title">{group.role}</h3>}
            <div className="info-card-names parents-section__names">
              {group.names.map((name) => {
                const hasMemorialCross = name.endsWith('†');
                const displayName = hasMemorialCross ? name.replace(/\s*†$/, '') : name;

                return (
                  <p className="info-card-name info-card-name--inline" key={name}>
                    <span>{displayName}</span>
                    {hasMemorialCross && (
                      <span className="parents-section__memorial" aria-label="fallecida">
                        †
                      </span>
                    )}
                  </p>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
