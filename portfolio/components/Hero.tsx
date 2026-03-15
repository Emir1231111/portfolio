"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-slate-950 opacity-90" />
      <div className="absolute top-0 left-1/2 h-full w-[110%] -translate-x-1/2 transform overflow-hidden">
        <div className="absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.6),transparent_65%)] blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.55),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 text-white md:flex-row md:items-center md:justify-between md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-widest text-white/80 shadow-lg shadow-black/20 backdrop-blur"
          >
            Fullstack developer • UI/UX entuzijast
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Fullstack Web Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-cyan-300">&amp; Dizajner</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-lg leading-relaxed text-white/80"
          >
            Gradim visokoperformantne web stranice i aplikacije s prekrasnim sučeljima, besprijekornim korisničkim iskustvom i skalabilnim kodom.
            Hajde da oživimo tvoj sljedeći projekt.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-purple-500/30 transition hover:brightness-110"
            >
              Pogledaj Projekte
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Kontaktiraj Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur md:max-w-md"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-white/60">Što gradim</p>
                <h2 className="text-2xl font-semibold text-white">Moderna Sučelja</h2>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 text-white shadow-lg shadow-purple-500/30">
                <span className="text-lg font-bold">✨</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Čiste front-end arhitekture, responzivni layouti i promišljene interakcije koje zadržavaju korisnike angažiranim na svim uređajima.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4 text-sm text-white/80 backdrop-blur">
                <p className="font-semibold text-white">Brzo &amp; Efikasno</p>
                <p className="mt-1 text-xs text-white/70">Optimizirane buildove, strategije keširanja i moderne obrasce za brzo učitavanje.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-sm text-white/80 backdrop-blur">
                <p className="font-semibold text-white">Skalabilni Kod</p>
                <p className="mt-1 text-xs text-white/70">Type-safe stackovi, reusable komponente i čitljiva arhitektura za dugoročno održavanje.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
