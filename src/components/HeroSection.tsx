"use client";

import { sendGAEvent } from "@/utils/google-analytics";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="Hero"
      className=" bg-white  px-4 py-10 md:py-20 shadow-lg w-full"
    >
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-full items-center gap-8">
        {/* Kolom 1 - Teks */}
        <div className="space-y-5 flex flex-col items-center md:items-start text-center md:text-left p-5 md:p-[50px]">
          <p className="text-2xl font-semibold md:text-5xl leading-tight">
            I'm <span className="text-[#FFB400]">Alvan Yona</span>
            <br />
            <span className="text-[#FFB400]">Front-end</span> Developer
          </p>

          <p className="text-gray-600 text-sm md:text-base">
            Iam a junior front-end developer with a passion for creating
            visually stunning and user-friendly websites. I ready for join Fulltime job as junior front-end or intership.
          </p>

          <a href="https://wa.me/6281225226871">
            <button
              onClick={() =>
                sendGAEvent(
                  "Cara ngoding jago",
                  "Cara ngoding jago",
                  "iuhgyihadsjopk"
                )
              }
              className="relative flex items-center justify-center px-6 py-3 w-40 overflow-hidden font-medium transition-all bg-yellow-300 rounded-md group"
            >
              <span className="absolute top-0 right-0 w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-400 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-400 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-yellow-500 rounded-md group-hover:translate-x-0"></span>
              <span className="relative w-full text-center text-black transition-colors duration-200 ease-in-out group-hover:text-black">
                Hire Me
              </span>
            </button>
          </a>
        </div>

        {/* Kolom 2 - Gambar */}
        <div className="w-full flex justify-center">
          <div className="relative h-[30vh] w-[30vh] md:h-[50vh] md:w-[50vh] rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/Alvan.jpg"
              alt="person-profile-pic"
              layout="fill"
              objectFit="contain" // Pastikan pakai contain, bukan cover
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
