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
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. <br />
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7 md:grid grid-cols-3 gap-20">
        <div>
          <Card1
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
    interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
    est pulvinar aliquet. Nulla facilisi."
            image="/porto1.svg"
          />
        </div>
        <div>
          <Card1
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
    interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
    est pulvinar aliquet. Nulla facilisi."
            image="/porto2.svg"
          />
        </div>
        <div>
          <Card1
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
    interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
    est pulvinar aliquet. Nulla facilisi."
            image="/porto3.svg"
          />
        </div>
        <div>
          <Card1
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
    interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
    est pulvinar aliquet. Nulla facilisi."
            image="/porto4.svg"
          />
        </div>
        <div>
          <Card1
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
    interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
    est pulvinar aliquet. Nulla facilisi."
            image="/porto5.svg"
          />
        </div>
        <div>
          <Card1
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
    interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
    est pulvinar aliquet. Nulla facilisi."
            image="/porto6.svg"
          />
        </div>
        <div>
          <Card1
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
    interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
    est pulvinar aliquet. Nulla facilisi."
            image="/porto7.svg"
          />
        </div>
        <div>
          <Card1
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
    interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
    est pulvinar aliquet. Nulla facilisi."
            image="/porto8.svg"
          />
        </div>
        <div>
          <Card1
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
    interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
    est pulvinar aliquet. Nulla facilisi."
            image="/porto8.svg"
          />
        </div>
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
