import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es VendAI y cómo funciona?",
    answer:
      "VendAI es una fuerza laboral digital basada en IA agéntica que se integra con tus canales de soporte para automatizar respuestas, gestionar devoluciones y convertir interacciones de servicio en oportunidades de venta.",
  },
  {
    question: "¿Cuánto tiempo toma la implementación?",
    answer:
      "La implementación básica se realiza en menos de 48 horas. Nuestro equipo se encarga de la integración con tus sistemas existentes y la configuración inicial de los agentes.",
  },
  {
    question: "¿Es compatible con mi plataforma de e-commerce?",
    answer:
      "Sí, VendAI se integra con las principales plataformas como Shopify, WooCommerce, Magento, PrestaShop y sistemas CRM como Salesforce y HubSpot.",
  },
  {
    question: "¿Qué pasa si el agente no sabe responder una consulta?",
    answer:
      "Los agentes están diseñados para escalar automáticamente a un agente humano cuando detectan que la consulta requiere atención especializada, garantizando que ningún cliente quede sin respuesta.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Absolutamente. Cumplimos con GDPR y las normativas de protección de datos. Toda la información se cifra en tránsito y en reposo, y nunca compartimos datos con terceros.",
  },
  {
    question: "¿Puedo probar VendAI antes de contratar?",
    answer:
      "Sí, ofrecemos una demo personalizada y un periodo de prueba para que puedas evaluar el impacto en tu negocio antes de comprometerte.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Resolvemos tus dudas sobre cómo VendAI puede transformar tu negocio.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm px-6 transition-colors hover:bg-card/50"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline text-sm md:text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
