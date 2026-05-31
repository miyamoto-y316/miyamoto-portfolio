type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-4xl font-bold text-black text-center my-15">{title}</h2>
  );
}
