"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link href="/" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm tracking-widest uppercase">Volver</span>
            </Link>
            <Link href="/" className="font-serif text-2xl lg:text-3xl tracking-wide text-foreground">
              BLÜTE
            </Link>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <div className="pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20 lg:mb-28"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Blog
            </p>
            <h1 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-foreground max-w-3xl mx-auto text-balance leading-tight">
              En construcción
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border pt-16 text-center"
          >
            <p className="text-muted-foreground text-lg">
              Próximamente — los primeros artículos están en camino.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}