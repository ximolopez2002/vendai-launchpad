import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Ticket, Bot, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section id="roi" className="py-28 relative">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/4 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 font-display tracking-wide uppercase">
            Calculadora de Impacto
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            ¿Cuánto puedes ahorrar?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ajusta los parámetros a tu negocio y descubre el impacto real de VendAI.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Left — Inputs */}
          <div className="bento-card p-6 sm:p-8 flex flex-col gap-8 hover:translate-y-0">
            <h3 className="font-display text-lg font-semibold text-foreground">Tus datos</h3>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-muted-foreground flex items-center gap-2">
                  <Ticket size={14} className="text-primary" strokeWidth={1.5} />
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

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-muted-foreground flex items-center gap-2">
                  <DollarSign size={14} className="text-primary" strokeWidth={1.5} />
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

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-muted-foreground flex items-center gap-2">
                  <Bot size={14} className="text-primary" strokeWidth={1.5} />
                  % Automatización VendAI
                </label>
                <span className="text-sm font-semibold text-primary font-display">
                  {automationPct}%
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={automationPct}
                disabled
                className="w-full slider-vendai opacity-50 cursor-not-allowed"
              />
              <p className="text-[10px] text-muted-foreground mt-1.5">
                Basado en el rendimiento medio de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Right — Results */}
          <div className="bento-card p-6 sm:p-8 flex flex-col justify-between hover:translate-y-0">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">Tu impacto</h3>

              <div className="rounded-xl p-6 text-center mb-6" style={{
                background: "hsl(145 60% 45% / 0.06)",
                border: "1px solid hsl(145 60% 45% / 0.12)",
              }}>
                <p className="text-xs text-emerald-400 uppercase tracking-wider font-display mb-2">
                  Ahorro Anual Estimado
                </p>
                <p className="font-display text-4xl sm:text-5xl font-bold text-emerald-400 tabular-nums" style={{
                  textShadow: "0 0 40px hsl(145 60% 45% / 0.3)",
                }}>
                  {formatCurrency(annualSavings)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl p-4 text-center" style={{ background: "hsl(240 3% 13%)", border: "1px solid hsl(0 0% 100% / 0.05)" }}>
                  <p className="font-display text-2xl font-bold text-foreground tabular-nums">
                    {ticketsAutomated.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">Tickets/mes automáticos</p>
                </div>
                <div className="rounded-xl p-4 text-center" style={{ background: "hsl(240 3% 13%)", border: "1px solid hsl(0 0% 100% / 0.05)" }}>
                  <p className="font-display text-2xl font-bold text-foreground tabular-nums flex items-center justify-center gap-1">
                    <TrendingDown size={18} className="text-emerald-400" strokeWidth={1.5} />
                    {hoursFreed}h
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">Horas liberadas/mes</p>
                </div>
              </div>

              <p className="text-[10px] text-muted-foreground text-center font-mono">
                ({tickets.toLocaleString()} × 12) × ${costPerTicket} × {automationPct}%
              </p>
            </div>

            <Link to="/demo">
              <Button variant="hero" size="lg" className="rounded-xl w-full mt-6 text-base">
                Enviar reporte a mi email
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactCalculator;
