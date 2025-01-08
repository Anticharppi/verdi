import { fadeInUp, staggerContainer } from "@/constants/welcome-animations";
import { motion } from "framer-motion";
import {
  Recycle,
  Building2,
  ArrowRight,
  FileSpreadsheet,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { features } from "@/constants/welcome-features";

export const Hero = () => {
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
          <div className="p-4 bg-emerald-100 rounded-2xl">
            <Recycle className="h-16 w-16 text-emerald-600" />
          </div>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
        >
          Bienvenido a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
            Verdi
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mb-12 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Tu solución integral para la gestión de empresas de reciclaje en
          Colombia. Simplificamos el cumplimiento normativo y potenciamos tu
          negocio.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/dashboard/companies/create" className="contents">
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 bg-emerald-600 hover:bg-emerald-700"
              >
                <Building2 className="h-5 w-5" />
                Ingresar datos de mi empresa
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </Link>

          <Link href="/dashboard" className="contents">
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <ArrowRight className="h-5 w-5" />
                Ir al Dashboard
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 border-transparent hover:border-emerald-100">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="rounded-xl bg-emerald-100 p-4 mb-4"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  }}
                >
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Tutorial Video Section */}
      <motion.div
        variants={fadeInUp}
        className="mt-16 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100"
      >
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas ayuda para comenzar?
            </h2>
            <p className="text-gray-600 mb-6">
              Mira nuestros videos tutoriales para aprender a usar todas las
              funcionalidades de Verdi.
            </p>
            <Button variant="outline" size="lg" className="gap-2">
              <PlayCircle className="h-5 w-5" />
              Ver tutoriales
            </Button>
          </div>
          <div className="flex-1 max-w-sm">
            <div className="aspect-video bg-white rounded-lg shadow-lg border border-emerald-100" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
