'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-teal-700 via-cyan-600 to-teal-800 px-10 md:px-20 overflow-hidden relative">

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      />

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-lg z-10 text-center md:text-left"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
          Menta <span className="text-cyan-100">Restobar</span>
        </h1>

        <p className="text-white text-lg md:text-xl mb-10 leading-relaxed">
          Disfruta el sabor <span className="font-semibold">fresco, artesanal</span> y único de nuestras hamburguesas gourmet.
        </p>

        <motion.button
          whileHover={{ scale: 1.06, boxShadow: '0 0 20px rgba(255,255,255,0.35)' }}
          whileTap={{ scale: 0.97 }}
          className="bg-white text-teal-800 px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-cyan-100 transition-all duration-300"
        >
          Ver menú
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [0, -15, 0], opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
        className="z-10 mt-10 md:mt-0"
      >
        <Image src="/burger.png" alt="Hamburguesa" width={480} height={480} className="drop-shadow-2xl" />
      </motion.div>
    </section>
  );
}