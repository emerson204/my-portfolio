"use client";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";
import Habilidades from "@/components/habilidades";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Proyectos from "@/components/proyectos";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main className="max-w-[50rem] mx-auto ">
      <Header />
      <Hero />
      <Proyectos />
      <Habilidades />
      <Contacto />
      <Footer />
    </main>
  );
}
