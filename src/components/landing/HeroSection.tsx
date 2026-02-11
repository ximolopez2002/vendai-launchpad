import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import ChatSimulator from "./ChatSimulator";

const clientLogos = [
  "Allbirds", "Gymshark", "Huel", "Ridge", "MVMT", "Chubbies",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-8">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/6 blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Content */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Fuerza laboral digital para Shopify
          </motion.div>

          {/* H1 */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
            <span className="gradient-text">Tu soporte ya no responde,</span>
            <br />
            <span className="gradient-text-accent">ahora ejecuta y vende.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Libera <span className="text-foreground font-medium">+40h a la semana</span> a tu equipo humano
            mediante fuerza laboral digital nativa en Shopify.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="lg" className="rounded-full px-8 text-base animate-pulse-glow">
              Ver Agente en Acción
              <ArrowRight size={18} />
            </Button>
            <Button variant="hero-outline" size="lg" className="rounded-full px-8 text-base">
              <Calculator size={16} />
              Calcular ROI
            </Button>
          </div>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          className="max-w-5xl mx-auto mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden">
            {/* Glow ring */}
            <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), transparent 40%, transparent 60%, hsl(var(--primary) / 0.1))",
            }} />
            {/* Top bar */}
            <div className="relative flex items-center gap-2 px-5 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
              </div>
              <span className="text-[11px] text-muted-foreground ml-2 font-body">VendAI Agent — Live Preview</span>
            </div>
            {/* Chat Simulator */}
            <ChatSimulator />
          </div>
          {/* Outer glow shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/8 blur-[50px] pointer-events-none rounded-full" />
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-display mb-8">
            Potenciando a las marcas DTC líderes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="text-muted-foreground/25 font-display text-lg sm:text-xl font-semibold tracking-wide select-none hover:text-muted-foreground/40 transition-colors duration-300"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
