import { weddingData, type SectionConfig } from '../../data/weddingData';

type SectionProps = {
  section: SectionConfig;
};

export function ClosingSection({ section }: SectionProps) {
  const { content } = weddingData;
  const closing = content.closing;
  const hero = content.hero;
  const date = content.date;
  const nameLines = hero.names.split(/\s*&\s*/);

  return (
    <section id={section.id} className="closing-section reveal reveal-up" aria-labelledby="closing-title">
      <img
        className="closing-section__floral closing-section__floral--top"
        src="/decor/floral-top-left.png"
        alt=""
        aria-hidden="true"
      />

      <div className="closing-section__content">
        <p id="closing-title" className="closing-section__title reveal reveal-up">
          {closing.title}
        </p>

        <p className="closing-section__signoff reveal reveal-up delay-100">Con amor,</p>

        <h2 className="closing-section__names reveal reveal-scale delay-150" aria-label={hero.names}>
          <span>{nameLines[0]}</span>
          <span className="closing-section__ampersand" aria-hidden="true">
            &
          </span>
          <span>{nameLines[1]}</span>
        </h2>

        <p className="closing-section__date reveal reveal-up delay-200">
          {date.day} · {date.month} · {date.year}
        </p>
      </div>

      <div className="closing-section__red-zone reveal reveal-up delay-250" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
