import React from "react";
import HeaderTitle from "./header-title";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import ContactForm from "./contact-form";

const dataContacto = [
  {
    id: 1,
    title: "Teléfono",
    tipo: "+51 907 559 345",
    event: "Llamar",
    icon: <Phone size={20} />,
    href: "tel:+51 907 559 345",
  },
  {
    id: 2,
    title: "Email",
    tipo: "emecasti65@gmail.com",
    event: "Enviar Mensaje",
    icon: <Mail size={20} />,
    href: "mailto:emecasti65@gmail.com",
  },
];

export default function Contacto() {
  return (
    <section
      className="px-5 py-10 scroll-mt-[2rem]"
      id="contacto"
      data-aos="fade-up"
    >
      <HeaderTitle
        title="Contacto"
        descripcion="¡Envíame un mensaje y transformemos ideas en éxitos!"
      />

      <div className="grid md:grid-cols-[1fr,2fr] gap-5">
        <div className="grid sm:grid-cols-2 sm:gap-3 md:gap-0 md:grid-cols-1">
          {dataContacto.map((contacto) => (
            <div
              key={contacto.id}
              className="p-4 rounded-sm border flex flex-col items-center gap-4 dark:bg-slate-800 dark:border-slate-800 mb-5"
            >
              <p className="flex items-center gap-2 text-lg">
                <span>{contacto.icon}</span>
                {contacto.title}
              </p>
              <p>{contacto.tipo}</p>
              <Link href={contacto.href} className={buttonVariants()}>
                {contacto.event}
              </Link>
            </div>
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
