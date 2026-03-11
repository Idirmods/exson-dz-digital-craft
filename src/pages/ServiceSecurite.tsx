import ServiceDetailPage from "@/components/ServiceDetailPage";
import heroSecurite from "@/assets/hero-securite.jpg";
import serviceReseaux from "@/assets/service-reseaux.jpg";

const ServiceSecurite = () => (
  <ServiceDetailPage
    heroTitle="Système de sécurité"
    heroImage={heroSecurite}
    sections={[
      {
        title: "Vidéosurveillance",
        text: "Nous offrons des solutions de vidéosurveillance adaptées à chaque client compte tenu des spécificités de chaque site, les attentes du client et le rapport qualité prix. Nos systèmes de vidéosurveillance IP et analogique haute définition permettent une surveillance en temps réel et un enregistrement continu pour garantir la sécurité de vos locaux.",
        image: heroSecurite,
      },
      {
        title: "Contrôle d'accès",
        text: "EXSON propose des solutions de contrôle d'accès modernes intégrant la biométrie, les badges RFID, les claviers à code et la reconnaissance faciale. Nos systèmes s'adaptent à tout type d'infrastructure, des petits bureaux aux grands sites industriels, en assurant une gestion centralisée et sécurisée des accès.",
        image: serviceReseaux,
      },
      {
        title: "Détection incendie & alarmes",
        text: "Nous concevons et installons des systèmes de détection d'incendie et d'alarme intrusion conformes aux normes en vigueur. Nos solutions comprennent les détecteurs de fumée, les centrales d'alarme, les sirènes et les systèmes d'évacuation pour protéger vos biens et vos collaborateurs.",
        image: heroSecurite,
      },
    ]}
  />
);

export default ServiceSecurite;
