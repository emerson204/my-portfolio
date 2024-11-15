import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <section className="pt-10 pb-5 px-5">
      <div className="flex justify-between items-center md:flex-row flex-col gap-2 md:gap-0">
        <h2 className="flex font-bold text-[1.7rem] items-center  text-slate-500 dark:text-slate-300">
          <span>
            <ChevronLeft size={40} className="text-indigo-500" />
          </span>
          EME
          <span>
            <ChevronRight size={40} className="text-indigo-500" />
          </span>
        </h2>

        <p className="text-slate-500 font-medium text-center dark:text-slate-300">
          Codificar es más que una habilidad; es mi forma de vida y pasión.
        </p>
      </div>

      <Separator className="my-4" />

      <p className="text-center">&copy; 2024 | Emerson Aldahir</p>
    </section>
  );
}
