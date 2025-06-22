
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AsideMenu from "./components/asideMenu";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Calculadora",
  description: "Calculadora feita por Estevão",
};

export default function RootLayout({ children }) {

  function showAsideMenu() {
    alert("Menu Hamburguer clicado!");
  }

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=_" />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AsideMenu />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
