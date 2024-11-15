import React from "react";

export default function HeaderTitle({ title, descripcion }) {
  return (
    <>
      <h2 className="text-center text-lg mb-1 text-gray-400 dark:text-gray-300">
        {title}
      </h2>
      <p className="md:text-2xl text-xl text-center mb-10">{descripcion}</p>
    </>
  );
}
