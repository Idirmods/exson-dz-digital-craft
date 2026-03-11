import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi, Shield, Monitor, ArrowUpDown, ChevronLeft, ChevronRight,
  Building2, Users, Award, Calendar, Phone
} from "lucide-react";
import HeroSlider from "@/components/home/HeroSlider";
import PartnersBar from "@/components/home/PartnersBar";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesGrid from "@/components/home/ServicesGrid";
import ClientsCarousel from "@/components/home/ClientsCarousel";
import StatsSection from "@/components/home/StatsSection";
import CtaBanner from "@/components/home/CtaBanner";

const Index = () => {
  return (
    <>
      <HeroSlider />
      <PartnersBar />
      <AboutIntro />
      <ServicesGrid />
      <ClientsCarousel />
      <StatsSection />
      <CtaBanner />
    </>
  );
};

export default Index;
