import { IExperience, ITechnology } from "../interfaces";

export const apiEndpoint: string = "/api/email";

export const technologies: ITechnology[] = [
  { id: 1, name: "React JS", icon: "/images/tech/react.png" },
  { id: 2, name: "Redux Toolkit", icon: "/images/tech/redux.png" },
  { id: 3, name: "JavaScript", icon: "/images/tech/javascript.png" },
  { id: 4, name: "TypeScript", icon: "/images/tech/typescript.png" },
  { id: 5, name: "Node JS", icon: "/images/tech/nodejs.png" },
  { id: 6, name: "HTML 5", icon: "/images/tech/html.png" },
  { id: 7, name: "Tailwind CSS", icon: "/images/tech/tailwind.png" },
  { id: 8, name: "CSS 3", icon: "/images/tech/css.png" },
  { id: 9, name: "Git", icon: "/images/tech/git.png" },
  { id: 10, name: "Docker", icon: "/images/tech/docker.png" },
  { id: 11, name: "Webpack", icon: "/images/tech/webpack.png" },
  { id: 12, name: "Kubernetes", icon: "/images/tech/kubernetes.png" },
];

export const experiences: IExperience[] = [
  {
    id: 1,
    designation: "Lead Experience Engineer",
    companyName: "Publicis Sapient (Client- Optum)",
    companyLogo: "/images/companies/publicis-sapient.webp",
    iconBg: "#FFF",
    serviceTimeline: "Apr 2024 - Present",
    achievements: [
      "Participated in training sessions covering Next.js, GraphQL, and NFRs related to Performance and Accessibility.",
      'Received a Certificate of Achievement upon completing the "NFR Web Specialist L1" learning program, gaining essential skills in NFR Fundamentals such as Performance, Accessibility, Security, and SEO.',
      "Participated in a three-week instructor-led training program for React Native and developed a capstone project.",
    ],
  },
  {
    id: 2,
    designation: "Senior Engineering Lead",
    companyName: "Peristent Systems (Client- Wayfair)",
    companyLogo: "/images/companies/persistent.png",
    iconBg: "#FFF",
    serviceTimeline: "Feb 2023 - December 2023",
    achievements: [
      "Created an in-house web application that allows the client to configure A/B testing and access corresponding reports all within a single interface.",
      "Designed the UI with React, Typescript, and Sass based on Figma mocks",
      "Collaborated with the US team for tech discussions and code reviews",
      "Established reusable components for code efficiency and future maintenance",
      "Implemented unit tests for stability and bug reduction",
      "Provided mentorship to junior team members, conducted code reviews, and offered guidance and support to help them grow and improve",
    ],
  },
  {
    id: 3,
    designation: "Associate",
    companyName: "MSCI (Morgan Stanley Capital International)",
    companyLogo: "/images/companies/msci.png",
    iconBg: "#FFF",
    serviceTimeline: "July 2021 — November 2022",
    achievements: [
      "Transitioned older web applications to Microfrontends using React JS, Typescript, Nx and Sass",
      "Developed APIs for the frontend with Java Spring Boot",
      "Oversaw Azure deployment, release management, and PR validation pipelines",
      "Deployed the app by containerizing it with Docker and running it on a Kubernetes Cluster",
      "Utilized d3.js to create various charts and graphs for different indices",
    ],
  },
  {
    id: 4,
    designation: "Senior Associate Technology",
    companyName: "Synechron (Client- HSBC)",
    iconBg: "#FFF",
    companyLogo: "/images/companies/synechron.png",
    serviceTimeline: "November 2019 — July 2021",
    achievements: [
      "Transformed HSBC's outserviceTimelined Trade Finance application into a contemporary web app with React JS, Redux, and Node JS",
      "Established and maintained a shared component library using Storybook, utilized companyName-wide",
      "Addressed performance challenges in the live application",
      "Conducted triage sessions with the CGI backend and HSBC China's testing teams",
      "Managed deployments across various environments via Jenkins",
      "Rectified Sonar and Whitesource vulnerabilities",
      "Contributed to test case creation, elevating test coverage to over 90%",
    ],
  },
  {
    id: 5,
    designation: "Senior Consultant",
    companyName: "Alchemy Techsol (Client- Allstate)",
    iconBg: "#FFF",
    companyLogo: "/images/companies/alchemy.jpg",
    serviceTimeline: "March 2019 — November 2019",
    achievements: [
      "Created a web application tailored for car dealers throughout the United States, utilizing React JS, Redux, and Bootstrap",
      "Designed it responsively for cross-device compatibility with minimal adjustments",
      "Constructed backend APIs with .NET Core to retrieve data from Microsoft SQL Server",
      "Incorporated download options for data in Excel and PDF formats",
      "Authored stored procedures for retrieving insurance product rates",
    ],
  },
  {
    id: 6,
    designation: "Associate Consultant",
    companyName: "Capgemini",
    iconBg: "#FFF",
    companyLogo: "/images/companies/capgemini.png",
    serviceTimeline: "April 2016 — March 2019",
    achievements: [
      "Contributed to the development of web APIs for the system using .NET Core",
      "Deployed these APIs to Azure AppService and conducted thorough testing using tools such as Postman and Swagger,as well as authoring unit test cases",
      "Designed the entire application's user interface (using WPF), integrating various tools and accelerators to enhance delivery speed within an agile development model",
      "For specific submodules, I applied the MVVM (Model-View-ViewModel) architectural pattern",
      "Focused on a module for quick code generation from templates. Additionally, I leveraged Service Fabric to construct a microservices-based application, with the UI developed using React JS",
      "Participated in a hackathon in 2018, where I crafted a winning dashboard app using React JS, securing second place",
      "Completed a 3-month training program in Java development, during which I created the UI using Spring and Angular.js",
      "I also contributed to a cart management module and received training in Blueprism Automation Software",
    ],
  },
];
