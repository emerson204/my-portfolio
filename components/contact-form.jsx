"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    username: z
      .string()
      .min(3, {
        message: "El campo nombre debe de tener al menos 3 caracteres",
      })
      .max(50),
    email: z
      .string()
      .email({ message: "El correo no es valido" })
      .nonempty({ message: "El correo es requerido" }),
    message: z
      .string()
      .min(5, {
        message: "El campo nombre debe de tener al menos 5 caracteres",
      })
      .max(500),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values, e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(values),
    });

    setLoading(false);

    if (response.ok) {
      toast({
        title: "¡Tus datos han sido enviados exitosamente! ✅",
      });
      form.reset();
      return;
    } else {
      toast({
        title: "Error al enviar las datos ❌",
      });
    }
  };

  return (
    <Form {...form}>
      {loading ? (
        <p className="flex justify-center items-center text-lg">
          Enviando tus datos...
        </p>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Ingresa tu nombre"
                    {...field}
                    className="dark:bg-slate-800 py-6"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Ingresa tu email"
                    {...field}
                    className="dark:bg-slate-800 py-6"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Ingresa tu mensaje"
                    {...field}
                    className="dark:bg-slate-800 resize-none h-[6rem]"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <Button type="submit">Enviar</Button>
        </form>
      )}
    </Form>
  );
}
