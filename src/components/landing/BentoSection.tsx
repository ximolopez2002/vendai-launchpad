import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, TrendingUp, Zap, RefreshCcw, Brain } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Predicción de Devoluciones",
    description: "Anticipa qué pedidos tienen mayor riesgo de devolución antes de enviarlos.",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: TrendingUp,
    title: "Scoring de Leads",
    description: "Prioriza leads con mayor probabilidad de cierre usando modelos de IA entrenados con tus datos.",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    icon: Zap,
    title: "Automatización Inteligente",
    description: "Flujos de trabajo automáticos que reducen tareas manuales un 60%.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: RefreshCcw,
    title: "Gestión de Devoluciones",
    description: "Reduce costes logísticos con un motor de decisiones basado en datos.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: BarChart3,
    title: "Analytics en Tiempo Real",
    description: "Dashboards ejecutivos con KPIs accionables y alertas inteligentes.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento & Seguridad",
    description: "SOC 2, GDPR y encriptación end-to-end para proteger tus datos.",
    className: "md:col-span-1 md:row-span-1",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const BentoSection = () => {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 font-display tracking-wide uppercase">
            Producto
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Todo lo que necesitas para vender mejor
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Una suite completa de herramientas de IA diseñadas para equipos comerciales B2B.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className={`bento-card group ${feature.className}`}
              variants={itemVariants}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_16px_-3px_hsl(225_100%_59%_/_0.3)]"
                style={{ background: "hsl(225 100% 59% / 0.08)" }}>
                <feature.icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoSection;
