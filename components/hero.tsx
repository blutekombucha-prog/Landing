"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted opacity-50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-sans font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-foreground mb-8"
            >
              <span className="block">La esencia</span>
              <span className="block text-primary">salvaje</span>
              <span className="block">de la Patagonia</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base lg:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Kombucha de fermentación natural nacida en la Patagonia.
              Cada sorbo es una experiencia, un momento de conexión con la naturaleza.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#sabores"
                className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Descubrí Sabores
              </a>
              <a
                href="#filosofía"
                className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-foreground/20 text-foreground hover:bg-foreground/5 transition-all duration-300 mt-0"
              >
                Nuestra Historia
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            style={{ y: imgY }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 blur-3xl bg-primary/10 rounded-full transform scale-75 translate-y-20" />
                <Image
                  src="/juana.JPG"
                  alt="BLÜTE Kombucha"
                  width={500}
                  height={600}
                  className="relative z-10 w-72 lg:w-96 xl:w-[420px] h-auto object-cover rounded-2xl drop-shadow-2xl"
                  priority
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-20 h-20 border border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-foreground/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}