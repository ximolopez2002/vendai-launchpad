import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Package, RotateCcw, BoxesIcon, Truck, CheckCircle2, MapPin } from "lucide-react";

type MessageType = "bot" | "user" | "loading" | "card";

interface ChatMessage {
  id: number;
  type: MessageType;
  text?: string;
  card?: "tracking" | "return" | "stock";
}

const optionButtons = [
  { label: "¿Dónde está mi pedido?", icon: Package, card: "tracking" as const },
  { label: "Quiero una devolución", icon: RotateCcw, card: "return" as const },
  { label: "Comprobar Stock", icon: BoxesIcon, card: "stock" as const },
];

const cardResponses: Record<string, { userText: string; botText: string }> = {
  tracking: {
    userText: "¿Dónde está mi pedido?",
    botText: "He encontrado tu pedido más reciente. Aquí tienes el detalle:",
  },
  return: {
    userText: "Quiero una devolución",
    botText: "He localizado tu último pedido entregado. He iniciado el proceso:",
  },
  stock: {
    userText: "Comprobar Stock",
    botText: "He consultado el inventario en tiempo real de tu tienda:",
  },
};

const TrackingCard = () => (
  <div className="rounded-xl border border-border bg-background/60 overflow-hidden mt-2">
    <div className="px-4 py-3 border-b border-border flex items-center justify-between">
      <span className="text-xs font-medium text-foreground">Pedido #SHP-29481</span>
      <span className="text-[10px] font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">En Reparto</span>
    </div>
    <div className="p-4 flex gap-3">
      <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
        <Package size={20} className="text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">Sneakers Air Max Pro</p>
        <p className="text-xs text-muted-foreground mt-0.5">Talla 42 · Negro/Blanco</p>
        <div className="flex items-center gap-1.5 mt-2">
          <Truck size={12} className="text-primary" />
          <span className="text-[11px] text-primary font-medium">Llega hoy, 14:00–16:00h</span>
        </div>
      </div>
    </div>
    {/* Progress */}
    <div className="px-4 pb-4">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex-1 flex items-center gap-1">
            <div className={`h-1 flex-1 rounded-full ${step <= 3 ? "bg-primary" : "bg-muted"}`} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-1.5">
        <span className="text-[10px] text-muted-foreground">Confirmado</span>
        <span className="text-[10px] text-muted-foreground">Preparado</span>
        <span className="text-[10px] text-primary font-medium">En reparto</span>
        <span className="text-[10px] text-muted-foreground">Entregado</span>
      </div>
    </div>
    <div className="px-4 pb-3 flex items-center gap-1.5 text-muted-foreground">
      <MapPin size={11} />
      <span className="text-[10px]">Calle Gran Vía 28, Madrid — SEUR Express</span>
    </div>
  </div>
);

const ReturnCard = () => (
  <div className="rounded-xl border border-border bg-background/60 overflow-hidden mt-2">
    <div className="px-4 py-3 border-b border-border flex items-center justify-between">
      <span className="text-xs font-medium text-foreground">Devolución #RET-7823</span>
      <span className="text-[10px] font-medium bg-emerald-500/10 text-emerald-400 rounded-full px-2 py-0.5">Aprobada</span>
    </div>
    <div className="p-4 flex gap-3">
      <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
        <RotateCcw size={20} className="text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">Camiseta Oversized Premium</p>
        <p className="text-xs text-muted-foreground mt-0.5">Talla L · Beige</p>
        <div className="flex items-center gap-1.5 mt-2">
          <CheckCircle2 size={12} className="text-emerald-400" />
          <span className="text-[11px] text-emerald-400 font-medium">Reembolso de €49.90 en 24–48h</span>
        </div>
      </div>
    </div>
    <div className="px-4 pb-3">
      <div className="text-[10px] text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
        📦 Etiqueta de envío generada automáticamente. Código: <span className="text-foreground font-mono">RET-ES-7823X</span>
      </div>
    </div>
  </div>
);

