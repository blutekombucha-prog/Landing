"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const flavors = [
  {
    id: "limon",
    name: "Limón & Jengibre",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LYJ_PNG_LATA-removebg-preview-XJJcDYt2dkd3rtS2Jyew7lXKUDsweP.png",
    color: "bg-[#2d5a45]",
    textColor: "text-[#f5e6d3]",
    specs: {
      volumen: "473 ml",
      servirA: "2 °C",
      dulzor: "Semiseco",
      azucaresResiduales: "< 3%",
      ingredientes: "Jugo de limón · Jengibre fresco",
    },
    description:
      "El jengibre fresco (Zingiber officinale) aporta un calor limpio y persistente. Se incorpora al final del proceso fermentativo para preservar sus aceites esenciales.",
    imageSize: "w-48 lg:w-56",
  },
  {
    id: "manzana",
    name: "Manzana & Canela",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MYC_PNG_LATA-removebg-preview-xzYJUnHIQSczHQRfkPa65xeOA0u9NE.png",
    color: "bg-[#f5e6d3]",
    textColor: "text-[#1a3a5c]",
    specs: {
      volumen: "473 ml",
      servirA: "2 °C",
      dulzor: "Semidulce",
      azucaresResiduales: "< 3%",
      ingredientes: "Manzana fresca · Canela en rama",
    },
    description:
      "La canela en rama (Cinnamomum verum) libera sus aromas de forma gradual durante la fermentación, aportando calidez sin amargor.",
    imageSize: "w-56 lg:w-64",
  },
  {
    id: "frambuesa",
    name: "Frambuesa & Pimienta Rosa",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FYP_PNG_LATA-removebg-preview-2k0SPLESZnKIxyOn7s6q7yj0MekWSD.png",
    color: "bg-[#f5e0e0]",
    textColor: "text-[#8b3a3a]",
    specs: {
      volumen: "473 ml",
      servirA: "2 °C",
      dulzor: "Semiseco",
      azucaresResiduales: "< 3%",
      ingredientes: "Frambuesa congelada · Pimienta rosa",
    },
    description:
      "La pimienta rosa (Schinus molle), conocida como aguaribay, es un árbol nativo de la Patagonia y el NOA. Su fruto aporta notas florales y levemente picantes, completamente distintas a la pimienta negra convencional.",
    imageSize: "w-48 lg:w-56",
  },
];

export function Anatomy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFlavor, setActiveFlavor] = useState(0);

  return (
    <section ref={ref} className="py-24 lg:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 block">
            Anatomía
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground max-w-3xl mx-auto text-balance">
            Conocé cada{" "}
            <span className="text-primary">sabor en detalle</span>
          </h2>
        </motion.div>

        {/* Flavor Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 lg:gap-8 mb-12 lg:mb-16"
        >
          {flavors.map((flavor, index) => (
            <button
              key={flavor.id}
              onClick={() => setActiveFlavor(index)}
              className={`px-4 lg:px-6 py-3 text-xs lg:text-sm tracking-widest uppercase transition-all duration-300 ${
                activeFlavor === index
                  ? "bg-foreground text-background"
                  : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {flavor.name.split(" & ")[0]}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFlavor}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`${flavors[activeFlavor].color} ${flavors[activeFlavor].textColor} p-8 lg:p-16`}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Image
                    src={flavors[activeFlavor].image}
                    alt={flavors[activeFlavor].name}
                    width={300}
                    height={450}
                    className={`${flavors[activeFlavor].imageSize} h-auto object-contain drop-shadow-2xl`}
                  />
                </motion.div>
              </div>

              {/* Specs */}
              <div className="space-y-8">
                <h3 className="font-serif text-3xl lg:text-4xl">
                  {flavors[activeFlavor].name}
                </h3>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="text-xs tracking-widest uppercase opacity-60">
                      Volumen
                    </span>
                    <p className="text-lg font-medium mt-1">
                      {flavors[activeFlavor].specs.volumen}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs tracking-widest uppercase opacity-60">
                      Servir a
                    </span>
                    <p className="text-lg font-medium mt-1">
                      {flavors[activeFlavor].specs.servirA}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs tracking-widest uppercase opacity-60">
                      Dulzor
                    </span>
                    <p className="text-lg font-medium mt-1">
                      {flavors[activeFlavor].specs.dulzor}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs tracking-widest uppercase opacity-60">
                      Azúcares residuales
                    </span>
                    <p className="text-lg font-medium mt-1">
                      {flavors[activeFlavor].specs.azucaresResiduales}
                    </p>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <span className="text-xs tracking-widest uppercase opacity-60">
                    Ingredientes
                  </span>
                  <p className="text-lg font-medium mt-1">
                    {flavors[activeFlavor].specs.ingredientes}
                  </p>
                </div>

                {/* Description */}
                <div className="pt-4 border-t border-current/20">
                  <p className="text-sm leading-relaxed opacity-80">
                    {flavors[activeFlavor].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
