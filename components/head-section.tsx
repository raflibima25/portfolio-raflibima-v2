interface HeadSectionProps {
  title: string;
  highlight: string;
  note?: string;
}

export default function HeadSection({
  title,
  highlight,
  note,
}: HeadSectionProps) {
  return (
    <>
      <h5 className="text-sm uppercase tracking-widest text-hli font-semibold">
        {title}
      </h5>
      <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2">
        {highlight}
      </h3>
      {note && (
        <p className="text-xs italic text-muted-foreground mt-1">{note}</p>
      )}
    </>
  );
}
