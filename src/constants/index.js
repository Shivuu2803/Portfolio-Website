import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import project11 from "../assets/projects/project-11.png";
import project12 from "../assets/projects/project-12.png";
import project13 from "../assets/projects/project-13.png";

export const HERO_CONTENT =
  "with expertise in building responsive and user-friendly web applications. I thrive on turning ideas into reality by leveraging modern technologies, creating seamless experiences that engage and inspire users. Let's connect and collaborate to build something amazing!";

export const ABOUT_TEXT1 =
  "I'm a dedicated Full Stack Developer with a passion for crafting responsive and user-friendly web applications. My journey in tech has equipped me with a diverse skill set, allowing me to tackle challenges with creativity and efficiency.";

export const ABOUT_TEXT2 =
  "I thrive in collaborative environments and enjoy turning innovative ideas into reality. By leveraging modern technologies, I aim to create seamless experiences that engage and inspire users.";

export const ABOUT_TEXT3 =
  "Let’s connect and explore how we can build something amazing together, as I am always eager to learn from others and contribute to impactful projects.";

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information, designed with a modern aesthetic and smooth animations to enhance user experience while effectively highlighting expertise and accomplishments in software development.",
    technologies: ["TailwindCSS", "Javascript", "ReactJS"],
    github: "https://github.com/Shivuu2803/Portfolio-Website",
    hostedLink: "https://portfolio-website-one-kappa-63.vercel.app/",
    category: "frontend",
  },
  {
    title: "Real-time Chat App",
    image: project12,
    description:
      "This is a real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to communicate in real time with features such as authentication, chat rooms, and a responsive design.",
    technologies: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "Mongodb",
      "JWT",
      "socket.io",
    ],
    github: "https://github.com/Shivuu2803/Full-Stack-Chat-App",
    hostedLink: "https://full-stack-chat-app-n691.onrender.com/",
    category: "fullstack",
  },
  {
    title: "Voting Application-Backend",
    image: project13,
    description:
      "The Voting Application Backend is a Node.js and Express-based backend that allows users to securely cast votes for a given set of candidates. It ensures a fair voting process where each user can vote only once, and an admin manages the candidates. The application uses MongoDB as the database and supports authentication via an Aadhar card number and password.",
    technologies: ["NodeJS", "ExpressJS", "Mongodb","Postman"],
    github: "https://github.com/Shivuu2803/Voting-Application-Backend",
    hostedLink: "https://voting-application-backend-hvzy.onrender.com/",
    category: "backend",
  },
  {
    title: "Blog-Website",
    image: project2,
    description:
      "Developed a full-stack Blog App using the MERN stack, emphasizing user authentication, CRUD operations, state management, and responsive UI design. Integrated MongoDB for data persistence, Express.js and Node.js for server-side logic, and React for building a dynamic frontend interface.",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "Mongodb", "JWT"],
    github: "https://github.com/Shivuu2803/Blog-Website",
    category: "fullstack",
  },
  {
    title: "Product API",
    image: project4,
    description:
      "Developed a product API using Node.js, enabling CRUD operations for managing product data. Focused on building RESTful endpoints, efficient data handling, and backend logic. Followed best practices in API design to ensure scalability and seamless integration with frontend applications.",
    technologies: ["NodeJS", "ExpressJS", "Mongodb", "REST API", "Postman"],
    github: "https://github.com/Shivuu2803/ProductApi",
    hostedLink: "https://productapi-production-af22.up.railway.app/",
    category: "backend",
  },
  {
    title: "Employee-Management-System",
    image: project1,
    description:
      "An Employee Management System (EMS) built with React, featuring separate dashboards for admin and employee management. The application utilizes local storage for data persistence and employs Tailwind CSS for a professional, responsive design. This project highlights my ability to develop functional web applications that meet organizational requirements.",
    technologies: [
      "ReactJS",
      "Local Storage",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
    github: "https://github.com/Shivuu2803/Employee-Management-System",
    hostedLink:
      "https://vercel.com/api/toolbar/link/employee-management-system-rose-one.vercel.app?via=project-dashboard-alias-list&p=1&page=/",
    category: "frontend",
  },
  {
    title: "Dice Game",
    image: project5,
    description:
      "Dice Game is a web-based, two-player game where players roll dice to reach a target score. It features alternating turns, score tracking, and a risk element where rolling double six resets the player's score to zero, highlighting essential skills in game logic and interactive web development.",
    technologies: ["ReactJS", "CSS"],
    github: "https://github.com/Shivuu2803/Dice-Game",
    hostedLink: "https://dice-game-pi-three.vercel.app/",
    category: "frontend",
  },

  {
    title: "Gemini 2.0",
    image: project6,
    description:
      "Developed Gemini 2.0, a React-based clone of the Gemini protocol with a redesigned user interface, integrating Gemini API for enhanced functionality. Leveraged React components, state management, and responsive design to ensure seamless navigation and interactive user experience, while integrating real-time data from Gemini API to provide dynamic content.",
    technologies: ["CSS", "ReactJS"],
    github: "https://github.com/Shivuu2803/Gemini-2.0",
    hostedLink: "https://gemini-20-shivansh-mishra-s-projects.vercel.app/",
    category: "frontend",
  },
  {
    title: "Myfit App",
    image: project9,
    description:
      "Developed myFit-App using React Native, focusing on cross-platform fitness tracking, intuitive user interfaces, seamless navigation, and best practices in state management and API integration.",
    technologies: ["TailwindCSS", "React-Native"],
    github: "https://github.com/Shivuu2803/myFit-App",
    category: "frontend",
  },
  {
    title: "Currency Converter",
    image: project11,
    description:
      "Currency Converter is a web tool for real-time currency conversion, featuring a simple interface and instant results. It highlights skills in API integration and practical financial application design.",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Shivuu2803/Currency-Converter-",
    hostedLink: "https://shivuu2803.github.io/Currency-Converter-/",
    category: "frontend",
  },
  {
    title: "Simon Game",
    image: project8,
    description:
      "A fun Simon Game incorporating HTML audio for an engaging user experience, implementing sound sequences, and designing an intuitive interface to deliver an entertaining web app with enhanced gameplay and sound.",
    technologies: ["HTML", "CSS", "Javascript", "jQuery"],
    github: "https://github.com/Shivuu2803/Simon-Game-FrontEnd-",
    category: "frontend",
  },
  {
    title: "Drum Kit",
    image: project7,
    description:
      "Drum Kit is an interactive web-based project that allows users to play different drum sounds by pressing corresponding keys on the keyboard or clicking on-screen buttons. The project showcases the integration of sound effects with user interactions, creating a fun and engaging experience for practicing event handling and multimedia in web development.",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Shivuu2803/Drum-Kit-FrontEnd-",
    category: "frontend",
  },
  {
    title: "Empower-U",
    image: project10,
    description:
      "EmpowerU is a digital platform for personal and professional growth, offering tailored learning experiences. It uses agile methods and user feedback to create a user-focused solution, helping individuals achieve their goals and enhance their well-being.",
    technologies: ["Canva", "Figma", "Product Development", "UI/UX Designing"],
    canva:
      "https://www.canva.com/design/DAF7RtHdrzA/Ljk31IqjAGABgAsrGXBoow/edit?utm_content=DAF7RtHdrzA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    category: "design",
  },
];

export const CONTACT = {
  address: "D-36 Mansarovar Colony, Moradabad",
  phoneNo: "+91-7906676220 ",
  email: "shivanshmishradpsmbd@gmail.com",
};
