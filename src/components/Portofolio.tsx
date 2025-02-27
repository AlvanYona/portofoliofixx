import Image from "next/image";
import { FC } from "react";

const Portofolio = () => {
  return (
    <section className="flex flex-col items-center justify-center m-10 p-6 gap-10">
      <div>
        <div className="flex justify-center items-center my-10">
          <h1 className="text-4xl font-[500]">Portofolio</h1>
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
            title="CSS"
            description="CSS digunakan untuk mendesain tampilan dan layout halaman web."
            image="/css.png"
          />
        </div>
        <div>
          <Card1
            title="JavaScript"
            description="JavaScript adalah bahasa pemrograman untuk menambahkan interaktivitas ke dalam web."
            image="/javascrpt.png"
          />
        </div>
        <div>
          <Card1
            title="HTML"
            description="HTML adalah bahasa markup untuk membuat struktur halaman web."
            image="/html.png"
          />
        </div>
        <div>
          <Card1
            title="Next.JS"
            description="Next.js adalah framework React yang sangat powerful!"
            image="/nextjs.png"
          />
        </div>
        <div>
          <Card1
            title="REACT"
            description="React adalah library JavaScript untuk membangun antarmuka pengguna yang interaktif."
            image="/react.png"
          />
        </div>
        <div>
          <Card1
            title="NODE.JS"
            description="Node.js adalah runtime JavaScript untuk menjalankan kode di sisi server."
            image="/node.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Portofolio;

interface PortoProps {
  title: string;
  description: string;
  image: string;
}

export const Card1: FC<PortoProps> = ({ title, description, image }) => {
  return (
    <div>
      <div className="bg-[#FFB400]  group relative w-80 h-72 bg-white flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden shadow-[0_20px_30px_rgba(0,0,0,0.9)]">
        <Image
          src={image}
          alt="icon1"
          width={68}
          height={68}
          className="w-56 h-56 bg-white mt-3 rounded-full border-4 border-none z-20 group-hover:scale-50 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex flex-col items-center text-center">
          <span className="text-2xl font-semibold">{title}</span>
          <p className="text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
