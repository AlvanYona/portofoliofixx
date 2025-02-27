import Image from "next/image";

const HeroSection = () => {
  return (
    <section className=" bg-white px-4 py-20 shadow-[0_20px_30px_rgba(0,0,0,0.9)] ">
      <div className="container m-auto ">
        <div className="grid grid-cols-2">
          {/* kol1 */}
          <div className="space-y-5 flex flex-col item-center p-[50px]">
            {" "}
            {/* klo di chakra mirip sama gridItem */}
            {/* title */}
            <p className="text-xl font-semibold md:text-5xl flex flex-col ">
              {" "}
              I'm Alvan Yona <br />
              <span className="text-[#FFB400]">Front-end</span> Developer
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            
            <button className="relative flex items-center px-6 py-3 w-32 overflow-hidden font-medium transition-all bg-yellow-300 rounded-md group ">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-400 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-400 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-yellow-500 rounded-md group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-black">
                Hire Me
              </span>
            </button>
          </div>
          {/* kol2 */}

          <div>
            <div className="relative h-[500px] w-full">
              <Image
                src="/contoh.png"
                alt="person-profile-pic"
                objectFit="contain"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
