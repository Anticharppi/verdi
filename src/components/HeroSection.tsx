import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-20" />
      </div>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Gestión Documental
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Para Servicios Públicos
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Centraliza y automatiza tus procesos de cumplimiento normativo con
            nuestra solución especializada para empresas de servicios públicos.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/registro"
              className="px-8 py-4 bg-emerald-500 rounded-lg font-medium hover:bg-emerald-600 transition-all"
            >
              Empezar ahora
            </a>
            <a
              href="/demo"
              className="px-8 py-4 border border-emerald-500 rounded-lg font-medium hover:bg-emerald-500/20 transition-all"
            >
              Ver demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
