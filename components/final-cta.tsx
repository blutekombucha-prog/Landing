"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="comprar" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50">
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Tríptico vertical */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 flex items-stretch gap-3 h-[900px] lg:h-[1000px]"          >
            <div className="flex-1 overflow-hidden rounded-lg">
              <Image
                src="/TRIPTI2.JPG"
                alt="BLÜTE Kombucha"
                width={600}
                height={800}
                quality={100}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex-1 overflow-hidden rounded-lg mt-8">
              <Image
                src="/ciervo.JPEG"
                alt="BLÜTE Ciervo"
                width={600}
                height={800}
                quality={100}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex-1 overflow-hidden rounded-lg">
              <Image
                src="/liebre.JPG"
                alt="BLÜTE Liebre"
                width={600}
                height={800}
                quality={100}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Lleva la Patagonia a tu hogar
            </p>
            <h2 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground mb-8">
              Descubrí tu nuevo{" "}
              <span className="text-primary">ritual diario</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Tres sabores únicos, una misma promesa: kombucha con ingredientes reales,
              fermentada con cuidado en el corazón de la Patagonia argentina.
            </p>

            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-baseline gap-4">
                  <span className="font-sans font-semibold text-4xl lg:text-5xl text-foreground">$24.000</span>
                  <span className="text-muted-foreground">/ pack de 6</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-sans font-semibold text-2xl lg:text-3xl text-foreground/70">$44.000</span>
                  <span className="text-muted-foreground">/ pack de 12</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://instagram.com/blute.patagonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  Pack de 6 - $24.000
                </a>
                <a
                  href="https://instagram.com/blute.patagonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 text-sm tracking-widest uppercase border border-foreground/20 text-foreground hover:bg-foreground/5 transition-all duration-300"
                >
                  Pack de 12 - $44.000
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Envío gratis
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Combiná sabores
                </span>
              </div>

              <div className="pt-8 mt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">¿Tenés un local gastronómico?</p>
                <a
                  href="https://wa.me/542995248305?text=Hola!%20Quiero%20sumar%20Bl%C3%BCte%20a%20mi%20local"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Sumá Blüte a tu local
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}