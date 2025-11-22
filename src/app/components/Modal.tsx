'use client';

import { useEffect, useState } from 'react';
import { Producto } from './types/types';
import Image from 'next/image';

interface ModalProps {
  producto: Producto;
  onClose: () => void;
  onAdd: (configuraciones: Record<string, unknown>) => void;
}

export default function Modal({ producto, onClose, onAdd }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const [cantidad, setCantidad] = useState(1);
  const add = () => setCantidad(prev => prev+1);
  const sub = () => setCantidad(prev => prev>1? prev-1 : 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (isNaN(val) || val<1) {
        setCantidad(1);
    }else{
        setCantidad(val);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-3 right-3 text-3xl font-bold text-gray-700 hover:text-red-600 transition"
        >
          &times;
        </button>
        <h2 id="modal-title" className="text-xl font-bold mb-1 text-gray-900">
          {producto.nombre}
        </h2>
        <p className="text-gray-900 mb-2">{producto.descripcion}</p>
        <Image className="my-2" src={producto.imagen} alt={producto.nombre} width={400} height={400}/>
        <div className='flex flex-inline items-center'>
            <button onClick={sub} className='text-white font-bold text-2xl bg-cyan-500 rounded-full h-9 w-9 p-1 flex items-center justify-center mx-2'>-</button>
            <input onChange={handleChange} min={1} type="text" className='text-2xl h-9 w-25 border border-black rounded rounded-xl text-black text-center' value={cantidad} />
            <button onClick={add} className='text-white font-bold text-2xl bg-cyan-500 rounded-full h-9 w-9 p-1 flex items-center justify-center mx-2'>+</button>
            <button onClick={() => onAdd({})} className='font-bold text-center ml-4 px-4 bg-teal-600 text-white py-2 rounded hover:bg-cyan-500 transition w-45 h-9'>Agregar Bs.- {producto.precio*cantidad}</button>
        </div>
      </div>
    </div>
  );
}
