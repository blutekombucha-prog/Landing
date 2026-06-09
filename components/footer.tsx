"use client";

import Link from "next/link";

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/blute.patagonia" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61563348113980" },
  { name: "TikTok", href: "https://vm.tiktok.com/ZS9YD7AXQ2qQU-bvTSW/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/bl%C3%BCte/posts/?feedView=all" },
];

export function Footer() {
  return (
    <footer id="contacto" className="relative bg-foreground text-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl lg:text-4xl tracking-wide">
                BLÜTE
              </span>
            </Link>
            <p className="text-background/60 leading-relaxed max-w-sm mb-8">
              Kombucha de fermentación natural desde el corazón de la Patagonia argentina.
              Creada con el espíritu salvaje de Neuquén para acompañar tus rituales diarios.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/40 hover:text-background transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation — mismo orden que los tabs del header */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.3em] uppercase text-background/40 mb-6">
              Explorar
            </h4>
            <nav className="space-y-4">
              {[
                { name: "Filosofía", href: "#filosofía" },
                { name: "Sabores", href: "#sabores" },
                { name: "Patagonia", href: "#patagonia" },
                { name: "Blog", href: "/blog" },
                { name: "Prensa", href: "/prensa" },
                { name: "Contacto", href: "#contacto" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-background/70 hover:text-background transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Fundadores */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.3em] uppercase text-background/40 mb-6">
              Fundadores
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-background/90 font-medium">Lucas Arens</p>
                <p className="text-sm text-background/50">Lic. en Nutrición</p>
              </div>
              <div>
                <p className="text-background/90 font-medium">Mariano Cocco</p>
                <p className="text-sm text-background/50">Lic. en Comunicación</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.3em] uppercase text-background/40 mb-6">
              Contacto
            </h4>
            <div className="space-y-4 text-background/70 mb-6">
              <a href="mailto:blutekombucha@gmail.com" className="hover:text-background transition-colors duration-300">blutekombucha@gmail.com</a>
              <p>
                Neuquén, Patagonia
                <br />
                Argentina
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 text-xs tracking-widest uppercase border border-background/20 text-background/60 rounded-full">
                Envío Gratis
              </span>
              <span className="px-3 py-1 text-xs tracking-widest uppercase border border-background/20 text-background/60 rounded-full">
                Combinar sabores
              </span>
            </div>
            <div className="space-y-3">
              <a
                href="https://instagram.com/blute.patagonia"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-center text-sm tracking-widest uppercase bg-background text-foreground hover:bg-background/90 transition-colors duration-300"
              >
                Enviar mensaje
              </a>
              <a
                href="https://wa.me/542995248305?text=Hola!%20Quiero%20info%20sobre%20venta%20mayorista"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-center text-sm tracking-widest uppercase border border-background/30 text-background/70 hover:text-background hover:border-background transition-colors duration-300"
              >
                Mayorista
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-sm text-background/40">
            © 2024 BLÜTE Kombucha. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-background/40 hover:text-background transition-colors duration-300"
            >
              Términos
            </Link>
            <Link
              href="#"
              className="text-sm text-background/40 hover:text-background transition-colors duration-300"
            >
              Privacidad
            </Link>
          </div>
        </div>

        
      </div>
    </footer>
  );
}