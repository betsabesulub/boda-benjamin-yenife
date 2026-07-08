type MonogramProps = {
  value: string;
};

export function Monogram({ value }: MonogramProps) {
  return <div className="monogram" aria-label={value}>{value}</div>;
}
