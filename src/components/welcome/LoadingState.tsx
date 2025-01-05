"use client";

import { motion } from "framer-motion";
import { Recycle } from "lucide-react";
import { Card } from "../ui/card";
import { fadeInUp, staggerContainer } from "@/constants/welcome-animations";

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

export const LoadingState = () => (
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
            Estamos revisando la configuración de tu cuenta
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
