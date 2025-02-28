import { navbarData } from "@/data/navbar-data";
import { X } from "lucide-react";
import Link from "next/link";

export default function Navbar({ open, handleClose }) {
  return (
    <div
      className={`fixed md:relative bg-black/20 md:bg-transparent inset-0 transition-opacity duration-300 ease-in-out ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none md:pointer-events-auto"
      } md:opacity-100`}
    >
      <nav className="flex flex-col md:flex-row gap-7 pl-10 md:pl-0 pt-14 md:pt-0 left-0 absolute md:static top-0 w-[60%] md:w-auto bottom-0 bg-white md:bg-transparent md:items-center">
        <X
          className="md:hidden flex flex-end w-[150%] text-black "
          onClick={handleClose}
        />
        {navbarData.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            onClick={handleClose}
            className="block text-black dark:md:text-white hover:text-slate-500 relative dark:hover:text-slate-300 transition-colors duration-200 md:after:content-[''] after:w-0 after:bg-slate-400 hover:after:w-full  after:absolute after:bottom-0 after:h-[1px] after:left-0 after:transition-all after:duration-200"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
