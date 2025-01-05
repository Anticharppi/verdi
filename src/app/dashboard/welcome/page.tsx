"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Recycle,
  FileSpreadsheet,
  TrendingUp,
  Users,
  Mail,
  MessageCircle,
  ArrowRight,
  RefreshCw,
  Building2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { createAdminAction } from "@/lib/actions/users";

const features = [
  {
    title: "Gestión de Materiales",
    description:
      "Control completo de materiales reciclables, precios y facturas. Diseñado específicamente para empresas colombianas de reciclaje.",
    icon: Recycle,
  },
  {
    title: "Reportes Regulatorios",
    description:
      "Generación automática de reportes que cumplen con las normativas gubernamentales, incluyendo gestión de NUAPS y NUECAS.",
    icon: FileSpreadsheet,
  },
  {
    title: "Análisis de Tendencias",
    description:
      "Visualiza el rendimiento de tu negocio con gráficas intuitivas y predicciones que te ayudan a tomar mejores decisiones.",
    icon: TrendingUp,
  },
  {
    title: "Gestión de Usuarios",
    description:
      "Administra fácilmente los permisos y roles de tu equipo con una interfaz simple y segura.",
    icon: Users,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ErrorState = () => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center"
  >
    <div className="text-center px-4 py-6 max-w-md mx-auto">
      <motion.div variants={fadeInUp} className="mb-6">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mb-4"
        >
          <Recycle className="h-12 w-12 text-emerald-600 mx-auto" />
        </motion.div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          No pudimos completar la configuración
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Hubo un problema al configurar tu cuenta. Por favor, intenta
          nuevamente o contacta a nuestro equipo de soporte.
        </p>
      </motion.div>
      <motion.div variants={staggerContainer} className="space-y-4">
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.reload()}
          className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm gap-2"
        >
          <RefreshCw className="h-5 w-5" />
          Reintentar configuración
        </motion.button>

        <div className="flex flex-col sm:flex-row gap-3">
          <motion.a
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:soporte@verdi.com"
            className="flex-1 inline-flex justify-center items-center px-6 py-3 rounded-lg border border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm gap-2"
          >
            <Mail className="h-5 w-5" />
            Enviar correo
          </motion.a>
          <motion.a
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/573XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex justify-center items-center px-6 py-3 rounded-lg border border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </motion.a>
        </div>

        <motion.p variants={fadeInUp} className="text-xs text-gray-500 mt-4">
          Horario de atención: Lunes a Viernes 8:00 AM - 6:00 PM
        </motion.p>
      </motion.div>
    </div>
  </motion.div>
);

const SkeletonFeatureCard = () => (
  <Card className="h-full p-6">
    <motion.div
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="flex flex-col items-center text-center"
    >
      <div className="rounded-full bg-gray-200 p-3 mb-4 h-12 w-12" />
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-20 bg-gray-200 rounded w-full" />
    </motion.div>
  </Card>
);

const LoadingState = () => (
  <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mb-8 flex justify-center"
        >
          <Recycle className="h-16 w-16 text-emerald-600 opacity-75" />
        </motion.div>

        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Estamos terminando de configurar tu cuenta
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Esto tomará solo unos segundos mientras preparamos todo para ti
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
        >
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <SkeletonFeatureCard />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
);

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const { success } = await createAdminAction();
        if (!success) {
          setError(true);
        }
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
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
            <Recycle className="h-16 w-16 text-emerald-600" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Bienvenido a Verdi
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Tu solución integral para la gestión de empresas de reciclaje en
            Colombia. Simplificamos el cumplimiento normativo y potenciamos tu
            negocio.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link href="/dashboard/companies/new">
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm gap-2"
              >
                <Building2 className="h-5 w-5" />
                Ingresar datos de mi empresa
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>

            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm gap-2"
            >
              <FileSpreadsheet className="h-5 w-5" />
              Ver tutoriales
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature, index) => (
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
    </div>
  );
}
