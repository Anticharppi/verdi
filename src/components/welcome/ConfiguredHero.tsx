import { fadeInUp, staggerContainer } from "@/constants/welcome-animations";
import { motion } from "framer-motion";
import {
  Recycle,
  BarChart,
  Route,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";
import { Card } from "../ui/card";
import Link from "next/link";

const configuredFeatures = [
  {
    title: "Cuenta Verificada",
    description:
      "Tu empresa ha sido registrada y verificada correctamente en nuestra plataforma",
    icon: ClipboardCheck,
  },
  {
    title: "Dashboard Personalizado",
    description:
      "Accede a métricas y análisis específicos de tu operación de reciclaje",
    icon: BarChart,
  },
  {
    title: "Gestión de Rutas",
    description: "Configura y optimiza tus rutas de recolección de materiales",
    icon: Route,
  },
  {
    title: "Reportes Automatizados",
    description:
      "Genera informes completos para cumplir con los requisitos normativos",
    icon: Recycle,
  },
];

export const ConfiguredHero = () => {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="text-center"
      >
        <motion.div
          className="mb-8 flex justify-center"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ClipboardCheck className="h-16 w-16 text-emerald-600" />
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
        >
          ¡Configuración Completada!
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Tu cuenta está lista para usar. Accede a todas las funcionalidades de
          Verdi para gestionar tu empresa de reciclaje de manera eficiente.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Link href="/dashboard">
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm gap-2"
            >
              <BarChart className="h-5 w-5" />
              Ir al Dashboard
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
      >
        {configuredFeatures.map((feature) => (
          <motion.div
            key={feature.title}
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="h-full p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="rounded-full bg-emerald-100 p-3 mb-4"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  }}
                >
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
