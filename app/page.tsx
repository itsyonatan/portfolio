"use client"
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

export default function Home() {

  const [pending, setPending] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setPending(false)
    }, 700)
  })
  return (
    <main className="bg-black-100 overflow-clip mx-auto sm:px-10 px-5 ">
      {pending ? (
        <div className="relative w-full h-[100vh] flex justify-center items-center">
          <PuffLoader color="#4066ff"/>
        </div>) : (
        <div className="relative w-full max-w-7xl flex justify-center items-center flex-col">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Skills />
          <RecentProjects />
          <Experience />
          <Contact />
          <Footer />
        </div>)}
    </main>
  );
}
