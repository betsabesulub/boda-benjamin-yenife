import { type CSSProperties, useRef, useState } from 'react';
import { weddingData, type SectionConfig } from '../../data/weddingData';

type SectionProps = {
  section: SectionConfig;
};

type HeroStyle = CSSProperties &
  Record<'--hero-bg-image' | '--hero-bg-size' | '--hero-bg-position', string>;

export function HeroSection({ section }: SectionProps) {
  const { content, images } = weddingData;
  const hero = content.hero;
  const date = content.date;
  const music = hero.music;
  const background = hero.background;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState('');
  const hasAudio = Boolean(music.audioSrc);
  const nameLines = hero.names.split(/\s*&\s*/);

  async function togglePlayback() {
    if (!audioRef.current || !hasAudio) {
      return;
    }

    setError('');

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (playError) {
      console.warn(music.errorMessage, playError);
      setError(music.errorMessage);
      setIsPlaying(false);
    }
  }

  function handleEnded() {
    setIsPlaying(false);
  }

  function handleError() {
    console.warn(music.errorMessage);
    setError(music.errorMessage);
    setIsPlaying(false);
  }

  const musicLabel = !hasAudio ? music.unavailableLabel : isPlaying ? music.pauseLabel : music.playLabel;
  const heroStyle = background.enabled
    ? ({
        '--hero-bg-image': `url(${background.src})`,
        '--hero-bg-size': background.size,
        '--hero-bg-position': background.position,
      } as HeroStyle)
    : undefined;

  return (
    <section id={section.id} className="hero-section" style={heroStyle}>
      <div className="hero-section__media">
        {images.hero && <img src={images.hero} alt={hero.names} />}
      </div>

      <div className="hero-section__content">
        <div className="hero-section__heading">
          <p className="hero-section__title reveal reveal-up" aria-label={hero.title}>
            {hero.titleLines.map((line, index) => (
              <span key={line} data-indent={index > 0}>
                {line}
              </span>
            ))}
          </p>
        </div>

        <div className="hero-section__main">
          {hero.ringsImage.enabled && (
            <img className="hero-section__rings reveal reveal-scale delay-100" src={hero.ringsImage.src} alt={hero.ringsImage.alt} />
          )}
          <h1 className="hero-section__names reveal reveal-scale delay-150" aria-label={hero.names}>
            <span className="hero-section__name-line hero-section__name-line--start">{nameLines[0]}</span>
            <span className="hero-section__ampersand" aria-hidden="true">
              &
            </span>
            <span className="hero-section__name-line hero-section__name-line--end">{nameLines[1]}</span>
          </h1>
          <p className="hero-section__message reveal reveal-up delay-200">{hero.message}</p>
        </div>

        <div className="hero-section__red-zone">
          <span className="hero-section__separator reveal reveal-divider delay-250" aria-hidden="true" />
          {music.enabled && (
            <div className="hero-section__music reveal reveal-scale delay-300" data-playing={isPlaying}>
              {hasAudio && (
                <audio ref={audioRef} src={music.audioSrc} preload="metadata" onEnded={handleEnded} onError={handleError} />
              )}
              <button className="hero-section__music-button" type="button" onClick={togglePlayback} disabled={!hasAudio} aria-label={musicLabel}>
                <span aria-hidden="true">{isPlaying ? 'II' : '\u25b6'}</span>
                <span>{musicLabel}</span>
              </button>
              {!hasAudio && <p>{music.unavailableLabel}</p>}
              {error && <p>{error}</p>}
            </div>
          )}
          <p className="hero-section__subtitle reveal reveal-up delay-350">{hero.subtitle}</p>
          <p className="hero-section__date reveal reveal-up delay-400">{date.displayDate}</p>
        </div>
      </div>
    </section>
  );
}
