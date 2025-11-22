'use client';

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#productos' },
    { name: 'Planes', href: '#planes' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Contáctanos', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-teal-900/80 via-cyan-800/80 to-teal-900/80 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#inicio"
          className="font-extrabold text-2xl text-cyan-100 tracking-wide hover:text-white transition-colors"
        >
          Menta<span className="text-teal-300">Restobar</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-cyan-100 hover:text-white transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icono del carrito */}
        <Link
          href="#carrito"
          className="relative p-2 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          <ShoppingBag
            size={26}
            className="text-cyan-100 hover:scale-110 transition-transform"
          />
          {/* Indicador del carrito */}
          <span className="absolute -top-1 -right-1 bg-teal-400 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-md">
            2
          </span>
        </Link>
      </div>
    </nav>
  );
}

