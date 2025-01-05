"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Lock, ShieldAlert, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Error403Page = () => {
  const handleNavigateHome = () => {
    window.location.href = "/";
  };

  const lockVariants: Variants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 1.1,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const shieldVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const dotVariants: Variants = {
    initial: {
      scale: 1,
      opacity: 0.6,
    },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 1.5,
        repeat: Infinity,
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
        <div className="flex justify-center mb-8">
          <div className="relative">
            <motion.div
              variants={lockVariants}
              initial="initial"
              animate="animate"
              className="bg-emerald-100 rounded-full p-6"
            >
              <Lock className="h-16 w-16 text-emerald-600" />
            </motion.div>
            <motion.div
              variants={shieldVariants}
              initial="initial"
              animate="animate"
              className="absolute -top-2 -right-2 bg-amber-100 rounded-full p-2"
            >
              <ShieldAlert className="h-6 w-6 text-amber-600" />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Acceso Denegado
          </h1>

          <p className="text-lg text-gray-600 mb-4">
            Lo sentimos, no tienes permisos para acceder a esta área.
          </p>

          <p className="text-base text-gray-500 mb-8">
            Si crees que esto es un error, por favor contacta con tu
            administrador para revisar tus permisos de acceso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleNavigateHome}
              variant="default"
              className="bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center gap-2 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Volver a Inicio
            </Button>
          </div>

          <motion.div
            className="mt-12 text-sm text-gray-500 p-4 border border-gray-200 rounded-lg bg-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-medium mb-2">¿Necesitas ayuda?</p>
            <p>Contacta al equipo de soporte:</p>
            <p className="font-medium mt-1">soporte@verdi.com</p>
          </motion.div>
        </motion.div>

        <div className="mt-8 flex justify-center gap-2">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-emerald-600"
              variants={dotVariants}
              initial="initial"
              animate="animate"
              transition={{
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Error403Page;
