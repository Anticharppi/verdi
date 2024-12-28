import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ComplianceSection() {
  const benefits = [
    "Automatización de reportes SUI",
    "Seguimiento de indicadores SSPD",
    "Control de riesgos y auditoría",
    "Gestión documental normativa",
    "Alertas de vencimientos",
    "Actualizaciones automáticas"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                Cumplimiento Normativo Simplificado
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Mantén tu empresa al día con todas las regulaciones de la SSPD
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-8">Estadísticas de Cumplimiento</h3>
            <div className="space-y-6">
              {[
                { label: "Reportes Automatizados", value: "98%" },
                { label: "Reducción de Errores", value: "85%" },
                { label: "Ahorro de Tiempo", value: "75%" }
              ].map((stat) => (
                <div key={stat.label} className="bg-black/20 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}