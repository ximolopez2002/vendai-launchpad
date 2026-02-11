import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const navLinks = [
  { label: "Producto", href: "#producto" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "ROI", href: "#roi" },
  { label: "Blog", href: "#blog" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session?.user);
      setUserEmail(session?.user?.email ?? "");
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setLoggedIn(!!session?.user);
      setUserEmail(session?.user?.email ?? "");
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      subscription.unsubscribe();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3 shadow-lg shadow-background/50" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
          Vend<span className="gradient-text-accent">AI</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to={loggedIn ? "/profile" : "/auth"}>
            {loggedIn ? (
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-display text-sm font-bold cursor-pointer hover:bg-primary/30 transition-colors">
                {userEmail.charAt(0).toUpperCase()}
              </div>
            ) : (
              <Button variant="ghost" size="sm" className="rounded-full px-5 text-muted-foreground hover:text-foreground">
                Iniciar sesión
              </Button>
            )}
          </Link>
          <Link to="/demo">
            <Button variant="hero" size="sm" className="rounded-full px-6">
              Agendar Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground py-3 px-4 rounded-lg glass-hover transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link to={loggedIn ? "/profile" : "/auth"} onClick={() => setMobileOpen(false)}>
                {loggedIn ? (
                  <div className="flex items-center gap-3 py-3 px-4 rounded-lg glass-hover transition-colors mt-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-display text-sm font-bold">
                      {userEmail.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm text-muted-foreground">{userEmail}</span>
                  </div>
                ) : (
                  <Button variant="ghost" size="sm" className="rounded-full mt-2 w-full text-muted-foreground hover:text-foreground">
                    Iniciar sesión
                  </Button>
                )}
              </Link>
              <Link to="/demo">
                <Button variant="hero" size="sm" className="rounded-full w-full">
                  Agendar Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
