import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const posts = [
  {
    id: 1,
    tag: "IA & Automatización",
    title: "Cómo la IA agéntica está revolucionando el e-commerce en 2026",
    excerpt:
      "Descubre por qué las marcas líderes están adoptando agentes autónomos para escalar su atención al cliente sin aumentar costes operativos.",
    date: "28 Mar 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&q=80",
  },
  {
    id: 2,
    tag: "Caso de Éxito",
    title: "De 12h a 30s: cómo una marca DTC redujo su tiempo de respuesta un 99%",
    excerpt:
      "Un caso real de implementación de VendAI en una marca de moda directa al consumidor con más de 50.000 tickets mensuales.",
    date: "21 Mar 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    id: 3,
    tag: "Estrategia",
    title: "5 métricas de CX que deberías monitorizar en tu tienda online",
    excerpt:
      "CSAT, NPS, tiempo de resolución… Te explicamos qué medir, cómo interpretarlo y qué benchmarks aplicar en retail digital.",
    date: "14 Mar 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 4,
    tag: "Producto",
    title: "Novedades de VendAI: integración nativa con Shopify y WooCommerce",
    excerpt:
      "Ahora puedes conectar tus agentes de IA directamente con tu catálogo, inventario y sistema de pedidos en un solo clic.",
    date: "7 Mar 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  },
  {
    id: 5,
    tag: "IA & Automatización",
    title: "Agentes vs Chatbots: por qué los bots tradicionales ya no son suficientes",
    excerpt:
      "Analizamos las diferencias clave entre chatbots basados en reglas y agentes autónomos con capacidad de razonamiento.",
    date: "28 Feb 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    id: 6,
    tag: "Estrategia",
    title: "El coste oculto de no automatizar tu atención al cliente",
    excerpt:
      "Rotación de agentes, tickets sin resolver y clientes perdidos: calculamos el impacto real en tu cuenta de resultados.",
    date: "21 Feb 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>

          {/* Page header */}
          <div className="max-w-2xl mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Insights & Novedades
            </h1>
            <p className="text-muted-foreground text-lg">
              Tendencias en IA, casos de éxito y estrategias para transformar tu
              atención al cliente en una ventaja competitiva.
            </p>
          </div>

          {/* Featured post */}
          <div className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm mb-12 md:flex">
            <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">
                {posts[0].tag}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{posts[0].date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {posts[0].readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm transition-colors hover:bg-card/50"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-2 block">
                    {post.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
