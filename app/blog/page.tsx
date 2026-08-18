"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

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
            <Link href="/" className="relative z-10">
              <Image
                src="/logosinbg.png"
                alt="BLÜTE"
                width={120}
                height={40}
                className="h-14 lg:h-16 w-auto object-contain"
              />
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
              Blog
            </p>
            <h1 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-foreground max-w-3xl text-balance leading-tight">
              Notas de Blüte
            </h1>
          </motion.div>

          {blogPosts.length > 0 ? (
            <div className="space-y-0">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col lg:flex-row lg:items-center gap-6 py-10 border-t border-border hover:border-foreground/30 transition-colors duration-300"
                  >
                    {post.coverImage && (
                      <div className="flex-shrink-0 w-full lg:w-40 aspect-square overflow-hidden rounded-md">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 flex flex-col gap-4">
                      <h2 className="font-sans font-semibold text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm font-semibold text-muted-foreground -mt-2">
                        Por {post.author}
                      </p>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-foreground group-hover:text-primary transition-colors">
                        Leer nota
                        <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </main>
  );
}