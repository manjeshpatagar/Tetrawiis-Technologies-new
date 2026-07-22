export function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : ''}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && (
        <p className={`section-copy ${center ? 'mx-auto' : ''}`}>{copy}</p>
      )}
    </div>
  );
}
