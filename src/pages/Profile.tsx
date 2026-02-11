import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LogOut, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { User } from "@supabase/supabase-js";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (!session?.user) navigate("/auth");
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (!session?.user) navigate("/auth");
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })
    : "";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/6 blur-[120px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bento-card p-8"
        >
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display text-2xl font-bold">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          </div>

          <h1 className="font-display text-2xl font-bold gradient-text mb-1 text-center">
            Mi Perfil
          </h1>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-3 p-3 rounded-xl glass">
              <Mail size={18} className="text-primary shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Correo</p>
                <p className="text-sm text-foreground truncate">{user?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl glass">
              <Calendar size={18} className="text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Miembro desde</p>
                <p className="text-sm text-foreground">{createdAt}</p>
              </div>
            </div>
          </div>

          <Button
            variant="hero-outline"
            className="w-full rounded-full mt-8"
            onClick={handleLogout}
          >
            <LogOut size={16} />
            Cerrar sesión
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
