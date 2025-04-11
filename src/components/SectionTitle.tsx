interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return <h3 className="w-fit ms-2 font-medium text-content-soft">{title}</h3>;
}

export default SectionTitle;
