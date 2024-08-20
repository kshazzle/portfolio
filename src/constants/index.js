import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  fidelity,
  IM,
  go,
  sql,
  redis,
  kafka,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "golang",
    icon: go,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "kafka",
    icon: kafka,
  },
  {
    name: "redis",
    icon: redis,
  },
];

const experiences = [
  {
    title: "Software Engineer - Intern",
    company_name: "Fidelity Inverstments",
    icon: fidelity,
    iconBg: "#383E56",
    date: "Jan 2022 - June 2022",
    points: [
      "💻 Developing and maintaining web applications using React.js and other related technologies.",
      "🤝 Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "📱 Implementing responsive design and ensuring cross-browser compatibility.",
      "🔍 Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer - I",
    company_name: "Infra.Market",
    icon: IM,
    iconBg: "#E6DEDD",
    date: "July 2022 - March 2023",
    points: [
      "📱 Developed a mobile app for contractors to track catalog browsing and loyalty, enhancing user engagement.",
      "🔍 Implemented a QR scanning system in the app for easy loyalty coin crediting, boosting user participation.",
      "🧩 Created a component library used across multiple internal apps, reducing development time and improving design consistency.",
      "⚡ Optimized the app to significantly reduce load times, improving user experience and retention.",
    ],
  },
  {
    title: "Software Engineer - II",
    company_name: "Infra.Market",
    icon: IM,
    iconBg: "#E6DEDD",
    date: "April 2023 - March 2024",
    points: [
      "🚀 Spearheaded the development of a powerful ticketing system to help CX teams, ASMs, and technicians quickly resolve customer complaints.",
      "🔄 Expanded the ticketing system to support HR, IT, and other departments, enhancing organizational efficiency.",
      "📱 Led the creation of a scalable mobile app for technicians, including the organization's first iOS app, boosting adoption.",
      "🌐 Enabled multi-language support in the app, significantly increasing user adoption across diverse demographics.",
      "🛠️ Implemented CI/CD processes and integrated observability tools, improving app stability and deployment efficiency.",
    ],
  },
];

const projects = [
  {
    name: "Job.ly",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
