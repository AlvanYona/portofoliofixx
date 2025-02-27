import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Portofolio from "@/components/Portofolio";

import Skill from "@/components/Skill";
import Sosmed from "@/components/Sosmed";

export default function Home() {
  return (
    <section className="container m-auto flex flex-col">
      <div className="bg-black">
        <Navbar />
      </div>

      <div>
        <div className="m-14 p-6 grow ">
          <HeroSection />
          <AboutMe />
          <Skill />
          <Portofolio />
        </div>
      </div>
      {/* <div>
        <Navbar />
      </div> */}
    </section>
  );
}
