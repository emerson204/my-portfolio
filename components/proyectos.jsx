import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Separator } from "./ui/separator";
import { dataProyectos } from "@/data/proyectos-data";
import HeaderTitle from "./header-title";
import { motion } from "framer-motion";

export default function Proyectos() {
  return (
    <motion.section
      className="px-5 py-10 box scroll-mt-[2rem]"
      id="proyectos"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <HeaderTitle
        title="Proyectos"
        descripcion="Donde la creatividad y la tecnología se encuentran."
      />
      <div className="grid sm:grid-cols-2 gap-4">
        {dataProyectos.map((proyecto) => (
          <div className="border px-4 py-3 rounded-sm" key={proyecto.id}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-sm bg-black dark:bg-white flex items-center justify-center">
                  <proyecto.icon
                    size={18}
                    className="text-white dark:text-black"
                  />
                </div>
                <h3 className="text-xl font-medium">{proyecto.title}</h3>
              </div>
              <Link href={proyecto.github} target="_blank">
                <FaGithub size={20} />
              </Link>
            </div>
            <Link
              href={proyecto.linkProyecto}
              className="flex items-center gap-1 text-sm w-fit hover:translate-x-1 transition-all mb-3 hover:text-slate-500  duration-200 hover:dark:text-slate-400"
              target="_blank"
            >
              <IoIosLink />
              {proyecto.linkProyecto}
            </Link>

            <p>{proyecto.descripcion}</p>

            <Separator className="my-3" />

            <div className="flex items-center gap-3 flex-wrap text-sm">
              {proyecto.tecnologias.map((tecnologia) => (
                <p
                  className="bg-black text-white  dark:bg-gray-400/30 w-fit rounded-md py-1 px-2"
                  key={tecnologia}
                >
                  {tecnologia}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
