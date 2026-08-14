type SectionLabelProps = {
  index: string;
  label: string;
  className?: string;
};

export default function SectionLabel({
  index,
  label,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={`label flex items-center gap-3 text-muted ${className ?? ""}`}
    >
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
