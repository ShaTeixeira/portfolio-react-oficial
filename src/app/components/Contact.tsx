import React from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Vamos criar algo <span className="italic text-muted-foreground">extraordinário?</span></h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Estou sempre em busca de novos desafios e colaborações interessantes. Sinta-se à vontade para entrar em contato.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">puzzle.studio@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-medium">Serra - ES</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-medium">+55 (27) 99618-9892</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accent/30 p-8 md:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome</label>
                <input
                  {...register("name", { required: true })}
                  placeholder="Seu nome"
                  className={`w-full bg-background border ${errors.name ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  placeholder="seu@email.com"
                  className={`w-full bg-background border ${errors.email ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  placeholder="Como posso te ajudar?"
                  className={`w-full bg-background border ${errors.message ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
