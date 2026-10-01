import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <ProjectsGrid />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
