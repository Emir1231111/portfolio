"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-14 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-indigo-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Stupi u kontakt</p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >Hajde da izgradimo nešto veliko zajedno</motion.h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Podijeli svoju ideju ili projekt i javit ću ti se unutar 1-2 radna dana. Radujem se što ću čuti od tebe.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid gap-10 lg:grid-cols-2"
        >
          <motion.form
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur"
          >
            <div className="grid gap-6">
              <div>
                <label className="text-sm font-semibold text-white/80" htmlFor="name">
                  Ime
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder="Tvoje ime"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white/80" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder="ti@primjer.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white/80" htmlFor="message">
                  Poruka
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder="Reci mi nešto o svom projektu..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-purple-500/30 transition hover:brightness-110"
              >
                Pošalji poruku
              </button>

              {submitted ? (
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/80">
                  Hvala na javljanju! Odgovorit ću ti što je prije moguće.
                </div>
              ) : null}
            </div>
          </motion.form>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur"
          >
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Poveži se sa mnom</h3>
                <p className="mt-3 text-white/70">Slobodno mi se javi putem emaila ili prati moje društvene mreže za najnovija ažuriranja.</p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 text-black">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  hello@example.com
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 text-black">
                    <GithubIcon className="h-5 w-5" />
                  </span>
                  GitHub
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 text-black">
                    <LinkedInIcon className="h-5 w-5" />
                  </span>
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
