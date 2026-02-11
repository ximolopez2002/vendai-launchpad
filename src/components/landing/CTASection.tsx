import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="bento-card text-center py-16 md:py-20 px-8 max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              ¿Listo para vender con IA?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Agenda una demo personalizada y descubre cómo VendAI puede transformar
              los resultados de tu equipo comercial.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="rounded-full px-8 text-base animate-pulse-glow">
                Agendar Demo Gratuita
                <ArrowRight size={18} />
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-full px-8 text-base">
                Contactar Ventas
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
