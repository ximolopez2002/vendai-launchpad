import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    tag: "Devoluciones",
    title: "Reduce devoluciones hasta un 30%",
    description:
      "Nuestro motor predictivo analiza patrones de comportamiento, historial de pedidos y señales de riesgo para identificar devoluciones antes de que ocurran.",
    stats: [
      { value: "-30%", label: "Tasa de devolución" },
      { value: "€2.4M", label: "Ahorro medio anual" },
      { value: "< 48h", label: "Tiempo de implementación" },
    ],
  },
  {
    tag: "Ventas",
    title: "Acelera tu ciclo de ventas un 40%",
    description:
      "Lead scoring inteligente, recomendaciones de next-best-action y forecasting predictivo que dan a tu equipo superpoderes para cerrar más deals.",
    stats: [
      { value: "+40%", label: "Velocidad de cierre" },
      { value: "3x", label: "Pipeline generado" },
      { value: "92%", label: "Precisión del forecast" },
    ],
  },
];

const SolutionsSection = () => {
  return (
    <section id="soluciones" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 font-display tracking-wide uppercase">
            Soluciones
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Dos problemas. Una plataforma.
          </h2>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {solutions.map((solution, idx) => (
            <motion.div
              key={solution.tag}
              className="bento-card p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4 font-display">
                {solution.tag}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
                {solution.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {solution.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl md:text-3xl font-bold gradient-text-accent">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Button variant="hero-outline" size="sm" className="rounded-full">
                Saber más
                <ArrowRight size={14} />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
