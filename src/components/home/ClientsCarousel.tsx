const clients = [
  "Naftal", "Baticompos", "Batelec", "La Belle", "SSG",
  "Actel", "UFMATP", "CNEP", "BADR", "CPA",
];

const ClientsCarousel = () => (
  <section className="py-12 bg-secondary border-y border-border overflow-hidden">
    <div className="container mb-8">
      <h3 className="text-center text-sm font-heading font-bold text-muted-foreground uppercase tracking-widest">Ils nous font confiance</h3>
    </div>
    <div className="flex animate-marquee whitespace-nowrap">
      {[...clients, ...clients].map((c, i) => (
        <div key={i} className="mx-10 flex items-center">
          <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-card border border-border px-4">
            <span className="text-sm font-heading font-bold text-muted-foreground/70 uppercase tracking-wider">{c}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ClientsCarousel;
