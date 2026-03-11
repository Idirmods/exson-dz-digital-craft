import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceSection {
  title: string;
  text: string;
  image: string;
}

interface ServiceDetailPageProps {
  heroTitle: string;
  heroImage: string;
  sections: ServiceSection[];
}

const ServiceDetailPage = ({ heroTitle, heroImage, sections }: ServiceDetailPageProps) => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[320px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={heroTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-heading font-black text-primary-foreground"
          >
            {heroTitle}
          </motion.h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="container space-y-20">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-accent mb-5">
                  {s.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  {s.text}
                </p>
              </div>
              <div className={`flex justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-14">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">
            Besoin d'un conseil, un devis...
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Remplissez le formulaire et nous vous répondrons dans les 24 heures.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
