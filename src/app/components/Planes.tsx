'use client';
import Image from "next/image";

export default function Planes() {
  return (
    <section
      id="planes"
      className="relative w-full min-h-screen bg-gradient-to-b from-teal-800 via-teal-900 to-blue-900 px-10 py-10"
    >
      <div className="absolute inset-0 bg-[url('/textura-fruits.png')] bg-repeat bg-[length:500px_500px] opacity-50 pointer-events-none"></div>

      <div className="relative z-10">
        <h1 className="font-bold text-3xl mt-7 text-white">NUESTROS PLANES</h1>
        <p className="text-white mb-10">Planes de almuerzos y tarjetas de descuento.</p>
        <div className="grid grid-cols-2">
            <div className="relative flex items-center justify-between mx-8 my-5">
                <div>
                    <h1 className="font-bold text-xl">ALMUERZO MENSUAL</h1>
                    <p>Disfruta de un almuerzo mensual, 20 almuerzos de lunes a viernes</p>
                    <span className="font-bold">450 Bs.-</span>
                </div>
                <button className="w-10 h-10 items-center justify-center bg-cyan-700 rounded-full text-2xl shadow hover:bg-cyan-600 transition"> + </button>
            </div>
            <div className="relative flex items-center justify-between mx-8 my-5">
                <div>
                    <h1 className="font-bold text-xl">SEGUNDO MENSUAL</h1>
                    <p>Disfruta de un segundo mensual, 20 segundos de lunes a viernes</p>
                    <span className="font-bold">350 Bs.-</span>
                </div>
                <button className="w-10 h-10 items-center justify-center bg-cyan-700 rounded-full text-2xl shadow hover:bg-cyan-600 transition"> + </button>
            </div>
            <div className="relative flex items-center justify-between mx-8 my-5">
                <div>
                    <h1 className="font-bold text-xl">ALMUERZO SEMANAL</h1>
                    <p>Disfruta de un almuerzo semanal, 5 almuerzos de lunes a viernes</p>
                    <span className="font-bold">120 Bs.-</span>
                </div>
                <button className="w-10 h-10 items-center justify-center bg-cyan-700 rounded-full text-2xl shadow hover:bg-cyan-600 transition"> + </button>
            </div>
            <div className="relative flex items-center justify-between mx-8 my-5">
                <div>
                    <h1 className="font-bold text-xl">SEGUNDO SEMANAL</h1>
                    <p>Disfruta de un segundo semanal, 5 segundos de lunes a viernes</p>
                    <span className="font-bold">95 Bs.-</span>
                </div>
                <button className="w-10 h-10 items-center justify-center bg-cyan-700 rounded-full text-2xl shadow hover:bg-cyan-600 transition"> + </button>
            </div>
            <div className="relative flex items-center justify-between mx-8 my-5">
                <div>
                    <h1 className="font-bold text-xl">CUPONES DE DESCUENTO</h1>
                    <p>Diez cupones de 35 Bs.-</p>
                    <span className="font-bold">315 Bs.-</span>
                </div>
                <button className="w-10 h-10 items-center justify-center bg-cyan-700 rounded-full text-2xl shadow hover:bg-cyan-600 transition"> + </button>
            </div>
            <div className="relative flex items-center justify-between mx-8 my-5">
                <div>
                    <h1 className="font-bold text-xl">CUPONES DE DESCUENTO</h1>
                    <p>Regala vales de consumo para esa persona especial.</p>
                    <span className="font-bold">Monto a elección.</span>
                </div>
                <button className="w-10 h-10 items-center justify-center bg-cyan-700 rounded-full text-2xl shadow hover:bg-cyan-600 transition"> + </button>
            </div>                         
        </div>
      </div>
    </section>
  );
}