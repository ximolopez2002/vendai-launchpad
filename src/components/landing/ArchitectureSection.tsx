import { motion } from "framer-motion";
import { Bot, ShoppingBag } from "lucide-react";

const lines = [
  { label: "GET /admin/api/orders.json", color: "text-green-400", delay: 0 },
  { label: "POST /admin/api/refunds/calculate", color: "text-blue-400", delay: 0.3 },
  { label: "WEBHOOK: inventory_levels/update", color: "text-orange-400", delay: 0.6 },
];

const ArchitectureSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-foreground mb-4">
            Arquitectura de Integración
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Conexión nativa en tiempo real con el backend de Shopify Plus.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-[hsl(var(--card))] p-8 md:p-12"
        >
          <div className="flex items-center justify-between gap-4">
            {/* Shopify Plus */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#96BF48]/10 border border-[#96BF48]/30 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 md:w-12 md:h-12 text-[#96BF48]" strokeWidth={1.5} />
              </div>
              <span className="font-outfit font-semibold text-foreground text-sm md:text-base">Shopify Plus</span>
            </div>

            {/* Lines */}
            <div className="flex-1 flex flex-col gap-5 md:gap-6 py-4 min-w-0">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + line.delay, ease: "easeOut" }}
                  className="relative flex items-center origin-left"
                >
                  {/* Animated line */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-white/20 via-white/10 to-white/20" />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-primary/60 to-cyan-400/40"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: 0.6 + line.delay,
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 2,
                    }}
                  />
                  {/* Traveling dot */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_hsl(var(--accent))]"
                    initial={{ left: "0%" }}
                    whileInView={{ left: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: 0.6 + line.delay,
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 2,
                      ease: "linear",
                    }}
                  />
                  {/* Label */}
                  <div className="relative z-10 mx-auto bg-[hsl(var(--card))] px-3 py-1 rounded-md border border-white/10">
                    <code className={`text-[10px] md:text-xs font-mono ${line.color} whitespace-nowrap`}>
                      {line.label}
                    </code>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* VendAI */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Bot className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
              </div>
              <span className="font-outfit font-semibold text-foreground text-sm md:text-base">VendAI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
