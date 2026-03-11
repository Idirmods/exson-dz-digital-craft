import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi, Shield, Monitor, ArrowUpDown, ChevronLeft, ChevronRight,
  Building2, Users, Award, Calendar, Phone
} from "lucide-react";

const slides = [
  {
    title: "Réseaux Télécommunications",
    subtitle: "Solutions de connectivité performantes pour entreprises et institutions",
    icon: Wifi,
  },
  {
    title: "Vidéosurveillance & Sécurité",
    subtitle: "Protection intelligente de vos locaux avec les technologies les plus avancées",
    icon: Shield,
  },
  {
    title: "Études & Monitoring",
    subtitle: "Audit, conception et supervision de vos infrastructures IT",
    icon: Monitor,
  },
  {
    title: "Contrôle d'Accès",
    subtitle: "Gestion sécurisée des accès physiques et logiques",
    icon: ArrowUpDown,
  },
];

const partners = ["Cisco", "Panasonic", "D-Link", "HP", "Hikvision", "Dahua", "Schneider", "Legrand"];

const serviceCards = [
  { icon: Wifi, title: "Télécommunications", desc: "Réseaux fibre optique, PABX, téléphonie IP et solutions de connectivité sur mesure.", link: "/services#telecom" },
  { icon: ArrowUpDown, title: "Ascenseurs", desc: "Installation, maintenance et modernisation d'ascenseurs et monte-charges.", link: "/services#ascenseurs" },
  { icon: Monitor, title: "Réseaux Informatiques", desc: "Conception et déploiement d'infrastructures réseau LAN, WAN et Wi-Fi.", link: "/services#reseaux" },
  { icon: Shield, title: "Systèmes de Sécurité", desc: "Vidéosurveillance, contrôle d'accès, détection d'incendie et alarmes.", link: "/services#securite" },
];

const stats = [
  { icon: Calendar, value: 2005, label: "Année de création", suffix: "" },
  { icon: Award, value: 19, label: "Années d'expérience", suffix: "+" },
  { icon: Building2, value: 500, label: "Projets réalisés", suffix: "+" },
  { icon: Users, value: 200, label: "Clients professionnels", suffix: "+" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, inView]);
  return count;
}

const StatCard = ({ icon: Icon, value, label, suffix, inView }: { icon: any; value: number; label: string; suffix: string; inView: boolean }) => {
  const count = useCountUp(value, inView);
  return (
    <div className="text-center">
      <Icon className="h-8 w-8 mx-auto mb-3 text-accent" />
      <div className="text-4xl font-heading font-black text-primary-foreground">
        {count}{suffix}
      </div>
      <p className="text-sm mt-1 text-primary-foreground/70">{label}</p>
    </div>
  );
};

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsInView(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--orange) / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--orange) / 0.15) 0%, transparent 40%)`,
          }} />
        </div>
        <div className="container relative py-24 md:py-36 min-h-[500px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              {(() => {
                const Icon = slides[current].icon;
                return <Icon className="h-12 w-12 text-accent mb-6" />;
              })()}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground leading-tight mb-4">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="inline-flex h-12 items-center px-8 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-orange-light transition-colors">
                  En savoir plus
                </Link>
                <Link to="/contact" className="inline-flex h-12 items-center px-8 rounded-md border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:border-accent hover:text-accent transition-colors">
                  Nous contacter
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            <button onClick={prev} className="h-10 w-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:border-accent transition-colors" aria-label="Précédent">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} className="h-10 w-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:border-accent transition-colors" aria-label="Suivant">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-accent" : "w-2 bg-primary-foreground/30"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Bar */}
      <section className="border-b border-border bg-secondary py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className="mx-10 flex items-center">
              <span className="text-sm font-heading font-bold text-muted-foreground/60 uppercase tracking-widest">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Intro */}
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
              <span className="text-sm font-heading font-bold text-accent uppercase tracking-widest">Qui sommes nous</span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-3 mb-6">
                Votre partenaire technologique depuis 2005
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Exson DZ est une entreprise algérienne spécialisée dans les télécommunications, les réseaux informatiques et les systèmes de sécurité. Basée à Akbou, Bejaia, nous accompagnons les entreprises et institutions dans leur transformation numérique.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Notre expertise couvre l'installation, la maintenance et la supervision d'infrastructures IT complexes, avec un engagement constant envers la qualité et l'innovation.
              </p>
              <Link to="/a-propos" className="inline-flex h-11 items-center px-6 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-orange-light transition-colors">
                En savoir plus
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-sm font-heading font-bold text-accent uppercase tracking-widest">Nos métiers</span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-3">
              Des solutions adaptées à vos besoins
            </h2>
          </div>
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

      {/* Stats */}
      <section ref={statsRef} className="py-20 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} inView={statsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="rounded-2xl bg-accent p-10 md:p-16 text-center">
            <Phone className="h-10 w-10 mx-auto mb-4 text-accent-foreground/80" />
            <h2 className="text-3xl md:text-4xl font-heading font-black text-accent-foreground mb-4">
              Un projet en tête ?
            </h2>
            <p className="text-accent-foreground/80 max-w-lg mx-auto mb-8">
              Contactez-nous pour une étude personnalisée et un devis gratuit. Notre équipe d'experts est à votre écoute.
            </p>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center px-10 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-navy-dark transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
