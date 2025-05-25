// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import genai from './assets/tech_logo/genai.png';

// Education Section Logo's
import aotLogo from './assets/education_logo/aot_logo.png';
import ggpsLogo from './assets/education_logo/ggps_logo.png';

// Project Section Logo's
import portfolio from './assets/work_logo/portfolio.png';
import quiz from './assets/work_logo/quiz.png';
import sculpit from './assets/work_logo/sculpit.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'AI/ML',
    skills: [
      { name: 'GenAI', logo: genai },
      { name: 'LLM', logo: genai },
      { name: 'Clustering', logo: genai },
      { name: 'Skyline', logo: genai },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: aotLogo,
      school: "Academy of Technology, Hooghly, West bengal",
      date: "Sept 2022 - Ongoing",
      grade: "8.28/10 (Upto 5th sem)",
      desc: "I am currently pursuing my B. Tech in Computer Science & Engineering from Academy of Technology, Hooghly, West Bengal. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "B. Tech (Computer Science & Engineering)",
    },
    {
      id: 1,
      img: ggpsLogo,
      school: "Guru Gobind Singh Public School, Bokaro",
      date: "2021-2022",
      grade: "92.8%",
      desc: "I completed my class 12 education from Guru Gobind Singh Public School, Bokaro, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: ggpsLogo,
      school: "Guru Gobind Singh Public School, Bokaro",
      date: "2019-2020",
      grade: "90.8%",
      desc: "I completed my class 10 education from Guru Gobind Singh Public School, Bokaro, under the CBSE board, where I studied Science with IT.",
      degree: "CBSE(X), Science with Information Technology",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Portfolio Website",
      description:
        "This is my personal portfolio website built using React and Vite to showcase my skills, projects, and experience. It features a clean, responsive design powered by Tailwind CSS for a modern UI. Visitors can explore my work, learn about my background, and contact me via a dynamic form. The site reflects my journey as a full-stack developer with a focus on performance and interactivity.",
      image: portfolio,
      tags: ["React JS", "HTML", "CSS", "Tailwind", "JavaScript"],
      github: "https://github.com/ankit1018/Portfolio",
      webapp: "https://akportfolio04.vercel.app/",
    },
    {
      id: 1,
      title: "SculpIt: A React Note making App",
      description:
        "This is a React-based note-making app featuring smooth animations for enhanced user experience. It includes a dark mode toggle with persistent theming using localStorage. Users can create, edit, and manage notes with ease. The app showcases responsive design and modern UI techniques. It also has a start screen.",
      image: sculpit,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ankit1018/SculpIt-A-React-Note-Making-App",
      webapp: "https://sculpit.vercel.app/",
    },
    {
      id: 2,
      title: "Quiz App with timer",
      description:
        "This is a vibrant and elegant Quiz App built using HTML, CSS, and JavaScript. It features a countdown timer for each question to enhance engagement. The UI is colorful and interactive, offering a smooth and enjoyable user experience. Scores are tracked, and feedback is provided instantly.",
      image: quiz,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ankit1018/Quiz-App-with-timer",
      webapp: "https://ankit1018.github.io/Quiz-App-with-timer/",
    },
  ];  