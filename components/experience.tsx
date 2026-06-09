"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    title: "Mañanas",
    description:
      "Comienza el día con la energía del Limón & Jengibre. Un despertar natural que activa cuerpo y mente.",
    time: "07:00",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LYJ_PNG_LATA-removebg-preview-XJJcDYt2dkd3rtS2Jyew7lXKUDsweP.png",
    size: "w-28",
  },
  {
    title: "Tardes",
    description:
      "El abrazo cálido de Manzana & Canela para esas pausas que merecen algo especial.",
    time: "15:00",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MYC_PNG_LATA-removebg-preview-xzYJUnHIQSczHQRfkPa65xeOA0u9NE.png",
    size: "w-36",
  },
  {
    title: "Noches",
    description:
      "Frambuesa & Pimienta Rosa: el cierre perfecto para celebrar los pequeños rituales del día.",
    time: "19:00",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FYP_PNG_LATA-removebg-preview-2k0SPLESZnKIxyOn7s6q7yj0MekWSD.png",
    size: "w-28",
  },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 lg:py-48 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 lg:mb-28"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            La Experiencia BLÜTE
          </p>
          <h2 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-foreground max-w-3xl mx-auto text-balance">
            Un sabor para cada{" "}
            <span className="text-primary">momento del día</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-card hover:bg-card/80 transition-all duration-500"
            >
              {/* Time indicator */}
              <div className="absolute top-6 right-6">
                <span className="font-mono text-sm text-muted-foreground">
                  {exp.time}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-64 flex items-center justify-center bg-gradient-to-b from-transparent to-muted/20">
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    width={150}
                    height={200}
                    className={`${exp.size} h-auto object-contain drop-shadow-lg`}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8 pt-4">
                <h3 className="font-sans font-semibold text-2xl lg:text-3xl text-foreground mb-3">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 lg:mt-32 text-center max-w-3xl mx-auto"
        >
          <blockquote className="font-sans font-semibold text-2xl lg:text-3xl text-foreground/80 italic leading-relaxed">
            &ldquo;BLÜTE no es solo una bebida, es un ritual que
            acompaña los momentos que querés disfrutar.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
