"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const notas = [
  {
    id: 0,
    title: "Kombucha con identidad patagónica",
    excerpt:
      "LU5 Radio Neuquén entrevistó a los fundadores de BLÜTE sobre el origen de la marca, el proceso de fermentación y la identidad patagónica que define cada lata.",
    date: "2025",
    href: "https://lu5am.com/kombucha-con-identidad-patagonica/",
    category: "Radio",
    media: "LU5 AM Neuquén",
    image: "/LU5.jpg",
  },
];

export default function PrensaPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm tracking-widest uppercase">Volver</span>
            </button>
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
            className="mb-20 lg:mb-28"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Prensa
            </p>
            <h1 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-foreground max-w-3xl text-balance leading-tight">
              BLÜTE en los medios
            </h1>
          </motion.div>

          <div className="space-y-0">
            {notas.map((nota, index) => (
              <motion.article
                key={nota.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={nota.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-10 border-t border-border hover:border-foreground/30 transition-colors duration-300"
                >
                  {nota.image && (
                    <div className="flex-shrink-0 w-full lg:w-40 h-28 overflow-hidden rounded-md">
                      <Image
                        src={nota.image}
                        alt={nota.title}
                        width={160}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs tracking-widest uppercase text-primary">{nota.media}</span>
                      <span className="text-xs text-muted-foreground">{nota.date}</span>
                      <span className="text-xs tracking-widest uppercase text-muted-foreground border border-border px-2 py-0.5">{nota.category}</span>
                    </div>
                    <h2 className="font-sans font-semibold text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors mb-3">
                      {nota.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {nota.excerpt}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-foreground group-hover:text-primary transition-colors">
                      Leer nota
                      <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="border-t border-border pt-16 mt-4 text-muted-foreground text-sm"
          >
            Más apariciones en medios próximamente.
          </motion.div>
        </div>
      </div>
    </main>
  );
}