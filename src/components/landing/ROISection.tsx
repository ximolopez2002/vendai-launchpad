import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const roiMetrics = [
  { value: "3-6 meses", label: "Tiempo medio de payback" },
  { value: "847%", label: "ROI medio a 12 meses" },
  { value: "€1.2M", label: "Ahorro medio por cliente/año" },
  { value: "22 min", label: "Tiempo ahorrado por rep/día" },
];

const ROISection = () => {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/4 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 font-display tracking-wide uppercase">
            ROI
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Resultados que hablan solos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nuestros clientes ven resultados tangibles en las primeras semanas.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {roiMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              className="bento-card text-center py-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <p className="font-display text-2xl md:text-3xl font-bold gradient-text-accent mb-2">
                {metric.value}
              </p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/demo">
            <Button variant="hero" size="lg" className="rounded-full px-8">
              <Calculator size={18} />
              Calcula tu ROI
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
