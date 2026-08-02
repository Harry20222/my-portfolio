import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import Activities from '@/components/Activities';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <Activities />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
