'use client';
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative w-full min-h-screen bg-gradient-to-b from-blue-950 via-blue-975 to-black px-10 py-10"
    >
      <div className="absolute inset-0 bg-[url('/textura-fruits.png')] bg-repeat bg-[length:500px_500px] opacity-50 pointer-events-none"></div>

      <div className="relative z-10">
        <h1 className="font-bold text-3xl mt-7 text-white">CONTÁCTANOS</h1>
        <p className="text-white mb-10">Nos puedes encontrar en las siguientes direcciones</p>
        <div className="grid grid-cols-2 justify-items-center">
            <div>
                <h1 className="text-3xl uppercase font-bold">Sucursal Fidel Anze</h1>
                <a href="https://www.google.com/maps/place/menta+fidel+anze/data=!4m2!3m1!1s0x93e37409c7eaaaa9:0xd05cc123548ef38a?sa=X&ved=1t:242&ictx=111" target="_blank">
                    <Image className="rounded-3xl border-5 border-teal-400 my-2" src={"/fidel_anze.webp"} width={400} height={200} alt="Suc. FA"/>
                </a>
                <h1 className="font-bold">Dirección <span className="font-medium">Parque Fidel Anze entre Pando y Melchor Urquidi</span></h1>
                <h2 className="font-bold">Contactos <span className="font-medium">+591 61784074</span></h2>
                <h3 className="font-bold">Horarios de atención:</h3>
                <p className="font-medium mx-10">Lunes a Domingo de 11:30 a 21:30 hrs.</p>
            </div>
            <div>
                <h1 className="text-3xl uppercase font-bold">Sucursal 16 de Julio</h1>
                <a href="https://www.google.com/maps/place/menta+fidel+anze/data=!4m2!3m1!1s0x93e37409c7eaaaa9:0xd05cc123548ef38a?sa=X&ved=1t:242&ictx=111" target="_blank">
                    <Image className="rounded-3xl border-5 border-teal-400 my-2" src={"/fidel_anze.webp"} width={400} height={200} alt="Suc. FA"/>
                </a>
                <h1 className="font-bold">Dirección <span className="font-medium">Calle 16 de Julio entre La Paz y Ramón Rivero</span></h1>
                <h2 className="font-bold">Contactos <span className="font-medium">+591 61784074</span></h2>
                <h3 className="font-bold">Horarios de atención:</h3>
                <p className="font-medium mx-10">Lunes a Sábado de 11:30 a 15:30 hrs.</p>
                <p className="font-medium mx-10">Lunes a Sábado de 15:30 a 21:30 hrs.</p>
            </div>
        </div>
      </div>
    </section>
  );
}