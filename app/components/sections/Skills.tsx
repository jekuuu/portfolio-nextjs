import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section className="h-[100vh] pt-12">
      <div className="flex mx-10">
        <div className="flex flex-col align-middle">
          <h2 className="text-5xl pt-40">Top Skills</h2>
          <div className="flex mt-12 gap-10">
            <Image
              src={"/images/react.png"}
              alt="React Logo"
              width={100}
              height={100}
              className="w-auto"
              objectFit="cover"
            />
            <Image
              src={"/images/next.png"}
              alt="React Logo"
              width={100}
              height={100}
              className="bg-white w-auto"
            />
            <Image
              src={"/images/redux.png"}
              alt="React Logo"
              width={100}
              height={100}
              className="w-auto"
            />
            <Image
              src={"/images/node.jpg"}
              alt="React Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
