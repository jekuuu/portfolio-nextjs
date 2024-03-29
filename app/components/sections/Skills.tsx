"use client";
import { technologies } from "@/app/constants";
import { ITechnology } from "@/app/interfaces";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="h-[40vh] mt-20 md:mt-48 lg:mt-24 flex mx-10 justify-center flex-col align-middle">
      <motion.h2
        className="text-5xl mb-3"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
          },
        }}
      >
        Skills
      </motion.h2>
      <div className="mt-12 grid grid-cols-12">
        {technologies.map((technology: ITechnology) => (
          <motion.div
            key={`tech-${technology.id}`}
            className="col-span-3 md:col-span-1 cursor-pointer"
            whileHover={{
              scale: 1.3,
              transition: { duration: 0.5 },
            }}
          >
            <Image
              src={technology.icon}
              alt={technology.name}
              width={90}
              height={90}
              className="w-20 md:w-20"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
