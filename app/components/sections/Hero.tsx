import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="h-[100vh] pt-12 mx-7">
      <div className="flex justify-center">
        <div className="flex flex-col">
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
            className="mt-10 border p-5 shadow-xl w-48 hover:shadow-slate-700 hover:scale-105 hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-900 hover:to-black"
          >
            Download Resume
          </a>
          <div className="mt-10 flex gap-10">
            <Link
              href={"https://www.linkedin.com/in/jekibalamhaque/"}
              target="_blank"
              aria-label="Jekib Alam Haque's LinkedIn Profile URL"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5" />
            </Link>
            <Link
              href={"https://github.com/jekuuu"}
              target="_blank"
              aria-label="Jekib Alam Haque's Github Profile URL"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
