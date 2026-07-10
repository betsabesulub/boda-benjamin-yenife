import { weddingData, type SectionConfig } from '../../data/weddingData';
import { SectionWrapper } from '../layout/SectionWrapper';

type SectionProps = {
  section: SectionConfig;
};

export function DressCodeSection({ section }: SectionProps) {
  const dressCode = weddingData.content.dressCode;

  return (
    <SectionWrapper id={section.id} className="dress-code-section family-info-section">
      <header className="section__header section-info-header dress-code-section__header reveal reveal-up">
        <p className="section-eyebrow">Para celebrar con elegancia</p>
        <h2 className="section-title dress-code-section__title" aria-label={dressCode.title}>
          <span>Código de</span>
          <span className="section-script-title">Vestimenta</span>
        </h2>
        <p className="section-description">{dressCode.note}</p>
      </header>

      <div className="section-divider dress-code-section__divider reveal reveal-divider delay-100" aria-hidden="true">
        <span />
      </div>

      <div className="info-card dress-code-card reveal reveal-scale delay-150">
        <div className="dress-code-card__icons reveal reveal-scale delay-200" aria-hidden="true">
          <span className="dress-code-card__icon dress-code-card__icon--suit">
            <svg viewBox="0 0 80 96" role="img">
              <path d="M29 10h22l5 15-8 9-8-11-8 11-8-9 5-15Z" />
              <path d="M18 27 7 42l10 10 8-9v41h30V43l8 9 10-10-11-15-14-8-8 55-8-55-14 8Z" />
              <path d="M40 24v52" />
              <path d="m34 18 6 6 6-6" />
            </svg>
          </span>
          <span className="dress-code-card__icon dress-code-card__icon--dress">
            <svg viewBox="0 0 80 96" role="img">
              <path d="M31 12h18l4 20-13 7-13-7 4-20Z" />
              <path d="M30 31c-5 14-11 31-17 50h54c-6-19-12-36-17-50" />
              <path d="M27 16 18 31" />
              <path d="m53 16 9 15" />
              <path d="M25 81c8-5 22-5 30 0" />
            </svg>
          </span>
        </div>

        <div className="dress-code-card__body">
          <h3 className="dress-code-card__main">Formal / Elegante</h3>
          <p className="dress-code-card__note">Te sugerimos tonos sobrios y elegantes para acompañar la celebración.</p>

          <div className="dress-code-palette" aria-label="Colores sugeridos">
            <p className="dress-code-block-title">Colores sugeridos</p>
            <div className="dress-code-palette__swatches">
              <span className="dress-code-palette__swatch dress-code-palette__swatch--pink" title="Rosadito" />
              <span className="dress-code-palette__swatch dress-code-palette__swatch--pastel-blue" title="Azul pastel" />
              <span className="dress-code-palette__swatch dress-code-palette__swatch--pistachio" title="Verde pistache" />
              <span className="dress-code-palette__swatch dress-code-palette__swatch--lilac" title="Lila" />
            </div>
          </div>
        </div>

        <div className="dress-code-reserved" aria-label="Colores reservados">
          <p className="dress-code-block-title">Colores reservados</p>
          <div className="dress-code-reserved__list">
            <span className="dress-code-reserved__chip dress-code-reserved__chip--white">Blanco / marfil: novia</span>
            <span className="dress-code-reserved__chip dress-code-reserved__chip--red">Rojo: damas</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
