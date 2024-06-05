import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog/prvi-clanak">Prvi Clanak</a></li>
      <li><a href="/blog/drugi-clanak">Drugi Clanak</a></li>
      <li><a href="/blog/deveti-clanak">Deveti Clanak</a></li>
      <br/>
      <li><a href="/products">Products</a></li>
    </ul>

    {children}

    <footer>
    Footer
      </footer>
    </body>
    </html>
  );
}
