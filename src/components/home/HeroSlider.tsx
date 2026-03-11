import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, Shield, Monitor, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Réseaux téléphoniques et informatiques",
    subtitle: "Optimisez votre infrastructure avec nos solutions de réseaux performantes et sécurisées. Installation sur mesure pour entreprises de toute taille",
    icon: Wifi,
  },
  {
    title: "Vidéo Surveillance",
    subtitle: "Protégez vos locaux avec nos systèmes de surveillance à la pointe de la technologie. Surveillance en temps réel, qualité HD et sécurité renforcée.",
    icon: Shield,
  },
  {
    title: "Etude et suivi",
    subtitle: "Etude et suivi projets informatiques et systèmes de sécurité",
    icon: Monitor,
  },
  {
    title: "Contrôle d'Accès",
    subtitle: "Sécurisez l'accès à vos installations avec nos systèmes de contrôle innovants. Accès personnalisé, gestion centralisée et sécurité sans faille.",
    icon: ArrowUpDown,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
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
            <span className="text-sm font-heading font-bold text-accent uppercase tracking-widest mb-4 block">- EXSON -</span>
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
                EN SAVOIR PLUS
              </Link>
              <Link to="/contact" className="inline-flex h-12 items-center px-8 rounded-md border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:border-accent hover:text-accent transition-colors">
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 right-8 flex gap-2">
          <button onClick={prev} className="h-10 w-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:border-accent transition-colors" aria-label="Précédent">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} className="h-10 w-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:border-accent transition-colors" aria-label="Suivant">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

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
  );
};

export default HeroSlider;
