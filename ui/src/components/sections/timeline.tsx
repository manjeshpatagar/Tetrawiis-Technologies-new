export function Timeline({
  items,
}: {
  items: ReadonlyArray<{ year: string; title: string; text: string }>;
}) {
  return (
    <div className="before:bg-brand-100 relative grid gap-8 before:absolute before:top-2 before:bottom-2 before:left-3 before:w-px">
      {items.map((item) => (
        <div className="relative pl-12" key={item.year}>
          <span className="bg-brand-600 absolute top-1 left-0 size-6 rounded-full border-4 border-white" />
          <p className="eyebrow">{item.year}</p>
          <h3 className="mt-1 text-xl">{item.title}</h3>
          <p className="mt-2 leading-7">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
