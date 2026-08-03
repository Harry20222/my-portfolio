import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Activities from '@/components/Activities';
import ProjectsGrid from '@/components/ProjectsGrid';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#2f2f2f] selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <Hero />
      <Activities />
      <ProjectsGrid />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
