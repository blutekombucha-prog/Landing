"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ImageOff } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <main className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link
              href="/blog"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
            >
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

      <article className="pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 lg:mb-20"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Blog
            </p>
            <h1 className="font-sans font-semibold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-sm text-muted-foreground">Por {post.author}</p>
          </motion.div>

          <div className="space-y-6">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <motion.h2
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="font-sans font-semibold text-2xl lg:text-3xl text-foreground pt-8"
                  >
                    {block.text}
                  </motion.h2>
                );
              }

              if (block.type === "image") {
                return (
                  <motion.figure
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="my-4"
                  >
                    {block.src ? (
                      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-md">
                        <Image
                          src={block.src}
                          alt={block.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-[16/10] rounded-md border border-dashed border-border flex flex-col items-center justify-center gap-3 text-muted-foreground bg-muted/30">
                        <ImageOff className="w-6 h-6" />
                        <span className="text-sm text-center px-6">
                          Imagen pendiente — &ldquo;{block.alt}&rdquo;
                        </span>
                      </div>
                    )}
                  </motion.figure>
                );
              }

              if (block.linkText && block.linkHref) {
                const [before, after] = block.text.split(block.linkText);
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                    {before}
                    <Link href={block.linkHref} className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
                      {block.linkText}
                    </Link>
                    {after}
                  </p>
                );
              }

              return (
                <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                  {block.text}
                </p>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border mt-16 pt-10"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Sobre el autor
            </p>
            <p className="text-muted-foreground leading-relaxed">{post.authorBio}</p>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
