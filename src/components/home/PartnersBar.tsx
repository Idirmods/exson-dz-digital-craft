const partners = ["Cisco", "Panasonic", "D-Link", "HP"];

const PartnersBar = () => (
  <section className="border-b border-border bg-secondary py-8">
    <div className="container">
      <div className="flex items-center justify-center gap-16 flex-wrap">
        {partners.map((p) => (
          <span key={p} className="text-lg font-heading font-bold text-muted-foreground/50 uppercase tracking-widest">{p}</span>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersBar;
