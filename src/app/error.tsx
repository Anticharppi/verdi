"use client";
import React from "react";
import { motion } from "framer-motion";
import { RefreshCcw, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Error500Page = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

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

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
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
              className="absolute -top-2 -right-2 bg-red-100 rounded-full p-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <AlertCircle className="h-6 w-6 text-red-600" />
            </motion.div>
            <motion.div
              variants={rotateVariants}
              animate="animate"
              className="bg-emerald-100 rounded-full p-6"
            >
              <RefreshCcw className="h-16 w-16 text-emerald-600" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          variants={childVariants}
          className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4"
        >
          ¡Ups! Proceso en Pausa
        </motion.h1>

        <motion.div variants={childVariants} className="space-y-4">
          <div className="space-y-4 text-lg text-gray-600 mb-8">
            <p>
              Como buenos recicladores, estamos dando una segunda vida a
              nuestros servidores.
            </p>
            <p className="text-base text-gray-500">
              En Verdi, hasta nuestros errores son sostenibles. Estamos
              trabajando para que todo vuelva a funcionar tan limpio como el
              ambiente que protegemos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleRefresh}
              variant="default"
              className="bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center gap-2 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <RefreshCcw className="h-5 w-5" />
              Renovar Página
            </Button>

            <Button
              onClick={handleNavigateHome}
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Volver a Inicio
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="mt-12 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg border border-gray-200"
        >
          <p className="font-medium mb-2">¿Sigue el proceso atorado?</p>
          <p>
            Nuestro equipo de expertos en reciclaje digital está disponible para
            ayudarte:
          </p>
          <p className="font-medium mt-2">soporte@verdi.com</p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center"
          variants={childVariants}
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="w-3 h-3 mx-1 rounded-full bg-emerald-600"
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

export default Error500Page;
