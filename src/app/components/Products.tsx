'use client';
import Image from "next/image";
import ProductCard, { ProductCardProps } from "./ProductCard";

export default function Productos() {
    const products: ProductCardProps[] = [
        {nombre: "Charquekan Veggie", precio: 55, imagen:"/charquekan_menta.png"},
        {nombre: "Silpancho Quinua", precio: 50, imagen:"/silpancho.png"},
        {nombre: "Pique macho", precio: 45, imagen:"/pique.png"},
        {nombre: "Fried Green Chicken", precio: 45, imagen:"/friedchicken.png"},
        {nombre: "Veggie Wings", precio: 35, imagen:"/veggiwings.png"},
        {nombre: "Trancapecho", precio: 30, imagen:"/trancapecho.png"},
        {nombre: "Champiñon Sandwich", precio: 30, imagen:"/champinon.png"},
        {nombre: "Lenteja Burger", precio: 35, imagen:"/burger.png"},
        {nombre: "Cañahua Burger", precio: 35, imagen:"/canahua.png"},
        {nombre: "Quinua Burger", precio: 35, imagen:"/canahua.png"},
        {nombre: "Morena Burger", precio: 35, imagen:"/canahua.png"},
        {nombre: "Chickpea Burger", precio: 35, imagen:"/canahua.png"},
        {nombre: "Green Felete", precio: 40, imagen:"/canahua.png"},
        {nombre: "Falafel Bowl", precio: 35, imagen:"/falafel.png"},
        {nombre: "Budha Bowl", precio: 40, imagen:"/budha.png"},
        {nombre: "Jalisco Bowl", precio: 35, imagen:"/jalisco.png"}
    ];
    return (
        <section id="productos" className="relative w-full min-h-screen flex flex-col justify-center bg-gradient-to-b from-cyan-600 via-teal-700 to-teal-800 px-10">
            <div className="absolute inset-0 bg-[url('/textura-fruits.png')] bg-repeat bg-[length:500px_500px] opacity-50 pointer-events-none"></div>
            <div>
                <h1 className="font-bold text-3xl mt-7">NUESTROS PRODUCTOS</h1>
                <p className="text-white mb-10">Descubre nuestros productos ofertados por Menta</p>
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                    {products.map((item, index)=> (
                        <ProductCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}