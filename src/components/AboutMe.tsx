import Image from "next/image";
import { FC } from "react";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center justify-center m-10 p-6 gap-10">
      <div>
        <div className="flex justify-center items-center my-10">
          <h1 className="text-4xl font-[500]">About Me</h1>
        </div>
        <div className="text-center">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. <br />
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-20">
        <div>
          <Card1
            title="Back-End"
            description="Back-End adalah bagian dari aplikasi yang mengelola logika bisnis, database, dan server, memastikan data diproses dan dikirim ke Front-End menggunakan bahasa seperti Node.js, Python, atau PHP."
            image="/image.png"
          />
        </div>
        <div>
          <Card1
            title="Front-End"
            description="Front-End adalah bagian dari aplikasi yang berinteraksi langsung dengan pengguna, mencakup desain, antarmuka, dan pengalaman pengguna menggunakan teknologi seperti HTML, CSS, dan JavaScript."
            image="/front.png"
          />
        </div>
        <div>
          <Card1
            title="Key Value"
            description="Back-End adalah bagian dari aplikasi yang mengelola logika bisnis, database, dan server, memastikan data diproses dan dikirim ke Front-End menggunakan bahasa seperti Node.js, Python, atau PHP."
            image="/keyValue.png"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export const Card1: FC<CardProps> = ({ title, description, image }) => {
  return (
    <div>
      <div className="shadow-[0_20px_30px_rgba(0,0,0,0.9)]">
        <article className="flex w-[350px] flex-col items-start justify-between border-0 bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6  transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white  duration-500 ease-in-out ">
          <Image src={image} alt="icon1" width={68} height={68} />
          <div className="group relative">
            <h3 className="group-hover:text-red-500 mt-3 text-2xl font-black uppercase leading-6 text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-800">
              <a href="#">
                <span className="absolute inset-0 max-w-xs"></span>
                {title}
              </a>
            </h3>
            <p className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600">
              {description}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-2">
            <div className="text-sm leading-6">
              
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
