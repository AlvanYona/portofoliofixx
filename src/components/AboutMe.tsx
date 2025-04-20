import Image from "next/image";
import { FC } from "react";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="flex flex-col items-center justify-center px-5 py-10 md:py-20 w-full">
      {/* Judul */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">About Me</h1>
        <p className="mt-4 max-w-lg text-gray-700">
        I am a creative Front-end developer who loves new things and is ready to learn the needs for the future.
        </p>
      </div>

      {/* Grid Card */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
        <Card1
          title="Back-End"
          description="Back-End is the part of the application that manages business logic, databases, and servers, ensuring data is processed and sent to the Front-End using languages ​​such as Node.js, Python, or PHP."
          image="/image.png"
        />
        <Card1
          title="Front-End"
          description="Front-End is the part of an application that interacts directly with the user, including design, interface, and user experience using technologies such as HTML, CSS, and JavaScript."
          image="/front.png"
        />
        <Card1
          title="Key Value"
          description="Key Value is a key-value pair based data storage concept widely used in NoSQL databases for fast and efficient access."
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
