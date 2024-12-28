"use client";

import { motion } from "framer-motion";
import { FileText, Shield, ChartBar } from "lucide-react";
import { useEffect, useState } from "react";
import ComplianceSection from "@/src/components/ComplianceSection";
import FeaturesGrid from "@/src/components/FeaturesGrid";
import Footer from "@/src/components/Footer";
import HeroSection from "@/src/components/HeroSection";
import NavigationBar from "@/src/components/NavigationBar";
import ResolutionsSection from "@/src/components/ResolutionsSection";

const features = [
  {
    icon: <FileText className="w-12 h-12 mb-4" />,
    title: "Gestión Documental",
    description: "Sistema integrado para el manejo de documentación SSPD",
  },
  {
    icon: <Shield className="w-12 h-12 mb-4" />,
    title: "Cumplimiento Normativo",
    description:
      "Actualizado con las últimas resoluciones de la Superintendencia",
  },
  {
    icon: <ChartBar className="w-12 h-12 mb-4" />,
    title: "Análisis Avanzado",
    description: "Reportes detallados y métricas de cumplimiento",
  },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white">
      <NavigationBar />

      <main className="relative">
        <motion.div
          className="fixed inset-0 pointer-events-none"
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 211, 153, 0.2) 0%, transparent 50%)`,
          }}
        />

        <HeroSection />
        <ResolutionsSection />
        <FeaturesGrid features={features} />
        <ComplianceSection />
      </main>

      <Footer />
    </div>
  );
}
