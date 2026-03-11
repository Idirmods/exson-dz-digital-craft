import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const CtaBanner = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="rounded-2xl bg-accent p-10 md:p-16 text-center">
        <Phone className="h-10 w-10 mx-auto mb-4 text-accent-foreground/80" />
        <h2 className="text-3xl md:text-4xl font-heading font-black text-accent-foreground mb-4">
          Besoin d'un conseil, un devis...
        </h2>
        <p className="text-accent-foreground/80 max-w-lg mx-auto mb-4 text-lg font-semibold">
          Remplissez le formulaire et nous vous répondrons dans les 24 heures.
        </p>
        <Link
          to="/contact"
          className="inline-flex h-12 items-center px-10 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-navy-dark transition-colors"
        >
          Contactez-nous
        </Link>
      </div>
    </div>
  </section>
);

export default CtaBanner;
