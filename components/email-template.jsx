import * as React from "react";

export const EmailTemplate = ({ username, email, message }) => (
  <div>
    <h2>Hola soy : {username}</h2>
    <h2>Este es mi gmail : {email}</h2>
    <h2>Mensaje: {message}</h2>
  </div>
);
