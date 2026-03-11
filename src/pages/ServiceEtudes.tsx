import ServiceDetailPage from "@/components/ServiceDetailPage";
import heroEtudes from "@/assets/hero-etudes.jpg";

const ServiceEtudes = () => (
  <ServiceDetailPage
    heroTitle="Études & Monitoring"
    heroImage={heroEtudes}
    sections={[
      {
        title: "Audit d'infrastructures",
        text: "Notre équipe d'ingénieurs réalise des études techniques approfondies et des audits de sécurité de vos infrastructures existantes. Nous analysons vos systèmes de télécommunication, vos réseaux informatiques et vos dispositifs de sécurité pour identifier les points d'amélioration et proposer des solutions optimisées.",
        image: heroEtudes,
      },
      {
        title: "Supervision & Monitoring 24/7",
        text: "Nous mettons en place des solutions de monitoring en temps réel pour assurer la disponibilité et la performance de vos systèmes. Notre centre de supervision assure une veille continue et une intervention rapide en cas d'incident, avec des rapports détaillés et des plans de continuité d'activité pour garantir la résilience de votre infrastructure.",
        image: heroEtudes,
      },
    ]}
  />
);

export default ServiceEtudes;
