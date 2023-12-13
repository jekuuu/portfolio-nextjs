import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="h-[100vh] pt-12">
      <div className="flex justify-center W-1/2">
        <div className="w-1/2">
          <Image
            src={"/images/profile.jpg"}
            alt="profile"
            width={3024}
            height={4032}
            quality={10}
            className="w-1/2 rounded-lg"
          />
        </div>
        <div>
          <p>
            As a Senior Engineering Lead at Persistent Systems, I develop and
            design web applications for clients using cutting-edge technologies
            such as React, TypeScript. I collaborate with the US team for
            technical discussions and code reviews, and establish reusable
            components for code efficiency and future maintenance. I also
            implement unit tests for stability and bug reduction, and deploy the
            applications using Docker and Kubernetes.
          </p>
          <p>
            I have over seven years of experience in web development, working
            with different JavaScript frameworks and libraries, such as React,
            Next, Redux, and Node. I have transitioned older web applications to
            microfrontends, developed APIs with Java Spring Boot, and overseen
            release management and PR validation pipelines. I have also
            contributed to test case creation, elevating test coverage to over
            90%, and addressed performance challenges and vulnerabilities in
            live applications. I hold a Bachelor of Engineering in Computer
            Science and Engineering from Gauhati University. I am passionate
            about creating user-friendly, scalable, and secure web solutions
            that meet the needs and expectations of the clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;