'use client';
import ProductCard, { ProductCardProps } from "./ProductCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Producto } from "./types/types";
import Modal from "./Modal";

export default function Productos() {
    const products: ProductCardProps[] = [
        {id: "1", nombre: "Charquekan Veggie", precio: 55, imagen:"/charquekan_menta.png", descripcion:"Deleitate con: hebras de soya crujientes, mote, queso frito, huevitos duros y su infaltable llajua."},
        {id: "2", nombre: "Silpancho Quinua", precio: 50, imagen:"/silpancho.png", descripcion:"Carne de lenteja, quinoa, papitas, huevo, cebolla, tomate, cilantro y locoto."},
        {id: "3", nombre: "Pique macho", precio: 45, imagen:"/pique.png", descripcion:"Carne de soya, champiñones, papitas, huevos, cebolla, tomate y locoto."},
        {id: "4", nombre: "Fried Green Chicken", precio: 45, imagen:"/friedchicken.png", descripcion:"Deleitate con: Champiñones ostra fritos, papitas, comotes, ensaladita y salsa blanca."},
        {id: "5", nombre: "Veggie Wings", precio: 35, imagen:"/veggiwings.png", descripcion:"Deleitate con: Alitas de coliflor a la BBQ con papas, camote, pepino y salsa blanca."},
        {id: "6", nombre: "Trancapecho", precio: 30, imagen:"/trancapecho.png", descripcion:"Deleitate con: Carne de lenteja, pan integral, huevo, cebolla, tomate, locoto y cilantro."},
        {id: "7", nombre: "Champiñon Sandwich", precio: 30, imagen:"/champinon.png", descripcion:"Deleitate con: Pan pita, quesito fundido, salsa roja y aceitunas."},
        {id: "8", nombre: "Lenteja Burger", precio: 35, imagen:"/burger.png", descripcion:"Acompañada con: Pepinillo, cebolla caramelizada, champiñones, tomate, lechuga y salsa blanca. 😋"},
        {id: "9", nombre: "Cañahua Burger", precio: 35, imagen:"/canahua.png", descripcion:"Descripcion de ingredientes"},
        {id: "10", nombre: "Quinua Burger", precio: 35, imagen:"/canahua.png", descripcion:"Descripcion de ingredientes"},
        {id: "11", nombre: "Morena Burger", precio: 35, imagen:"/canahua.png", descripcion:"Descripcion de ingredientes"},
        {id: "12", nombre: "Chickpea Burger", precio: 35, imagen:"/canahua.png", descripcion:"Descripcion de ingredientes"},
        {id: "13", nombre: "Green Felete", precio: 40, imagen:"/canahua.png", descripcion:"Descripcion de ingredientes"},
        {id: "14", nombre: "Falafel Bowl", precio: 35, imagen:"/falafel.png", descripcion:"Descripcion de ingredientes"},
        {id: "15", nombre: "Budha Bowl", precio: 40, imagen:"/budha.png", descripcion:"Descripcion de ingredientes"},
        {id: "16", nombre: "Jalisco Bowl", precio: 35, imagen:"/jalisco.png", descripcion:"Descripcion de ingredientes"}
    ];
    const [modalAbierto, setModalAbierto] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

    function abrirModal(producto: Producto) {
        setProductoSeleccionado(producto);
        setModalAbierto(true);
    }

    function cerrarModal() {
        setModalAbierto(false);
        setProductoSeleccionado(null);
    }

    function addToCart(configuraciones: Record<string, unknown>) {
        console.log("Añadiendo al carrito", productoSeleccionado, configuraciones);
        cerrarModal();
    }

    return (
        <section id="productos" className="relative w-full min-h-screen flex flex-col justify-center bg-gradient-to-b from-cyan-600 via-teal-700 to-teal-800 px-10">
            <div className="absolute inset-0 bg-[url('/textura-fruits.png')] bg-repeat bg-[length:500px_500px] opacity-50 pointer-events-none"></div>
            <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.5}}
                viewport={{ once: false, amount: 0.3}}
            >
                <h1 className="font-bold text-3xl mt-7">NUESTROS PRODUCTOS</h1>
                <p className="text-white mb-10">Descubre nuestros productos ofertados por Menta</p>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                    className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                    {products.map((item, index)=> (
                        <ProductCard key={index} {...item} onClickPlus={() => abrirModal(item)} />
                    ))}
                </motion.div>
            </motion.div>
            {modalAbierto && productoSeleccionado && (
            <Modal
                producto={productoSeleccionado}
                onClose={cerrarModal}
                onAdd={addToCart}
            />
            )}
        </section>
    );
}