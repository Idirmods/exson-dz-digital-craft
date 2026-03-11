import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const AboutIntro = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-primary">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Building2 className="h-20 w-20 mx-auto text-accent/50" />
                <p className="text-primary-foreground/50 mt-4 font-heading font-bold text-lg">Exson DZ</p>
                <p className="text-primary-foreground/30 text-sm">Depuis 2005</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-heading font-bold text-accent uppercase tracking-widest">Qui sommes nous ?</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-3 mb-6">
            Votre partenaire technologique depuis 2005
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Exson est une société de service télécom, informatique et sécurité en Algérie, fondée en 2005.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Forte de son expérience dans le domaine de l'étude et la réalisation des projets de télécommunication pour les grandes entreprises nationales, les projets relatifs au déploiement des réseaux informatique intranet et leurs sécurisations pour les PME algérienne...
          </p>
          <Link to="/a-propos" className="inline-flex h-11 items-center px-6 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-orange-light transition-colors">
            En savoir plus
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutIntro;
