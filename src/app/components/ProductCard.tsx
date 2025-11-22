'use client'
import Image from "next/image";

interface ProductCardProps {
    nombre: string;
    precio: number;
    imagen: string;
}

export default function ProductCard({ nombre, precio, imagen}: ProductCardProps) {
    return (
        <div className="relative flex flex-col hover:scale-105 transition w-[220px] h-[320px]">
            <div className="w-[200px] h-[200px] rounded-4xl border-5 border-teal-400 shadow-lg overflow-hidden relative">
                <Image src={imagen} fill alt={nombre} className="bg-white/60"/>
            </div>
            <h3 className="font-bold text-lg uppercase mt-3 drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">{nombre}</h3>
            <p className="text-white/90 text-lg drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">Bs.- {precio}</p>
            <button className="absolute left-40 top-60 w-9 h-9 flex items-center justify-center rounded-full bg-teal-500 text-white shadow-md hover:bg-teal-600 transition">
                +
            </button>
        </div>
    );
}