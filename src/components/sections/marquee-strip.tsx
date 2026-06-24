const marqueeItems = [
  "BUILDING_SYSTEMS",
  "SHIPPING_PRODUCTS",
  "FULL_STACK",
  "BACKEND",
  "MOBILE",
  "CMS",
  "STARTUPS",
  "PRODUCTION_SUPPORT",
];

export function MarqueeStrip() {
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="px-4 py-0 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border-2 border-border bg-card">
        <div className="marquee-track retro-label flex w-max items-center gap-5 py-3 text-xs font-bold text-muted-foreground">
          {repeatedItems.map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-5">
              <span>{item}</span>
              <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
