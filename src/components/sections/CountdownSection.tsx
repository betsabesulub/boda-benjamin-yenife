import type { SectionConfig } from '../../data/weddingData';

type SectionProps = {
  section: SectionConfig;
};

export function CountdownSection({ section }: SectionProps) {
  return <span id={section.id} className="countdown-anchor" aria-hidden="true" />;
}
