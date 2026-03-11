import ServiceDetailPage from "@/components/ServiceDetailPage";
import heroAscenseur from "@/assets/hero-ascenseur.jpg";

const ServiceAscenseur = () => (
  <ServiceDetailPage
    heroTitle="Ascenseur"
    heroImage={heroAscenseur}
    sections={[
      {
        title: "Installation d'ascenseurs",
        text: "EXSON installe les ascenseurs et vous propose des maintenances préventives et curatives selon votre choix. Nous travaillons avec les meilleures marques pour garantir sécurité, confort et conformité aux normes en vigueur. Notre équipe d'experts assure une installation professionnelle et un suivi rigoureux de chaque projet.",
        image: heroAscenseur,
      },
      {
        title: "Maintenance & Modernisation",
        text: "Notre service de maintenance préventive et corrective garantit le bon fonctionnement de vos ascenseurs en permanence. Nous proposons également des solutions de modernisation et de mise aux normes pour vos équipements existants, en intégrant les dernières technologies pour améliorer la performance, la sécurité et le confort des usagers.",
        image: heroAscenseur,
      },
    ]}
  />
);

export default ServiceAscenseur;
