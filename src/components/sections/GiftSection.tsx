import { weddingData, type SectionConfig } from '../../data/weddingData';

type SectionProps = {
  section: SectionConfig;
};

export function GiftSection({ section }: SectionProps) {
  const gift = weddingData.content.gift;

  return (
    <section id={section.id} className="gift-section reveal reveal-up" aria-labelledby="gift-title">
      <div className="gift-section__inner">
        <article className="gift-card reveal reveal-scale delay-100">
          <img
            className="gift-card__floral gift-card__floral--top"
            src="/decor/floral-bottom-right.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="gift-card__floral gift-card__floral--bottom"
            src="/decor/floral-detail.png"
            alt=""
            aria-hidden="true"
          />

          <h2 id="gift-title" className="gift-card__title reveal reveal-up delay-150">
            {gift.title}
          </h2>

          <div className="gift-card__envelope reveal reveal-scale delay-250" aria-hidden="true">
            <svg viewBox="0 0 120 82" role="img">
              <path d="M11 16.5h98a5.5 5.5 0 0 1 5.5 5.5v46a5.5 5.5 0 0 1-5.5 5.5H11A5.5 5.5 0 0 1 5.5 68V22a5.5 5.5 0 0 1 5.5-5.5Z" />
              <path d="m8.5 20.5 48.8 35a4.8 4.8 0 0 0 5.4 0l48.8-35" />
              <path d="M7.5 70.5 45 43.5" />
              <path d="m112.5 70.5-37.5-27" />
              <circle cx="60" cy="47" r="7.4" />
            </svg>
          </div>

          <p className="gift-card__main reveal reveal-up delay-300">{gift.text}</p>
          <p className="gift-card__message reveal reveal-up delay-350">{gift.details}</p>
        </article>
      </div>
    </section>
  );
}
