"use client";
import React from "react";
import { motion } from "framer-motion";
import { HomeIcon, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const handleNavigateHome = () => {
    window.location.href = "/";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center p-4">
      <motion.div
        className="text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex justify-center mb-8"
          variants={childVariants}
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="bg-emerald-100 rounded-full p-6"
            >
              <Recycle className="h-16 w-16 text-emerald-600" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-2 -right-2 bg-amber-100 rounded-full p-2"
            >
              <span className="text-lg font-semibold text-amber-600">404</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={childVariants}>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            ¡Página no Encontrada!
          </h1>

          <p className="text-lg text-gray-600 mb-4">
            El material que buscas no está en su contenedor habitual.
          </p>

          <p className="text-base text-gray-500 mb-8">
            Es posible que haya sido trasladado a otro centro de reciclaje o que
            la ruta de recolección haya cambiado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleNavigateHome}
              variant="default"
              className="bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center gap-2 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <HomeIcon className="h-5 w-5" />
              Volver a Inicio
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="mt-12 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg border border-gray-200"
        >
          <p className="font-medium mb-2">¿No encuentras lo que buscas?</p>
          <p>Nuestro equipo de reciclaje puede ayudarte a encontrarlo:</p>
          <p className="font-medium mt-2">soporte@verdi.com</p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-2"
          variants={childVariants}
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-emerald-600"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
