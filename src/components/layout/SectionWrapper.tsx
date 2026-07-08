import type { PropsWithChildren } from 'react';

type SectionWrapperProps = PropsWithChildren<{
  id: string;
  title?: string;
  intro?: string;
  tone?: 'default' | 'surface' | 'accent';
  className?: string;
}>;

export function SectionWrapper({
  id,
  title,
  intro,
  tone = 'default',
  className = '',
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section section--${tone} reveal reveal-up ${className}`.trim()}>
      <div className="section__inner">
        {(title || intro) && (
          <header className="section__header">
            {title && <h2>{title}</h2>}
            {intro && <p>{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
