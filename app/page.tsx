import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}