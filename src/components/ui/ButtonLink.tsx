type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
};

export function ButtonLink({ href, label, variant = 'primary' }: ButtonLinkProps) {
  return (
    <a className={`button-link button-link--${variant}`} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
