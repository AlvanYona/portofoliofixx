import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Penutup from "@/components/Penutup";
import Portofolio from "@/components/Portofolio";
import Profil from "@/components/Profil";
import Reviews from "@/components/Reviews";

import Skill from "@/components/Skill";
import Sosmed from "@/components/Sosmed";

export default function Home() {
  return (
    <section className="container m-auto flex flex-row items-center justify-center">
      <div className="hidden md:block w-[15%]">
        <Profil />
      </div>

      <div className="flex flex-col items-center justify-center w-[80%] relative px-[2%]">
        <HeroSection />
        <AboutMe />
        <Skill />
        <Portofolio />
        <Experience />
        <Reviews />
        <Penutup />
      </div>

      <div className="w-[5%] relative">
        <Navbar />
      </div>
    </section>
  );
}
