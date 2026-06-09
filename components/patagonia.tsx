"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function Patagonia() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="patagonia"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-6">
              Nuestra Tierra
            </p>
            <h2 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-primary-foreground mb-8">
              Nacidos en el corazón de la{" "}
              <span className="italic">Patagonia</span>
            </h2>
            <div className="space-y-6 text-primary-foreground/80">
              <p className="text-base lg:text-lg leading-relaxed">
                Neuquén, nuestra casa, es un territorio de contrastes extraordinarios.
                Desde las cumbres nevadas de los Andes hasta los valles fértiles que
                bordean sus ríos, esta tierra inspira cada creación que hacemos.
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                Fermentación natural, ingredientes reales, origen patagónico. Gastronomía, cultura y deporte, sumá Blüte a todos tus rituales.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="w-16 h-16 border border-primary-foreground/30 flex items-center justify-center">
                <span className="font-sans font-semibold text-2xl text-primary-foreground">N</span>
              </div>
              <div>
                <span className="block text-primary-foreground font-sans font-semibold text-xl">Neuquén</span>
                <span className="text-sm text-primary-foreground/60 tracking-wider">38.9516° S, 68.0591° O</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Foto rectangular */}
            <div className="relative overflow-hidden rounded-2x1">
              <Image
                src="/cocco.JPG"
                alt="Patagonia BLÜTE"
                width={600}
                height={400}
                className="w-full h-72 lg:h-96 object-cover rounded-2xl"
              />
              {/* EST. 2024 sobre la foto */}
              <div className="absolute top-4 right-4 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2">
                <span className="font-sans font-semibold text-lg text-primary-foreground tracking-widest">
                  EST. 2024
                </span>
              </div>
            </div>

            {/* Cita separada */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="font-sans text-lg italic text-primary-foreground/70 leading-relaxed">
                &ldquo;El deseo de toda mi vida ha sido explorar la Patagonia.&rdquo;
              </p>
              <p className="text-sm text-primary-foreground/50 mt-2">— Francisco P. Moreno</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}