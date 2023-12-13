import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="h-[100vh] pt-12">
      <div className="flex justify-center">
        <div className="flex flex-col align-middle">
          <h1 className="text-7xl pt-40">
            Hey, I&apos;m{" "}
            <span className="text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  hover:from-pink-500 hover:via-red-500 hover:to-yellow-500">
              Jekib Alam Haque
            </span>
          </h1>
          <h2 className="text-3xl pt-5 mt-5">Senior Front-End Engineer</h2>
          <a
            href="/resume/resume.pdf"
            download={"Jekib Alam Haque Resume.pdf"}
            className="mt-10 border p-5 shadow-lg w-48 hover:shadow-slate-500 hover:scale-105"
          >
            Download Resume
          </a>
          <div className="mt-10 flex gap-10">
            <Link
              href={"https://www.linkedin.com/in/jekibalamhaque/"}
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5" />
            </Link>
            <Link href={"https://github.com/jekuuu"} target="_blank">
              <FontAwesomeIcon icon={faGithub} className="w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
