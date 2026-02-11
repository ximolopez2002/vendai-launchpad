import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import ChatSimulator from "./ChatSimulator";

const clientLogos = [
  "Allbirds", "Gymshark", "Huel", "Ridge", "MVMT", "Chubbies",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const, delay: i * 0.1 },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-8">
      {/* Intensified Mesh gradients — vivid light behind glass */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full opacity-[0.15]"
          style={{ background: "radial-gradient(circle, hsl(225 100% 59%), transparent 65%)" }}
        />
        <div className="absolute -top-24 -right-48 w-[700px] h-[700px] rounded-full opacity-[0.1]"
          style={{ background: "radial-gradient(circle, hsl(184 100% 50%), transparent 65%)" }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[1000px] h-[600px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(ellipse, hsl(225 100% 59%), transparent 60%)" }}
        />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(184 100% 50%), transparent 70%)" }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Fuerza laboral digital para Shopify
          </motion.div>

          {/* H1 */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-6"
          >
            <span className="gradient-text">Tu soporte ya no responde,</span>
            <br />
            <span className="gradient-text-accent">ahora ejecuta y vende.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "hsl(240 2% 53%)" }}
          >
            Libera <span className="text-foreground font-medium">+40h a la semana</span> a tu equipo humano
            mediante fuerza laboral digital nativa en Shopify.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="lg" className="rounded-full px-8 text-base animate-pulse-glow">
              Ver Agente en Acción
              <ArrowRight size={18} />
            </Button>
            <Button variant="hero-outline" size="lg" className="rounded-full px-8 text-base">
              <Calculator size={16} />
              Calcular ROI
            </Button>
          </motion.div>
        </div>

        {/* Demo Container */}
        <motion.div
          className="max-w-5xl mx-auto mb-24 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl overflow-hidden z-10" style={{
            background: "hsl(240 4% 9%)",
            border: "1px solid hsl(0 0% 100% / 0.06)",
          }}>
            {/* Top gradient border glow */}
            <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, hsl(225 100% 59% / 0.4), hsl(184 100% 50% / 0.2), transparent)" }}
            />
            {/* Top bar */}
            <div className="relative flex items-center gap-2 px-5 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(0 0% 100% / 0.1)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(0 0% 100% / 0.1)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(0 0% 100% / 0.1)" }} />
              </div>
              <span className="text-[11px] text-muted-foreground ml-2 font-body">VendAI Agent — Live Preview</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400/80">Online</span>
              </div>
            </div>
            {/* Chat Simulator */}
            <ChatSimulator />
          </div>
          {/* Outer glow */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-primary/6 blur-[60px] pointer-events-none rounded-full" />
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-display mb-8">
            Potenciando a las marcas DTC líderes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="text-muted-foreground/20 font-display text-lg sm:text-xl font-semibold tracking-wide select-none hover:text-muted-foreground/35 transition-colors duration-300"
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
