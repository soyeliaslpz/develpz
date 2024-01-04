import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario por correo electrónico o realizar otras acciones

    // Reiniciar los campos del formulario
    setName("");
    setEmail("");
    setMessage("");

    console.log(name, email, message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Nombre'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label='Correo electrónico'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        required
      />
      <TextField
        label='Mensaje'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        rows={4}
        required
      />
      <Button type='submit' variant='contained' color='primary'>
        Enviar
      </Button>
    </form>
  );
};
