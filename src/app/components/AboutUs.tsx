'use client';
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="sobre-nosotros"
      className="relative w-full min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 px-10 py-16"
    >
      <div className="absolute inset-0 bg-[url('/textura-fruits.png')] bg-repeat bg-[length:500px_500px] opacity-40 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once:false, amount: 0.4 }}
        className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="font-extrabold text-4xl mb-6 drop-shadow-lg">SOBRE NOSOTROS</h1>
        <p className="text-lg mb-12">
          En <span className="text-teal-400 font-semibold">Menta Restobar</span> llevamos 11 años transformando la manera de disfrutar la comida vegetariana.
          Nuestro compromiso es ofrecer sabores frescos, artesanales y responsables, cuidando tu salud y el planeta.
        </p>

        {/* Misión */}
        <div className="mb-10 bg-white/10 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-teal-300">Nuestra Misión</h2>
          <p className="text-white/90 leading-relaxed">
            Inspirar a nuestra comunidad a adoptar un estilo de vida saludable y sostenible a través de una cocina vegetariana deliciosa y consciente, que fomente el respeto por todos los seres vivos y el medio ambiente.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">Nuestra Visión</h2>
          <p className="text-white/90 leading-relaxed">
            Ser un referente gastronómico en comida vegetariana a nivel nacional, impulsando el cambio hacia un mundo más verde y justo, donde la alimentación sea sinónimo de salud, ética y sabor excepcional.
          </p>
        </div>
      </motion.div>
    </section>
  );
}