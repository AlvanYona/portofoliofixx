import Image from "next/image";
import { FC } from "react";

const Portofolio = () => {
  return (
    <section
      id="Portofolio"
      className="flex flex-col items-center justify-center m-10 p-6 gap-10"
    >
      <div>
        <div className="flex justify-center items-center my-10">
          <h1 className="text-4xl font-[500]">Portofolio</h1>
        </div>
        <div className="text-center">
          <p>
            This is my another project using frontend dan backend. <br />
            please klik the website below
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7 md:grid grid-cols-3 gap-20">
        <a
          href="https://blogs-dun-pi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Card1
              description="Blog diatas saya buat saat saya untuk memenuhi tugas dari purwadhika untuk membuat
            blog yang meliputi coding front-end dan fetch API menggunakan backendless"
              image="/blogs.png"
            />
          </div>
        </a>
        <a
          href="https://company-profile-beige.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Card1
              description="Company profile diatas saya buat saat saya untuk memenuhi tugas dari purwadhika untuk membuat
            company profile yang meliputi coding front-end dan fetch API menggunakan backendless"
              image="/company.png"
            />
          </div>
        </a>
        <a
          href="https://minpro-jcwd-0610-fe.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Card1
              description="web event organizer ini saya buat dalam format tim yang terdiri 2 orang. website ini memiliki fitur untuk membeli tiket serta membuat event untuk organizer. ada 3 tipe user, organizer, dan admin"
              image="/webevent1.png"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Portofolio;

interface PortoProps {
  description: string;
  image: string;
}

export const Card1: FC<PortoProps> = ({ description, image }) => {
  return (
    <article className="w-72 bg-[#ffbf28] shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300">
      <Image
        src={image}
        alt="icon1"
        width={68}
        height={68}
        className="w-full h-full bg-white border-none  group-hover:scale-50 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"
      />
      <p className="text-sm w-full ">{description}</p>
    </article>
  );
};
