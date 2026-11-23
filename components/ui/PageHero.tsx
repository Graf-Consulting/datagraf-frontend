export function PageHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="glass-accent rounded-2xl p-8 md:p-10">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-fg-strong md:text-4xl">{title}</h1>
      <p className="max-w-4xl text-[15px] leading-relaxed text-fg-muted">{description}</p>
    </section>
  );
}
