import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, TrendingUp, Zap, RefreshCcw, Brain } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Predicción de Devoluciones",
    description: "Anticipa qué pedidos tienen mayor riesgo de devolución antes de enviarlos.",
    accent: "from-purple-500/20 to-blue-500/20",
    iconBg: "hsl(270 80% 60% / 0.12)",
    iconColor: "text-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Scoring de Leads",
    description: "Prioriza leads con mayor probabilidad de cierre usando modelos de IA entrenados con tus datos.",
    accent: "from-emerald-500/20 to-teal-500/20",
    iconBg: "hsl(160 70% 45% / 0.12)",
    iconColor: "text-emerald-400",
  },
  {
    icon: Zap,
    title: "Automatización Inteligente",
    description: "Flujos de trabajo automáticos que reducen tareas manuales un 60%.",
    accent: "from-amber-500/20 to-orange-500/20",
    iconBg: "hsl(40 90% 55% / 0.12)",
    iconColor: "text-amber-400",
  },
  {
    icon: RefreshCcw,
    title: "Gestión de Devoluciones",
    description: "Reduce costes logísticos con un motor de decisiones basado en datos.",
    accent: "from-sky-500/20 to-cyan-500/20",
    iconBg: "hsl(200 80% 55% / 0.12)",
    iconColor: "text-sky-400",
  },
  {
    icon: BarChart3,
    title: "Analytics en Tiempo Real",
    description: "Dashboards ejecutivos con KPIs accionables y alertas inteligentes.",
    accent: "from-primary/20 to-blue-600/20",
    iconBg: "hsl(225 100% 59% / 0.12)",
    iconColor: "text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento & Seguridad",
    description: "SOC 2, GDPR y encriptación end-to-end para proteger tus datos.",
    accent: "from-rose-500/20 to-pink-500/20",
    iconBg: "hsl(340 70% 55% / 0.12)",
    iconColor: "text-rose-400",
  },
];

const BentoSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(225 100% 59%), transparent 65%)" }}
      />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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

        {/* Feature list — alternating layout */}
        <div className="max-w-5xl mx-auto space-y-6">
          {features.map((feature, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className={`group relative flex items-center gap-6 sm:gap-8 rounded-2xl p-6 sm:p-8 transition-all duration-500 cursor-default
                  ${isEven ? "sm:mr-16" : "sm:ml-16 sm:flex-row-reverse sm:text-right"}`}
                style={{
                  background: "hsl(0 0% 100% / 0.02)",
                  border: "1px solid hsl(0 0% 100% / 0.06)",
                }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Icon */}
                <motion.div
                  className="relative z-10 shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{ background: feature.iconBg }}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <feature.icon size={28} className={feature.iconColor} strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex-1 min-w-0">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:gradient-text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Number badge */}
                <span className={`relative z-10 shrink-0 font-display text-4xl sm:text-5xl font-bold opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 select-none
                  ${isEven ? "" : "order-first"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px hsl(225 100% 59% / 0.2), 0 8px 32px -12px hsl(225 100% 59% / 0.15)" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
