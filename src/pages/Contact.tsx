import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Facebook, Linkedin } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Le prénom est requis").max(100),
  lastName: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Email invalide").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Le message est requis").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Message envoyé", description: "Nous vous répondrons dans les plus brefs délais." });
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

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
            <span className="text-sm font-heading font-bold text-accent uppercase tracking-widest">Contact</span>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-primary-foreground mt-3 mb-6">
              Nous contacter
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Nous sommes à votre écoute
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-3 mb-8">
                <a href="https://web.facebook.com/exsontelecom" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/company/exson-telecom/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground">Téléphone</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      +213(0)770 93 56 44<br />
                      +213(0)660 11 03 16<br />
                      +213(0) 34 33 81 81
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground">Email</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      contact@exson-dz.com<br />
                      exsontel@hotmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground">Adresse</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Akbou 72 bis, rue de la gare,<br />
                      tourna Ouchaalal
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="text-sm font-heading font-bold text-accent uppercase tracking-widest">Demandez une estimation gratuite</span>
                <h2 className="text-xl font-heading font-bold text-foreground mt-2">
                  Appelez-nous à tout moment, nous vous répondrons avec un devis dans les 24 heures
                </h2>
                <p className="text-2xl font-heading font-black text-accent mt-2">+213(0)34 33 81 81</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Prénom *</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="flex h-11 w-full rounded-md border border-input bg-background px-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Votre prénom"
                    />
                    {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Nom</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="flex h-11 w-full rounded-md border border-input bg-background px-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="flex h-11 w-full rounded-md border border-input bg-background px-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="votre@email.com"
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Sujet</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="flex h-11 w-full rounded-md border border-input bg-background px-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Objet de votre message"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="flex w-full rounded-md border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center gap-2 px-8 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-orange-light transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Envoyer
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
