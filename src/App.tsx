import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceIT from "./pages/ServiceIT";
import ServiceSecurite from "./pages/ServiceSecurite";
import ServiceAscenseur from "./pages/ServiceAscenseur";
import ServiceEtudes from "./pages/ServiceEtudes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/nos-metiers/technologie-de-linformation-it" element={<ServiceIT />} />
            <Route path="/nos-metiers/systeme-de-securite" element={<ServiceSecurite />} />
            <Route path="/nos-metiers/ascenseur" element={<ServiceAscenseur />} />
            <Route path="/nos-metiers/etudes-et-monitoring" element={<ServiceEtudes />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
