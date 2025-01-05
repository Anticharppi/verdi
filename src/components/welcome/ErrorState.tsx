"use client";

import { fadeInUp, staggerContainer } from "@/constants/welcome-animations";
import { motion } from "framer-motion";
import { Recycle, RefreshCw, Mail, MessageCircle } from "lucide-react";

export const ErrorState = () => {
  return (
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
};
