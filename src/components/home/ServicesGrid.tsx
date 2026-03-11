import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wifi, ArrowUpDown, Monitor, Shield } from "lucide-react";

const serviceCards = [
  {
    icon: Wifi,
    title: "Télécommunications",
    desc: "Le déploiement de la fibre optique en Algérie est en plein essor et son avenir s'avère très prometteur vue ces avantages et son cout de plus en plus réduit...",
    link: "/services#telecom",
  },
  {
    icon: ArrowUpDown,
    title: "Ascenseurs",
    desc: "EXSON installe les ascenseurs et vous propose des maintenances préventives et curatives selon votre choix...",
    link: "/services#ascenseurs",
  },
  {
    icon: Monitor,
    title: "Réseaux informatiques",
    desc: "EXSON accompagne les sociétés algériennes dans le secteur énergétique, la santé, l'éducation et l'enseignement supérieur, les établissements publics dans leur transformation digitale...",
    link: "/services#reseaux",
  },
  {
    icon: Shield,
    title: "Systèmes de sécurité",
    desc: "Nous offrons des solutions adaptées à chaque client compte tenu des spécificités de chaque site, les attentes du client et le rapport qualité prix...",
    link: "/services#securite",
  },
];

const ServicesGrid = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="text-center mb-6">
        <span className="text-sm font-heading font-bold text-accent uppercase tracking-widest">Nos services</span>
        <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-3">
          Des solutions adaptées à vos besoins
        </h2>
      </div>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
        Nous vous accompagnons dans vos projets de l'étude jusqu'à la réalisation. Nous apportons les solutions optimisées et adéquates et nous garantissons ainsi votre satisfaction entière.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceCards.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={s.link}
              className="group block h-full rounded-xl bg-card border border-border p-7 hover:shadow-lg hover:border-accent/30 transition-all"
            >
              <s.icon className="h-10 w-10 text-accent mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-heading font-bold text-card-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
