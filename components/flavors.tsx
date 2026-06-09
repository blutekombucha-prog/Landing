"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";


const flavors = [
  {
    id: "limon",
    name: "Limón & Jengibre",
    description:
      "Una explosión cítrica equilibrada con el calor sutil del jengibre fresco. Energizante y refrescante, perfecta para despertar los sentidos.",
    image: "/LYJA3.png",
    color: "bg-[#2d5a45]",
    textColor: "text-[#f5e6d3]",
    animal: "Galgo",
    notes: ["Cítrico", "Picante", "Vibrante"],
    specs: {
      volumen: "473 ml",
      servirA: "2 °C",
      dulzor: "Semiseco",
      azucaresResiduales: "< 3%",
      ingredientes: "Jugo de limón · Jengibre fresco",
    },
    anatomyNote:
      "El jengibre fresco (Zingiber officinale) aporta un calor limpio y persistente. Se incorpora al final del proceso fermentativo para preservar sus aceites esenciales.",
    imageSize: "w-56 lg:w-80",
  },
  {
    id: "manzana",
    name: "Manzana & Canela",
    description:
      "La dulzura natural de la manzana envuelta en notas cálidas de canela. Un abrazo reconfortante en cada sorbo.",
    image: "/MYCA.png",
    color: "bg-[#f5e6d3]",
    textColor: "text-[#1a3a5c]",
    animal: "Liebre",
    notes: ["Dulce", "Especiado", "Reconfortante"],
    specs: {
      volumen: "473 ml",
      servirA: "2 °C",
      dulzor: "Semidulce",
      azucaresResiduales: "< 3%",
      ingredientes: "Manzana fresca · Canela en rama",
    },
    anatomyNote:
      "La canela en rama (Cinnamomum verum) libera sus aromas de forma gradual durante la fermentación, aportando calidez sin amargor.",
    imageSize: "w-56 lg:w-72 mt-14",
  },
  {
    id: "frambuesa",
    name: "Frambuesa & Pimienta Rosa",
    description:
      "Frutos rojos silvestres con un toque sofisticado de pimienta rosa. Una experiencia compleja y elegante.",
    image: "/FYPA.png",
    color: "bg-[#f5e0e0]",
    textColor: "text-[#8b3a3a]",
    animal: "Ciervo",
    notes: ["Frutal", "Floral", "Sofisticado"],
    specs: {
      volumen: "473 ml",
      servirA: "2 °C",
      dulzor: "Semiseco",
      azucaresResiduales: "< 3%",
      ingredientes: "Frambuesa congelada · Pimienta rosa",
    },
    anatomyNote:
      "La pimienta rosa (Schinus molle), conocida como aguaribay, es un árbol nativo de la Patagonia y el NOA. Su fruto aporta notas florales y levemente picantes, completamente distintas a la pimienta negra convencional.",
    imageSize: "w-60 lg:w-80",
  },
];

export function Flavors() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFlavor, setActiveFlavor] = useState(0);

  const flavor = flavors[activeFlavor];

  return (
    <section id="sabores" ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Foto previa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden rounded-lg mb-20 lg:mb-28"
          style={{ height: "500px" }}
        >
          <Image
            src="/sabores-foto.jpg.JPG"
            alt="Blüte en la Patagonia"
            fill
            className="object-cover object-[center_70%]"
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 lg:mb-28"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Nuestros Sabores
          </p>
          <h2 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-foreground max-w-3xl mx-auto text-balance leading-tight">
            Tres expresiones únicas, tres momentos{" "}
            <span className="text-primary">para disfrutar</span>
          </h2>
        </motion.div>

        {/* Flavor Selector */}
        <div className="flex justify-start lg:justify-center gap-4 lg:gap-8 mb-16 overflow-x-auto pb-4 px-6 lg:px-0 -mx-6 lg:mx-0">
          {flavors.map((f, index) => (
            <motion.button
              key={f.id}
              onClick={() => setActiveFlavor(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`px-6 py-3 text-sm tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${
                activeFlavor === index
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30"
              }`}
            >
              {f.name}
            </motion.button>
          ))}
        </div>

        {/* Active Flavor Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFlavor}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden ${flavor.color}`}
          >
            <div className="grid lg:grid-cols-2 gap-0">

              {/* Left — Image */}
              <div className="relative flex items-center justify-center py-16 lg:py-24">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    width={350}
                    height={500}
                    className={`h-auto object-contain drop-shadow-2xl ${flavor.imageSize}`}
                  />
                </motion.div>
              </div>

              {/* Right — Content */}
              <div className={`flex flex-col justify-center p-8 lg:p-16 ${flavor.textColor}`}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Animal + Name */}
                  <div>
                    <span className="text-xs tracking-[0.3em] uppercase opacity-60">
                      {flavor.animal}
                    </span>
                    <h3 className="font-sans font-semibold text-3xl lg:text-4xl mt-2">
                      {flavor.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base lg:text-lg opacity-80 leading-relaxed max-w-md">
                    {flavor.description}
                  </p>

                  {/* Flavor Notes — redondeados */}
                  <div className="flex flex-wrap gap-3">
                    {flavor.notes.map((note) => (
                      <span
                        key={note}
                        className="px-4 py-2 text-xs tracking-widest uppercase border border-current/30 rounded-full"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-current/20 pt-8 space-y-6">

                    {/* Specs grid */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                      <div>
                        <span className="text-xs tracking-widest uppercase opacity-50">Volumen</span>
                        <p className="text-base font-medium mt-1">{flavor.specs.volumen}</p>
                      </div>
                      <div>
                        <span className="text-xs tracking-widest uppercase opacity-50">Servir a</span>
                        <p className="text-base font-medium mt-1">{flavor.specs.servirA}</p>
                      </div>
                      <div>
                        <span className="text-xs tracking-widest uppercase opacity-50">Dulzor</span>
                        <p className="text-base font-medium mt-1">{flavor.specs.dulzor}</p>
                      </div>
                      <div>
                        <span className="text-xs tracking-widest uppercase opacity-50">Azúcares residuales</span>
                        <p className="text-base font-medium mt-1">{flavor.specs.azucaresResiduales}</p>
                      </div>
                      <div className="col-span-2">
                        <span className="text-xs tracking-widest uppercase opacity-50">Ingredientes</span>
                        <p className="text-base font-medium mt-1">{flavor.specs.ingredientes}</p>
                      </div>
                    </div>

                    {/* Anatomy note */}
                    <p className="text-xs leading-relaxed opacity-60 italic">
                      {flavor.anatomyNote}
                    </p>

                  </div>

                  {/* CTA */}
                  <a
                    href="#comprar"
                    className="inline-flex items-center gap-3 text-sm tracking-widest uppercase group"
                  >
                    Comprar ahora
                    <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
                  </a>

                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}