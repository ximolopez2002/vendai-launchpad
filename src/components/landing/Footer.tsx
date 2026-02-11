import { Linkedin, Twitter, Youtube } from "lucide-react";

const footerColumns = [
  {
    title: "Producto",
    links: [
      { label: "Características", href: "#producto" },
      { label: "Integraciones", href: "#" },
      { label: "Precios", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Casos de Uso",
    links: [
      { label: "Gestión de Devoluciones", href: "#soluciones" },
      { label: "Aceleración de Ventas", href: "#soluciones" },
      { label: "Atención al Cliente", href: "#" },
      { label: "Análisis Predictivo", href: "#" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Documentación", href: "#" },
      { label: "Calculadora de ROI", href: "#roi" },
      { label: "Casos de Éxito", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos de Servicio", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
              Vend<span className="gradient-text-accent">AI</span>
            </a>
            <p className="text-sm text-muted-foreground mt-4 max-w-[200px] leading-relaxed">
              Inteligencia Artificial que transforma tu proceso comercial B2B.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-foreground mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 VendAI. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Hecho con IA para potenciar tu negocio.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
