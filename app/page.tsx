import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black-100 overflow-clip mx-auto sm:px-10 px-5 ">
      <div className="relative w-full max-w-7xl flex justify-center items-center flex-col">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/*<Skills />
        <Experience />
        <RecentProjects />*/}
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
