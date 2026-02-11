import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  first_name: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  last_name: z.string().trim().min(1, "Los apellidos son obligatorios").max(100),
  email: z.string().trim().email("Introduce un correo válido").max(255),
  phone: z.string().trim().min(6, "Introduce un teléfono válido").max(20),
});

type FormValues = z.infer<typeof formSchema>;

const Demo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { first_name: "", last_name: "", email: "", phone: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from("leads" as any).insert([values] as any);
      if (error) throw error;
      setSubmittedEmail(values.email);
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting lead:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16 relative">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/6 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/4 blur-[100px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bento-card p-8"
            >
              <div className="mb-8">
                <h1 className="font-display text-2xl font-bold gradient-text mb-2">
                  Agenda tu Demo Gratuita
                </h1>
                <p className="text-sm text-muted-foreground">
                  Completa el formulario y te enviaremos los detalles a tu correo.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apellidos</FormLabel>
                        <FormControl>
                          <Input placeholder="Tus apellidos" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tu@empresa.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+34 600 000 000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full rounded-full"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Solicitar Demo"
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bento-card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <CheckCircle2 size={32} className="text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold gradient-text mb-3">
                ¡Solicitud enviada!
              </h2>
              <p className="text-muted-foreground mb-6">
                Te hemos enviado la confirmación al correo{" "}
                <span className="text-foreground font-medium">{submittedEmail}</span>.
                Revisa tu bandeja de entrada.
              </p>
              <Link to="/">
                <Button variant="hero-outline" className="rounded-full px-8">
                  <ArrowLeft size={16} />
                  Volver al inicio
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Demo;
