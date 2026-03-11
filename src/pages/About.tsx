import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Handshake, ShieldCheck, Building2 } from "lucide-react";

const values = [
  { icon: Target, title: "Excellence", desc: "Nous visons l'excellence dans chaque projet, avec des standards de qualité rigoureux." },
  { icon: Eye, title: "Innovation", desc: "Nous adoptons les technologies les plus récentes pour offrir des solutions d'avant-garde." },
  { icon: Handshake, title: "Confiance", desc: "Nous bâtissons des relations durables basées sur la transparence et la fiabilité." },
  { icon: ShieldCheck, title: "Sécurité", desc: "La sécurité de vos installations et données est notre priorité absolue." },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-heading font-bold text-accent uppercase tracking-widest">À propos</span>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-primary-foreground mt-3 mb-6">
              Qui sommes nous
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Depuis 2005, Exson DZ est un acteur majeur dans les télécommunications, les réseaux informatiques et les systèmes de sécurité en Algérie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-black text-foreground mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée en 2005 à Akbou, dans la wilaya de Bejaia, Exson DZ est née de la vision de professionnels passionnés par les nouvelles technologies. Notre mission : accompagner les entreprises algériennes dans leur modernisation technologique.
                </p>
                <p>
                  Au fil des années, nous avons élargi notre champ d'expertise pour couvrir l'ensemble des besoins en télécommunications, réseaux informatiques, vidéosurveillance, contrôle d'accès et ascenseurs.
                </p>
                <p>
                  Aujourd'hui, avec plus de 500 projets réalisés et 200 clients professionnels, Exson DZ est reconnu comme un partenaire technologique de confiance dans toute la région.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-primary"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="h-24 w-24 mx-auto text-accent/40" />
                  <p className="text-primary-foreground/40 mt-6 font-heading font-bold text-xl">Exson DZ</p>
                  <p className="text-primary-foreground/25 text-sm mt-1">Akbou, Bejaia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Lightbulb className="h-10 w-10 mx-auto text-accent mb-4" />
            <h2 className="text-3xl font-heading font-black text-foreground mb-6">Notre mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fournir des solutions technologiques innovantes, fiables et adaptées aux besoins spécifiques de chaque client. Nous nous engageons à offrir un service d'excellence, de la conception à la maintenance, en passant par l'installation et la formation.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-sm font-heading font-bold text-accent uppercase tracking-widest">Nos valeurs</span>
            <h2 className="text-3xl font-heading font-black text-foreground mt-3">Ce qui nous définit</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-7 text-center"
              >
                <v.icon className="h-10 w-10 mx-auto text-accent mb-4" />
                <h3 className="text-lg font-heading font-bold text-card-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
