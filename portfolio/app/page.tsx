import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { TechStack } from "../components/TechStack";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Services />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-white/60 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Emir Kolasinac. Izgrađeno s Next.js, Tailwind CSS i Framer Motion.</p>
          <p className="text-xs text-white/40">Dizajnirano za premium, moderno developersko portfolio iskustvo.</p>
        </div>
      </footer>
    </div>
  );
}
