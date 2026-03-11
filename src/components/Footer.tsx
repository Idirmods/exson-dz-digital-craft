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
              <span className="ml-1 text-xs font-heading font-semibold opacity-70 tracking-widest uppercase">telecom</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-80">
              72 bis, rue de la gare,<br />
              tourna Ouchaalal, Akbou 06001, W Bejaia.
            </p>
          </div>

          {/* Téléphone */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-5 text-accent">Téléphone</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span className="opacity-80">+213(0)770 93 56 44</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span className="opacity-80">+213(0)660 11 03 16</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span className="opacity-80">+213(0) 34 33 81 81</span>
              </li>
            </ul>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-5 text-accent">Email</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href="mailto:contact@exson-dz.com" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">contact@exson-dz.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href="mailto:exsontel@hotmail.com" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">exsontel@hotmail.com</a>
              </li>
            </ul>
          </div>

          {/* Suivez nous */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-5 text-accent">Suivez nous</h4>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/exsontelecom" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/exson-telecom/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
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
