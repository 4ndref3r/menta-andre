'use client';
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Planes from "./components/Planes";
import Productos from "./components/Products";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Productos />
      <Planes />
      <AboutUs />
      <Contact />
    </main>
  );
}
