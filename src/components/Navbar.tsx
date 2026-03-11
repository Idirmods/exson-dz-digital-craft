import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { name: "Télécommunications", href: "/services#telecom" },
  { name: "Réseaux informatiques", href: "/services#reseaux" },
  { name: "Systèmes de sécurité", href: "/services#securite" },
  { name: "Ascenseurs", href: "/services#ascenseurs" },
  { name: "Études & Monitoring", href: "/services#etudes" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-2xl font-heading font-black tracking-tight text-primary">
              EX<span className="text-accent">S</span>ON
            </span>
            <span className="ml-1 text-xs font-heading font-semibold text-muted-foreground tracking-widest uppercase">
              dz
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors rounded-md hover:text-accent",
              isActive("/") ? "text-accent" : "text-foreground"
            )}
          >
            Accueil
          </Link>
          <Link
            to="/a-propos"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors rounded-md hover:text-accent",
              isActive("/a-propos") ? "text-accent" : "text-foreground"
            )}
          >
            Qui sommes nous
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md hover:text-accent",
                isActive("/services") ? "text-accent" : "text-foreground"
              )}
            >
              Nos métiers <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 rounded-lg border border-border bg-background p-2 shadow-lg">
                {services.map((s) => (
                  <Link
                    key={s.name}
                    to={s.href}
                    className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors rounded-md hover:text-accent",
              isActive("/contact") ? "text-accent" : "text-foreground"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-orange-light transition-colors"
        >
          Demander un devis
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-3 px-4 text-sm font-medium rounded-md hover:bg-secondary">Accueil</Link>
            <Link to="/a-propos" onClick={() => setMobileOpen(false)} className="py-3 px-4 text-sm font-medium rounded-md hover:bg-secondary">Qui sommes nous</Link>
            <Link to="/services" onClick={() => setMobileOpen(false)} className="py-3 px-4 text-sm font-medium rounded-md hover:bg-secondary">Nos métiers</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="py-3 px-4 text-sm font-medium rounded-md hover:bg-secondary">Contact</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-2 flex h-10 items-center justify-center rounded-md bg-accent text-sm font-semibold text-accent-foreground">
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
