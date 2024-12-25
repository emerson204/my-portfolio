import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-10 px-5 overflow-x-hidden">
      <div className="grid md:grid-cols-2 md:gap-10">
        <motion.div
          className="box"
          initial={{ transform: "translateX(-30%)", opacity: 0, scale: 0.5 }}
          animate={{ transform: "translateX(0)", opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image
            src="/coding-lap.png"
            alt="hero"
            width={500}
            height={500}
            className="md:w-auto w-[22rem] mx-auto"
          />
        </motion.div>
        <motion.div
          className="pt-5 box"
          initial={{ transform: "translateX(30%)", opacity: 0, scale: 0.5 }}
          animate={{ transform: "translateX(0)", opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h2 className="text-4xl font-semibold mb-[.2rem]">
            Emerson Castillo
          </h2>
          <h3 className="text-xl text-slate-500 font-medium dark:text-slate-400">
            Front End Developer
          </h3>
          <Separator className="w-[30%] my-3 md:my-4 h-[2px] bg-slate-400" />
          <p className="mb-6">
            Apasionado por la tecnología y la creatividad. Me especializo en
            desarrollar aplicaciones modernas con React, Next.js, y Node.js,
            resolviendo problemas complejos con soluciones prácticas. Siempre en
            busca de nuevos retos y oportunidades para seguir creciendo.
          </p>

          <div className="flex items-center gap-3 md:gap-4">
            <Link
              href="#contacto"
              className={`${buttonVariants()} py-5 hover:shadow-xl transition-shadow duration-300 dark:hover:shadow-slate-600 dark:hover:shadow-lg`}
            >
              <Mail className="mr-2 w-[1.1rem] md:w-[1.3rem]" /> Contacta
              conmigo
            </Link>

            <Link
              href="#"
              target="_blank"
              className={`${buttonVariants({
                variant: "secondary",
              })} py-5 hover:shadow-xl transition-shadow duration-300  dark:hover:shadow-slate-400 dark:hover:shadow-lg`}
            >
              <Paperclip className="mr-2 w-[1.1rem] md:w-[1.3rem]" />
              Descargar CV
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
