import Image from "next/image";
import { FC } from "react";

const Profil = () => {
  return (
    <div className="hidden lg:fixed lg:left-0 lg:top-0  lg:w-[15%] lg:bg-white lg:text-[#FFB400] lg:flex lg:flex-col lg:items-center lg:py-4  ">
      <div className="flex flex-col gap-6 h-[100vh]">
        <div className=" py-3 flex flex-col rounded-md justify-center gap-10 h-[100vh]">
          <div className=" w-[100%] h-[80%] text-black p-4 flex flex-col items-start justify-center gap-3  ">
            <div className="w-full flex justify-center">
              <div className="relative h-[20vh] w-[20vh] rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/Alvan.jpg"
                  alt="person-profile-pic"
                  layout="fill"
                  objectFit="contain" // Pastikan pakai contain, bukan cover
                />
              </div>
            </div>

            <div className=" border-b border-gray-300">
              <p className="font-extrabold text-black">Alvan Yona</p>
              <p className="text-black">FRONT-END Depelover</p>
            </div>
            <div className="flex flex-col gap-1 w-full border-b border-gray-300   ">
              <div className="flex justify-between ">
                <p className="bg-[#ffb400]">Age: </p> <p>25</p>
              </div>
              <div className="flex justify-between">
                <p className="bg-[#ffb400]">Residen: </p> <p>25</p>
              </div>
              <div className="flex justify-between">
                <p className="bg-[#ffb400]">Freelance: </p>{" "}
                <p className="text-green-500">Aviable</p>
              </div>
              <div className="flex justify-between">
                <p className="bg-[#ffb400]">Adress: </p> <p>Semarang</p>
              </div>
            </div>
            <div className="w-full px-0">
              <div className="px-6 py-3 flex">
                <h3 className="text-zinc-900 dark:text-white text-lg">
                  My Progress
                </h3>
              </div>

              <div>
                <Progress
                  title="Front-End"
                  percen="80%"
                  description="80% Complete"
                />
              </div>
              <div>
                <Progress
                  title="Back-End"
                  percen="65%"
                  description="65% Complete"
                />
              </div>
              <div>
                <Progress
                  title="Full Stack"
                  percen="30%"
                  description="30% Complete"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;

interface ProgressProps {
  title: string;
  percen: string;
  description: string;
}

export const Progress: FC<ProgressProps> = ({ title, percen, description }) => {
  return (
    <div className="px-5 pb-5">
      <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">{title}</p>
      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2.5">
        <div className={`bg-[#ffb400] h-2.5 rounded-full`} style={{width: percen}}></div>
      </div>
      <div className="flex justify-between  items-center mt-3">
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </span>
      </div>
    </div>
  );
};
