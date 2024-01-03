"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Develpz Portafolio",
  description: "Descripción de ejemplo",
};
export default function RootLayout({ children }) {
  useEffect(() => {
    document.title = metadata.title;
  }, []);
  // El segundo argumento asegura que se ejecute solo una vez al montar el componente

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider store={store}> {children} </Provider>
      </body>
    </html>
  );
}
