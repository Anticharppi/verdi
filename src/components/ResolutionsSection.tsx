import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function ResolutionsSection() {
  const resolutions = [
    {
      id: "20171300039945",
      icon: <FileText className="w-12 h-12 mb-4" />,
      title: "Control Interno",
      description: "Sistema de Control Interno y Gestión de Riesgos",
      keyPoints: [
        "Evaluación de riesgos",
        "Control de procesos",
        "Auditoría interna"
      ]
    },
    {
      id: "20181000120515",
      icon: <FileText className="w-12 h-12 mb-4" />,
      title: "Vigilancia SSPD",
      description: "Marco de vigilancia y control empresarial",
      keyPoints: [
        "Indicadores de gestión",
        "Reportes periódicos",
        "Medidas preventivas"
      ]
    },
    {
      id: "20211000555175",
      icon: <FileText className="w-12 h-12 mb-4" />,
      title: "Sistema SUI",
      description: "Gestión del Sistema Único de Información",
      keyPoints: [
        "Cargue de información",
        "Validación de datos",
        "Plazos de reporte"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Resoluciones SSPD
            </span>
          </h2>
          <p className="text-gray-300">Mantente al día con la normativa vigente</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resolutions.map((resolution, index) => (
            <motion.div
              key={resolution.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all cursor-pointer border border-white/10 hover:border-emerald-500/30"
            >
              <div className="p-3 w-fit rounded-xl bg-emerald-500/10 mb-6">
                {resolution.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400">
                {resolution.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {resolution.description}
              </p>
              <div className="space-y-2">
                {resolution.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}