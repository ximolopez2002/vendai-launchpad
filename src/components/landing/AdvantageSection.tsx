import { motion } from "framer-motion";
import { ShieldCheck, Database, TrendingUp, Zap, Globe, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Resolución Autónoma",
    description: "Gestiona devoluciones y cambios sin intervención humana.",
    icon: ShieldCheck,
  },
  {
    title: "Integración Shopify Plus",
    description: "Lectura y escritura directa en tu ERP.",
    icon: Database,
  },
  {
    title: "Upselling Proactivo",
    description: "Convierte dudas de talla en carritos cerrados.",
    icon: TrendingUp,
  },
  {
    title: "Respuesta <10s",
    description: "Elimina el tiempo de espera.",
    icon: Zap,
  },
  {
    title: "Multilingüe Nativo",
    description: "Atiende en +30 idiomas sin configuración adicional.",
    icon: Globe,
  },
  {
    title: "Analytics Accionables",
    description: "Métricas de conversión y satisfacción en tiempo real.",
    icon: BarChart3,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const AdvantageSection = () => {
  return (
    <section id="producto" className="py-28 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 font-display tracking-wide uppercase">
            Ventaja Competitiva
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            The Agéntico Advantage
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No es un chatbot. Es fuerza laboral digital que ejecuta acciones reales en tu tienda.
          </p>
        </motion.div>

        {/* Bento Grid - 3 columns, alternating 2-1 / 1-2 pattern */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              className="bento-card group flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_16px_-3px_hsl(225_100%_59%_/_0.3)]"
                  style={{ background: "hsl(225 100% 59% / 0.08)" }}>
                  <f.icon size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantageSection;
