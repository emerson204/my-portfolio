"use client";

import { useState } from "react";
import { AlignJustify, ChevronLeft, ChevronRight } from "lucide-react";
import { ModeToggle } from "./toggle-dark-mode";
import { motion } from "framer-motion";
import Navbar from "./navbar";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <motion.header
      className="py-3 px-5 sticky top-0 bg-white z-20 md:bg-white/60 md:backdrop-blur dark:bg-[#030712] dark:md:bg-[#030712]/80 dark:md:backdrop-blur box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex justify-between items-center ">
        <h1 className="flex font-bold text-[1.7rem] items-center text-slate-500 dark:text-slate-300">
          <span>
            <ChevronLeft size={40} className="text-indigo-500" />
          </span>
          EME
          <span>
            <ChevronRight size={40} className="text-indigo-500" />
          </span>
        </h1>

        <Navbar open={open} handleClose={handleClose} />

        <div className="flex items-center gap-4">
          <AlignJustify
            className={`md:hidden ${open ? "hidden" : "block"} `}
            onClick={handleMenu}
          />
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  );
}
