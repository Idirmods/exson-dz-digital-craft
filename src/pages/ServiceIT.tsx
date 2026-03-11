import ServiceDetailPage from "@/components/ServiceDetailPage";
import heroIt from "@/assets/hero-it.jpg";
import serviceReseaux from "@/assets/service-reseaux.jpg";
import serviceTelecom from "@/assets/service-telecom.jpg";

const ServiceIT = () => (
  <ServiceDetailPage
    heroTitle="Technologie de l'information IT"
    heroImage={heroIt}
    sections={[
      {
        title: "Installation réseaux informatiques",
        text: "EXSON accompagne les sociétés algériennes dans le secteur énergétique, la santé, l'éducation et l'enseignement supérieur, les établissements publics dans leur transformation digitale devenue dans les dernières années l'un des piliers de la stratégie nationale et une priorité majeure de l'état algérien.\n\nLe déploiement d'un réseau informatique d'entreprise de manière efficace nécessite un savoir-faire important dans l'intégration de solution de sécurité à savoir le choix de l'architecture réseau, le choix des composants actifs et passifs du système, la sécurisation, la protection des données et la gestion des accès.",
        image: serviceReseaux,
      },
      {
        title: "Télécommunication",
        text: "Le déploiement de la fibre optique en Algérie est en plein essor et son avenir s'avère très prometteur vue ces avantages et son coût de plus en plus réduit. EXSON accompagne Algérie Télécom et d'autres entreprises dans le déploiement du réseau fibre optique FTTH et FTTX. La participation d'EXSON TELECOM au développement du pays dans ce domaine stratégique est une fierté pour nous.",
        image: serviceTelecom,
      },
    ]}
  />
);

export default ServiceIT;
