"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="md:h-[70vh] mt-12 mx-7 grid grid-cols-12">
      <motion.div
        className="col-span-12 md:col-span-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5 },
          x: 0,
        }}
      >
        <Image
          src={"/images/profile.jpg"}
          alt="profile"
          width={3024}
          height={4032}
          quality={10}
          className="w-4/5 rounded-2xl shadow-2xl shadow-slate-700"
        />
      </motion.div>
      <motion.div
        className="col-span-12 md:col-span-8 mt-5 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, transition: { duration: 1.5 }, x: 0 }}
      >
        <motion.h2 className="text-5xl mb-5">About</motion.h2>
        <p>
          As a Senior Engineering Lead at Persistent Systems, I develop and
          design web applications for clients using cutting-edge technologies
          such as React, TypeScript. I collaborate with the US team for
          technical discussions and code reviews, and establish reusable
          components for code efficiency and future maintenance. I also
          implement unit tests for stability and bug reduction, and deploy the
          applications using Docker and Kubernetes.
        </p>
        <br />
        <p>
          I have over seven years of experience in web development, working with
          different JavaScript frameworks and libraries, such as React, Next,
          Redux, and Node. I have transitioned older web applications to
          microfrontends, developed APIs with Java Spring Boot, and overseen
          release management and PR validation pipelines. I have also
          contributed to test case creation, elevating test coverage to over
          90%, and addressed performance challenges and vulnerabilities in live
          applications. I hold a Bachelor of Engineering in Computer Science and
          Engineering from Gauhati University. I am passionate about creating
          user-friendly, scalable, and secure web solutions that meet the needs
          and expectations of the clients.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
