import Image from "next/image";
import { FC } from "react";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="flex flex-col items-center justify-center px-5 py-10 md:py-20 w-full">
      {/* Judul */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">About Me</h1>
        <p className="mt-4 max-w-lg text-gray-700">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
          Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>

      {/* Grid Card */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
        <Card1
          title="Back-End"
          description="Back-End adalah bagian dari aplikasi yang mengelola logika bisnis, database, dan server, memastikan data diproses dan dikirim ke Front-End menggunakan bahasa seperti Node.js, Python, atau PHP."
          image="/image.png"
        />
        <Card1
          title="Front-End"
          description="Front-End adalah bagian dari aplikasi yang berinteraksi langsung dengan pengguna, mencakup desain, antarmuka, dan pengalaman pengguna menggunakan teknologi seperti HTML, CSS, dan JavaScript."
          image="/front.png"
        />
        <Card1
          title="Key Value"
          description="Key Value adalah konsep penyimpanan data berbasis pasangan kunci-nilai yang banyak digunakan dalam database NoSQL untuk akses cepat dan efisien."
          image="/keyValue.png"
        />
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
    <div className="p-4 shadow-lg rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <article className="flex flex-col items-start justify-between">
        <Image src={image} alt={title} width={68} height={68} className="object-contain" />
        <h3 className="mt-3 text-xl font-bold uppercase leading-6 text-gray-900 transition-colors duration-300 hover:text-blue-600">
          {title}
        </h3>
        <p className="text-sm mt-4 border-l-4 border-yellow-500 pl-3 text-gray-700 transition-all duration-300 hover:border-blue-500 hover:text-gray-600">
          {description}
        </p>
      </article>
    </div>
  );
};
