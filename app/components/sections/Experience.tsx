"use client";
import { experiences } from "@/app/constants";
import { IExperience } from "@/app/interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section className="md:pt-12 mx-auto" id="experience">
      <h2 className="text-5xl my-24 flex justify-center">Work Experience</h2>
      <VerticalTimeline>
        {experiences.map((experience: IExperience) => (
          <VerticalTimelineElement
            visible
            className="vertical-timeline-element--work"
            key={experience.id}
            contentStyle={{
              background: "#17161a",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.serviceTimeline}
            iconStyle={{ background: experience.iconBg }}
            icon={
              <motion.div
                className="flex justify-center items-center w-full h-full"
                initial={{ opacity: 0, scale: 0.1 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.7,
                  },
                }}
              >
                <Image
                  src={experience.companyLogo}
                  alt={experience.companyName}
                  width={5000}
                  height={5000}
                  quality={10}
                  className="w-[80%] h-[90%] object-contain"
                />
              </motion.div>
            }
          >
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: experience.id % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1.5, // Animation duration
                  type: "spring",
                  bounce: 0.6,
                },
              }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  {experience.designation}
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  {experience.companyName}
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
