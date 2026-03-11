import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-heading font-black tracking-tight">
                EX<span className="text-accent">S</span>ON
              </span>
              <span className="ml-1 text-xs font-heading font-semibold opacity-70 tracking-widest uppercase">dz</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-80">
              Spécialisée dans les télécommunications, la sécurité et les réseaux informatiques depuis 2005. Votre partenaire technologique de confiance en Algérie.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-5 text-accent">Liens rapides</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Qui sommes nous</Link></li>
              <li><Link to="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Nos métiers</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-5 text-accent">Nos métiers</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services#telecom" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Télécommunications</Link></li>
              <li><Link to="/services#reseaux" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Réseaux informatiques</Link></li>
              <li><Link to="/services#securite" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Systèmes de sécurité</Link></li>
              <li><Link to="/services#ascenseurs" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Ascenseurs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-5 text-accent">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span className="opacity-80">72 bis, rue de la gare, Akbou, Bejaia, Algérie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span className="opacity-80">+213 (0) 34 35 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span className="opacity-80">contact@exson-dz.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs opacity-60">© {new Date().getFullYear()} Exson DZ. Tous droits réservés.</p>
          <p className="text-xs opacity-60">Télécommunications • Sécurité • Réseaux</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
