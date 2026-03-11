import { motion } from "framer-motion";
import { Wifi, Shield, Monitor, ArrowUpDown, Camera, Lock, Flame, Server, Cable, Radio } from "lucide-react";

const services = [
  {
    id: "telecom",
    icon: Wifi,
    title: "Télécommunications",
    desc: "Solutions complètes de télécommunications pour entreprises et institutions.",
    features: [
      { icon: Cable, text: "Réseaux fibre optique (FTTH/FTTB)" },
      { icon: Radio, text: "Téléphonie IP et PABX" },
      { icon: Server, text: "Infrastructures de télécommunication" },
    ],
    details: "Nous concevons, installons et maintenons des réseaux de télécommunication performants. Notre expertise couvre la fibre optique, les centraux téléphoniques IP, les solutions VoIP et les infrastructures de communication unifiée.",
  },
  {
    id: "reseaux",
    icon: Monitor,
    title: "Réseaux Informatiques",
    desc: "Conception et déploiement d'infrastructures réseau robustes et évolutives.",
    features: [
      { icon: Server, text: "Réseaux LAN, WAN et Wi-Fi" },
      { icon: Monitor, text: "Serveurs et stockage" },
      { icon: Shield, text: "Sécurité réseau et pare-feu" },
    ],
    details: "De la conception à la maintenance, nous proposons des solutions réseau adaptées à votre activité : câblage structuré, switches managés, points d'accès Wi-Fi, serveurs, virtualisation et sécurité périmétrique.",
  },
  {
    id: "securite",
    icon: Shield,
    title: "Systèmes de Sécurité",
    desc: "Protection complète de vos locaux avec des technologies de pointe.",
    features: [
      { icon: Camera, text: "Vidéosurveillance IP et analogique" },
      { icon: Lock, text: "Contrôle d'accès biométrique" },
      { icon: Flame, text: "Détection d'incendie et alarmes" },
    ],
    details: "Nous proposons des systèmes de sécurité intégrés comprenant la vidéosurveillance haute définition, le contrôle d'accès par badge, biométrie ou code, ainsi que les systèmes de détection d'incendie et d'alarme intrusion.",
  },
  {
    id: "ascenseurs",
    icon: ArrowUpDown,
    title: "Ascenseurs",
    desc: "Installation, maintenance et modernisation d'ascenseurs et monte-charges.",
    features: [
      { icon: ArrowUpDown, text: "Installation d'ascenseurs neufs" },
      { icon: Server, text: "Maintenance préventive et corrective" },
      { icon: Monitor, text: "Modernisation et mise aux normes" },
    ],
    details: "Notre service ascenseurs couvre l'installation complète, la maintenance régulière et la modernisation de vos équipements. Nous travaillons avec les meilleures marques pour garantir sécurité, confort et conformité aux normes en vigueur.",
  },
  {
    id: "etudes",
    icon: Monitor,
    title: "Études & Monitoring",
    desc: "Audit, conception et supervision continue de vos infrastructures.",
    features: [
      { icon: Monitor, text: "Audit d'infrastructures existantes" },
      { icon: Server, text: "Supervision et monitoring 24/7" },
      { icon: Shield, text: "Plans de continuité d'activité" },
    ],
    details: "Notre équipe d'ingénieurs réalise des études techniques approfondies, des audits de sécurité et met en place des solutions de monitoring en temps réel pour assurer la disponibilité et la performance de vos systèmes.",
  },
];

const Services = () => {
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
            <span className="text-sm font-heading font-bold text-accent uppercase tracking-widest">Nos métiers</span>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-primary-foreground mt-3 mb-6">
              Nos domaines d'expertise
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Des solutions technologiques complètes pour répondre à tous vos besoins en télécommunications, sécurité et informatique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container space-y-24">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-24"
            >
              <div className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <s.icon className="h-12 w-12 text-accent mb-5" />
                  <h2 className="text-3xl font-heading font-black text-foreground mb-4">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.details}</p>
                  <ul className="space-y-3">
                    {s.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-3 text-sm text-foreground">
                        <f.icon className="h-5 w-5 text-accent shrink-0" />
                        {f.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl bg-secondary border border-border p-10 flex items-center justify-center min-h-[280px] ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="text-center">
                    <s.icon className="h-20 w-20 mx-auto text-accent/30" />
                    <p className="text-sm text-muted-foreground mt-4 font-heading font-semibold">{s.title}</p>
                  </div>
                </div>
              </div>
              {i < services.length - 1 && <hr className="mt-24 border-border" />}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
