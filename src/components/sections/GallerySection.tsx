import { useState } from 'react';
import { weddingData, type SectionConfig } from '../../data/weddingData';
import { SectionWrapper } from '../layout/SectionWrapper';

type SectionProps = {
  section: SectionConfig;
};

const galleryFocusClasses = ['focus-center', 'focus-center', 'focus-center', 'focus-top'] as const;

export function GallerySection({ section }: SectionProps) {
  const gallery = weddingData.content.gallery;
  const images = weddingData.images.gallery;
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const activeImage = activeImageIndex === null ? null : images[activeImageIndex];

  function closeLightbox() {
    setActiveImageIndex(null);
  }

  return (
    <SectionWrapper id={section.id} className="gallery-section family-info-section">
      <header className="section__header section-info-header gallery-section__header reveal reveal-up">
        <p className="section-eyebrow">Momentos especiales</p>
        <h2 className="section-title gallery-section__title" aria-label={gallery.title}>
          <span>Nuestra</span>
          <span className="section-script-title">Galería</span>
        </h2>
        <p className="section-description">Algunos recuerdos que forman parte de nuestra historia.</p>
      </header>

      <div className="section-divider gallery-section__divider reveal reveal-divider delay-100" aria-hidden="true">
        <span />
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => {
          const focusClass = galleryFocusClasses[index] ?? 'focus-center';

          return (
            <figure className={`gallery-grid__item reveal reveal-scale delay-${(index + 1) * 100}`} key={`${image.alt}-${index}`}>
              <button
                className={`gallery-grid__button ${focusClass}`}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Ver ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} />
              </button>
            </figure>
          );
        })}
      </div>

      {activeImage && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={activeImage.alt}>
          <button className="gallery-lightbox__backdrop" type="button" onClick={closeLightbox} aria-label="Cerrar galería" />
          <div className="gallery-lightbox__content">
            <button className="gallery-lightbox__close" type="button" onClick={closeLightbox} aria-label="Cerrar galería">
              ×
            </button>
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
