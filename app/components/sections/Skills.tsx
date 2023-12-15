import { technologies } from "@/app/constants";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="h-[40vh] mt-20 md:mt-48 lg:mt-24 flex mx-10 justify-center flex-col align-middle">
      <h2 className="text-5xl mb-3">Skills</h2>
      <div className="mt-12 grid grid-cols-12">
        {technologies.map((technology) => (
          <div key={technology.id} className="col-span-3 md:col-span-1">
            <Image
              src={technology.icon}
              alt={technology.name}
              width={90}
              height={90}
              className="w-20 md:w-20"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
