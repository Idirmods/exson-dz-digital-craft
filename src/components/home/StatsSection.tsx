import { useState, useEffect, useRef } from "react";
import { Calendar, Award, Building2, Users } from "lucide-react";

const stats = [
  { icon: Calendar, value: 2005, label: "année de création", suffix: "" },
  { icon: Award, value: 19, label: "Ans d'expérience", suffix: "+" },
  { icon: Building2, value: 500, label: "Projets réalisés", suffix: "+" },
  { icon: Users, value: 200, label: "clients professionnels", suffix: "+" },
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

const StatsSection = () => {
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsInView(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={statsRef} className="py-20 bg-primary">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-heading font-black text-primary-foreground mb-12">
          DECOUVREZ EXSON EN QUELQUE CHIFFRES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} inView={statsInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
