import { weddingData, type SectionConfig } from '../../data/weddingData';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ButtonLink } from '../ui/ButtonLink';

type SectionProps = {
  section: SectionConfig;
};

// Cambia este valor por el numero definitivo del novio o la novia.
const WEDDING_WHATSAPP_NUMBER = '529992463853';

function createWhatsappUrl(coupleNames: string) {
  const coupleNamesForMessage = coupleNames.replace(/\s*&\s*/, ' y ');
  const message = `Hola, ${coupleNamesForMessage}.

Con mucho gusto confirmo mi asistencia a su boda.

Nombre:
Número de personas que asistiremos:
Comentarios o restricciones alimenticias:

Gracias por invitarnos a compartir este día tan especial.`;

  return `https://wa.me/${WEDDING_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function RSVPSection({ section }: SectionProps) {
  const rsvp = weddingData.content.rsvp;
  const whatsappUrl = createWhatsappUrl(weddingData.content.hero.names);

  return (
    <SectionWrapper id={section.id} className="rsvp-section family-info-section">
      <header className="section__header section-info-header rsvp-section__header reveal reveal-up">
        <p className="section-eyebrow">Tu presencia es muy importante</p>
        <h2 className="section-title rsvp-section__title" aria-label={rsvp.title}>
          <span>Confirma tu</span>
          <span className="section-script-title">Asistencia</span>
        </h2>
        <p className="section-description">{rsvp.text}</p>
      </header>

      <div className="section-divider rsvp-section__divider reveal reveal-divider delay-100" aria-hidden="true">
        <span />
      </div>

      <div className="info-card rsvp-card reveal reveal-scale delay-150">
        <p className="rsvp-card__text">Ayúdanos confirmando tu asistencia para preparar cada detalle con cariño.</p>
        <ButtonLink href={whatsappUrl} label={rsvp.buttonLabel} />
      </div>
    </SectionWrapper>
  );
}
