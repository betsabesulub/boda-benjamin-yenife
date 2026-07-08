import { useEffect, useMemo, useState } from 'react';
import { weddingData, type SectionConfig } from '../../data/weddingData';

type SectionProps = {
  section: SectionConfig;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetDate: string): TimeLeft | null {
  const targetTime = new Date(targetDate).getTime();

  if (!targetDate || Number.isNaN(targetTime)) {
    return null;
  }

  const difference = Math.max(targetTime - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function DateSection({ section }: SectionProps) {
  const date = weddingData.content.date;
  const countdown = weddingData.content.countdown;
  const titleWords = date.title.split(/\s+/);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(weddingData.eventDate));
  const isComplete = useMemo(
    () => (timeLeft ? Object.values(timeLeft).every((value) => value === 0) : false),
    [timeLeft],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(weddingData.eventDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const items = timeLeft
    ? [
        { value: timeLeft.days, label: countdown.labels.days },
        { value: timeLeft.hours, label: countdown.labels.hours },
        { value: timeLeft.minutes, label: countdown.labels.minutes },
        { value: timeLeft.seconds, label: countdown.labels.seconds },
      ]
    : [];

  return (
    <section id={section.id} className="section wedding-date-section reveal reveal-up">
      <div className="wedding-date-section__inner">
        <p className="wedding-date-section__phrase reveal reveal-up">
          Con ilusión contamos los días para celebrar juntos el comienzo de nuestra historia.
        </p>

        <h2 className="wedding-date-section__title reveal reveal-up delay-100" aria-label={date.title}>
          {titleWords.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </h2>

        <div className="wedding-date-arch-wrap reveal reveal-scale delay-200">
          <img
            className="wedding-date-section__floral wedding-date-section__floral--top"
            src="/decor/floral-top-left.png"
            alt=""
            aria-hidden="true"
          />
          <div className="wedding-date-arch" aria-label={date.displayDate}>
            <span className="wedding-date-arch__weekday">{date.dayName}</span>
            <span className="wedding-date-arch__day">{date.day}</span>
            <span className="wedding-date-arch__month">{date.month}</span>
            <span className="wedding-date-arch__year">{date.year}</span>
          </div>
          <img
            className="wedding-date-section__floral wedding-date-section__floral--bottom"
            src="/decor/floral-bottom-right.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="wedding-countdown reveal reveal-up delay-250">
          <p className="wedding-countdown__title">Solo faltan</p>
          {!timeLeft ? (
            <p className="wedding-countdown__message">{countdown.unavailableMessage}</p>
          ) : isComplete ? (
            <p className="wedding-countdown__message">{countdown.completeMessage}</p>
          ) : (
            <div className="wedding-countdown__timer" aria-label={countdown.title}>
              {items.map((item, index) => (
                <div className={`wedding-countdown__unit reveal reveal-scale delay-${(index + 1) * 100}`} key={item.label}>
                  <span className="wedding-countdown__number">{String(item.value).padStart(2, '0')}</span>
                  <span className="wedding-countdown__label">{item.label}</span>
                  {index < items.length - 1 && (
                    <span className="wedding-countdown__separator" aria-hidden="true">
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <img className="wedding-date-section__detail" src="/decor/floral-detail.png" alt="" aria-hidden="true" />
      </div>
    </section>
  );
}
