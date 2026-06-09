"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function DondeEncontrarnos() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="puntos-de-venta" ref={ref} className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Dónde encontrarnos
          </p>
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Puntos de Venta en{" "}
            <span className="text-primary">Neuquén</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Encontrá Blüte en cafés, dietéticas, restaurantes, bares y locales gastronómicos de toda la ciudad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-lg shadow-lg"
          style={{ height: "500px" }}
        >
          <iframe
            src="https://www.google.com/maps/d/u/1/embed?mid=1_XcsT8cE_C3TsYTS1XcqMy18-SbH_bI&ehbc=2E312F"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Puntos de Venta Blüte"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="https://maps.app.goo.gl/rT6xGm2a34WfWq6Z9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            Ver todos los puntos de venta
          </a>
        </motion.div>

      </div>
    </section>
  );
}
