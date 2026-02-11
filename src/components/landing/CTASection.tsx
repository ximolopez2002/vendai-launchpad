import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="bento-card text-center py-16 md:py-20 px-8 max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/8 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full pointer-events-none opacity-[0.04]"
            style={{ background: "radial-gradient(circle, hsl(184 100% 50%), transparent 70%)" }}
          />

          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, hsl(225 100% 59% / 0.3), transparent)" }}
          />

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              ¿Listo para vender con IA?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Agenda una demo personalizada y descubre cómo VendAI puede transformar
              los resultados de tu equipo comercial.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button variant="hero" size="lg" className="rounded-full px-8 text-base">
                  Agendar Demo Gratuita
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="hero-outline" size="lg" className="rounded-full px-8 text-base">
                  Contactar Ventas
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
