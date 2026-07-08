import { ButtonLink } from './ButtonLink';

type EventCardProps = {
  category: string;
  title: string;
  time: string;
  venue: string;
  locationLabel: string;
  image?: {
    src: string;
    alt: string;
  };
  buttonLabel: string;
  mapUrl: string;
};

export function EventCard({
  category,
  title,
  time,
  venue,
  locationLabel,
  image,
  buttonLabel,
  mapUrl,
}: EventCardProps) {
  return (
    <article className="event-card">
      <div className="event-card__heading">
        <p className="event-card__category">{category}</p>
        <h3>{title}</h3>
        <p className="event-card__time">{time}</p>
      </div>
      {image?.src && (
        <div className="event-card__image">
          <img src={image.src} alt={image.alt} />
        </div>
      )}
      <div className="event-card__details">
        <p className="event-card__venue">{venue}</p>
        {locationLabel && <p className="event-card__location">{locationLabel}</p>}
      </div>
      <ButtonLink href={mapUrl} label={buttonLabel} variant="secondary" />
    </article>
  );
}
