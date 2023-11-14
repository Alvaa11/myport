import Navbar from "@/components/navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Personal Portifolio | Alvaro José",
  description: "Meu portifolio pessoal para que as pessoas me conheçam melhor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