const StockCard = () => (
  <div className="rounded-xl border border-border bg-background/60 overflow-hidden mt-2">
    <div className="px-4 py-3 border-b border-border">
      <span className="text-xs font-medium text-foreground">Inventario — Tiempo Real</span>
    </div>
    <div className="divide-y divide-border">
      {[
        { name: "Sneakers Air Max Pro", sku: "SKU-4821", stock: 234, status: "ok" },
        { name: "Camiseta Oversized Premium", sku: "SKU-1093", stock: 12, status: "low" },
        { name: "Hoodie Essential", sku: "SKU-7744", stock: 0, status: "out" },
      ].map((item) => (
        <div key={item.sku} className="px-4 py-2.5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-foreground">{item.name}</p>
            <p className="text-[10px] text-muted-foreground font-mono">{item.sku}</p>
          </div>
          <div className="text-right">
            <p className={`text-xs font-semibold ${
              item.status === "ok" ? "text-emerald-400" : item.status === "low" ? "text-amber-400" : "text-destructive"
            }`}>
              {item.stock} uds
            </p>
            <p className="text-[10px] text-muted-foreground">
              {item.status === "ok" ? "En stock" : item.status === "low" ? "Stock bajo" : "Agotado"}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="px-4 py-2.5 border-t border-border">
      <p className="text-[10px] text-muted-foreground">
        ⚡ Alerta automática enviada al proveedor para <span className="text-foreground">Hoodie Essential</span>
      </p>
    </div>
  </div>
);

const cardComponents = { tracking: TrackingCard, return: ReturnCard, stock: StockCard };

const ChatSimulator = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, type: "bot", text: "Hola 👋 soy VendAI. ¿Cómo puedo ayudarte con tu tienda de Shopify hoy?" },
  ]);
  const [showOptions, setShowOptions] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOptionClick = useCallback((option: typeof optionButtons[0]) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowOptions(false);

    const userMsg: ChatMessage = { id: Date.now(), type: "user", text: cardResponses[option.card].userText };
    setMessages((prev) => [...prev, userMsg]);

    // Loading
    setTimeout(() => {
      const loadingMsg: ChatMessage = { id: Date.now() + 1, type: "loading", text: "Consultando API Shopify..." };
      setMessages((prev) => [...prev, loadingMsg]);

      // Response
      setTimeout(() => {
        setMessages((prev) => {
          const withoutLoading = prev.filter((m) => m.type !== "loading");
          return [
            ...withoutLoading,
            { id: Date.now() + 2, type: "bot", text: cardResponses[option.card].botText },
            { id: Date.now() + 3, type: "card", card: option.card },
          ];
        });

        // Show options again
        setTimeout(() => {
          setShowOptions(true);
          setIsAnimating(false);
        }, 600);
      }, 1400);
    }, 400);
  }, [isAnimating]);

  return (
    <div className="flex flex-col h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 scrollbar-thin">
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.type === "bot" && (
                <div className="flex gap-2.5 max-w-[85%] sm:max-w-[75%]">
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} className="text-primary" />
                  </div>
                  <div className="bg-secondary/80 rounded-2xl rounded-tl-md px-4 py-2.5">
                    <p className="text-sm text-foreground leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              )}

              {msg.type === "user" && (
                <div className="bg-primary rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[75%]">
                  <p className="text-sm text-primary-foreground">{msg.text}</p>
                </div>
              )}

              {msg.type === "loading" && (
                <div className="flex gap-2.5 max-w-[75%]">
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} className="text-primary" />
                  </div>
                  <div className="bg-secondary/80 rounded-2xl rounded-tl-md px-4 py-2.5 flex items-center gap-2">
                    <div className="w-3.5 h-3.5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    <p className="text-sm text-muted-foreground">{msg.text}</p>
                  </div>
                </div>
              )}

              {msg.type === "card" && msg.card && (
                <div className="max-w-[90%] sm:max-w-[80%] ml-9">
                  {(() => {
                    const CardComp = cardComponents[msg.card];
                    return <CardComp />;
                  })()}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Option Buttons */}
        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap gap-2 ml-9 pt-1"
            >
              {optionButtons.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleOptionClick(opt)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/25 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 rounded-full px-3.5 py-2 transition-all duration-200"
                >
                  <opt.icon size={13} />
                  {opt.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar (decorative) */}
      <div className="border-t border-border px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3 bg-muted/40 rounded-xl px-4 py-2.5">
          <span className="text-sm text-muted-foreground/50 flex-1">Escribe un mensaje...</span>
          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSimulator;
