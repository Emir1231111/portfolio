"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-12 top-0 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">O meni</p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >Stvaranje digitalnih iskustava kodom</motion.h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Ja sam fullstack developer koji voli povezivati dizajn i inženjering. Sa više od 6 godina iskustva u izgradnji web proizvoda, specijaliziran sam za stvaranje skalabilnih, korisnički orijentiranih aplikacija s okom na dotjerane interakcije.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid gap-8 md:grid-cols-2"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-white">U čemu sam specijaliziran</h3>
            <ul className="mt-6 space-y-4 text-white/70">
              <li>
                <span className="font-semibold text-white">End-to-end izgradnja proizvoda</span> — od dizajn sistema do API integracija.
              </li>
              <li>
                <span className="font-semibold text-white">Responzivna sučelja</span> — dotjerani layouti koji se prilagođavaju svakom uređaju.
              </li>
              <li>
                <span className="font-semibold text-white">Performanse &amp; pristupačnost</span> — brzo učitavanje i inkluzivna iskustva.
              </li>
              <li>
                <span className="font-semibold text-white">Kolaborativni razvoj</span> — kontrola verzija, code review i jasna dokumentacija.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: 0.1 } }
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-white">Moj pristup</h3>
            <p className="mt-6 text-white/70">
              Kombiniram moderne alate s product mindsetom. Svaki projekt započinje s korisničkim potrebama, prolazi kroz prototipe i iterativni razvoj, i završava s održivim, dokumentiranim kodom.
            </p>
            <p className="mt-4 text-white/70">
              Bilo da je riječ o pokretanju startupa ili osvježavanju postojeće platforme, fokusiram se na izgradnju pouzdanih rješenja koja skaliraju i oduševljavaju korisnike.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
