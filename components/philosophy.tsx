"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="filosofía"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column - Large quote */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Nuestra Filosofía
            </p>
            <h2 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground text-balance">
              Creemos en el poder de la{" "}
              <span className="text-primary">fermentación natural</span> y en crear
              momentos especiales.
            </h2>
          </motion.div>

          {/* Right column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="h-px w-16 bg-primary" />
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              En BLÜTE, cada lata es el resultado de un proceso que
              honra las tradiciones de fermentación y la cultura del cuidado.
              Trabajamos con ingredientes seleccionados para crear una experiencia única.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Nuestro compromiso es crear una bebida que acompañe tus rituales
              diarios, respetando los ciclos de la naturaleza y el tiempo que
              requiere cada momento especial.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <span className="block font-sans font-semibold text-4xl lg:text-5xl text-primary">
                  100%
                </span>
                <span className="text-sm tracking-widest uppercase text-muted-foreground">
                  Natural
                </span>
              </div>
              <div>
                <span className="block font-sans font-semibold text-4xl lg:text-5xl text-primary">
                  2024
                </span>
                <span className="text-sm tracking-widest uppercase text-muted-foreground">
                  Est.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 lg:mt-32 grid sm:grid-cols-3 gap-12 lg:gap-16"
        >
          {[
            {
              title: "Rituales",
              description:
                "Cada momento merece ser celebrado. BLÜTE acompaña tus pausas y rituales cotidianos con sabor y presencia.",
            },
            {
              title: "Cultura",
              description:
                "Nacimos en Neuquén para ser parte de una cultura más fresca, abierta y contemporánea.",
            },
            {
              title: "Experiencia",
              description:
                "Más que una bebida, una experiencia sensorial completa. Sabores complejos para quienes buscan algo distinto.",
            },
          ].map((value, i) => (
            <div key={value.title} className="group">
              <span className="block text-xs tracking-[0.3em] uppercase text-primary mb-4">
                0{i + 1}
              </span>
              <h3 className="font-sans font-semibold text-2xl lg:text-3xl text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
