export function PageHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="glass-accent rounded-2xl p-8 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
        {title}
      </h1>
      <p className="text-[#94A3B8] text-[15px] max-w-4xl leading-relaxed">
        {description}
      </p>
    </section>
  );
}