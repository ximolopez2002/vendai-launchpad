import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Ticket, Bot, TrendingDown } from "lucide-react";

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const ImpactCalculator = () => {
  const [tickets, setTickets] = useState(2000);
  const [costPerTicket, setCostPerTicket] = useState(8);
  const automationPct = 80;

  const annualSavings = useMemo(
    () => tickets * 12 * costPerTicket * (automationPct / 100),
    [tickets, costPerTicket]
  );

  const ticketsAutomated = useMemo(() => Math.round(tickets * (automationPct / 100)), [tickets]);
  const hoursFreed = useMemo(() => Math.round((ticketsAutomated * 6) / 60), [ticketsAutomated]);

  return (
    <section id="roi" className="py-24 relative">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/4 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3 font-display tracking-wide uppercase">
            Calculadora de Impacto
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            ¿Cuánto puedes ahorrar?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ajusta los parámetros a tu negocio y descubre el impacto real de VendAI.
          </p>
        </div>

        {/* Calculator */}
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Left — Inputs */}
          <div className="bento-card p-6 sm:p-8 flex flex-col gap-8">
            <h3 className="font-display text-lg font-semibold text-foreground">Tus datos</h3>

            {/* Tickets slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-muted-foreground flex items-center gap-2">
                  <Ticket size={14} className="text-primary" />
                  Tickets Mensuales
                </label>
                <span className="text-sm font-semibold text-foreground font-display tabular-nums">
                  {tickets.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={5000}
                step={50}
                value={tickets}
                onChange={(e) => setTickets(Number(e.target.value))}
                className="w-full slider-vendai"
              />
              <div className="flex justify-between mt-1.5">
                <span className="text-[10px] text-muted-foreground">0</span>
                <span className="text-[10px] text-muted-foreground">5,000</span>
              </div>
            </div>

            {/* Cost slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-muted-foreground flex items-center gap-2">
                  <DollarSign size={14} className="text-primary" />
                  Coste por Ticket Humano
                </label>
                <span className="text-sm font-semibold text-foreground font-display tabular-nums">
                  ${costPerTicket}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                step={1}
                value={costPerTicket}
                onChange={(e) => setCostPerTicket(Number(e.target.value))}
                className="w-full slider-vendai"
              />
              <div className="flex justify-between mt-1.5">
                <span className="text-[10px] text-muted-foreground">$1</span>
                <span className="text-[10px] text-muted-foreground">$20</span>
              </div>
            </div>

            {/* Automation % (fixed) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-muted-foreground flex items-center gap-2">
                  <Bot size={14} className="text-primary" />
                  % Automatización VendAI
                </label>
                <span className="text-sm font-semibold text-primary font-display">
                  {automationPct}%
                </span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={automationPct}
                  disabled
                  className="w-full slider-vendai opacity-60 cursor-not-allowed"
                />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1.5">
                Basado en el rendimiento medio de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Right — Results */}
          <div className="bento-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">Tu impacto</h3>

              {/* Main result */}
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-6 text-center mb-6">
                <p className="text-xs text-emerald-400 uppercase tracking-wider font-display mb-2">
                  Ahorro Anual Estimado
                </p>
                <p className="font-display text-4xl sm:text-5xl font-bold text-emerald-400 tabular-nums">
                  {formatCurrency(annualSavings)}
                </p>
              </div>

              {/* Secondary metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl bg-secondary/60 border border-border p-4 text-center">
                  <p className="font-display text-2xl font-bold text-foreground tabular-nums">
                    {ticketsAutomated.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">Tickets/mes automáticos</p>
                </div>
                <div className="rounded-xl bg-secondary/60 border border-border p-4 text-center">
                  <p className="font-display text-2xl font-bold text-foreground tabular-nums flex items-center justify-center gap-1">
                    <TrendingDown size={18} className="text-emerald-400" />
                    {hoursFreed}h
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">Horas liberadas/mes</p>
                </div>
              </div>

              {/* Formula */}
              <p className="text-[10px] text-muted-foreground text-center font-mono">
                ({tickets.toLocaleString()} tickets × 12 meses) × ${costPerTicket} × {automationPct}%
              </p>
            </div>

            {/* CTA */}
            <Button variant="hero" size="lg" className="rounded-xl w-full mt-6 text-base animate-pulse-glow">
              Enviar reporte a mi email
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactCalculator;
