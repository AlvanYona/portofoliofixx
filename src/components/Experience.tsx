import React from "react";

const Experience = () => {
  const jobExperiences = [
    {
      title: "CIMB Niaga finance",
      dates: "August 2023 - Present",
      roles: [
        {
          title: "Marketing",
          description:
            "Dedicated to ensuring a positive experience in delivering solutions and building lasting customer relationships with efficient and get deal with customers",
        }, 
      ],
    },
    {
      title: "BFI Finance",
      dates: "April 2021 - September 2023",
      roles: [
        {
          title: "Team Leader",
          description:
            "Oversee the operational of refund team to ensure the fulfillment of targets from client",
        },
        {
          title: "Quality Analyst",
          description:
            "Conducting performance analyses of debitur quality loan",
        },
        
      ],
    },
  ];

  return (
    <section id="Experience" className="py-16 px-5 md:px-24 bg-gray-50">
      {/* Judul */}
      <div className="text-center mb-10">
        <p className="text-lg text-gray-700">Experience</p>
        <h1 className="text-3xl font-semibold">Professional Work History</h1>
      </div>

      {/* Kontainer Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bagian Kiri - Nama Perusahaan dan Tanggal */}
        <div>
          {jobExperiences.map((job, index) => (
            <div key={index} className="text-center md:text-right mb-10">
              <h1 className="text-lg font-semibold">{job.title}</h1>
              <time className="text-sm text-gray-500">{job.dates}</time>
            </div>
          ))}
        </div>

        {/* Bagian Kanan - Detail Pekerjaan */}
        <div>
          <ul className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-5">
            {jobExperiences.map((job) =>
              job.roles.map((role, roleIndex) => (
                <li key={roleIndex} className="mb-10 relative">
                  <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                  <h3 className="text-lg font-semibold ml-4 text-gray-900 dark:text-white">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {role.description}
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
