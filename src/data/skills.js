import htmlIcon from "../assets/skillsSVG/html.svg";
import cssIcon from "../assets/skillsSVG/css.svg";
import javascriptIcon from "../assets/skillsSVG/javascript.svg";
import typescriptIcon from "../assets/skillsSVG/typescript.svg";
import tailwindIcon from "../assets/skillsSVG/tailwind.svg";
import angularIcon from "../assets/skillsSVG/angular.svg";
import reactIcon from "../assets/skillsSVG/react.svg";
import nodejsIcon from "../assets/skillsSVG/nodejs.svg";
import dotnetIcon from "../assets/skillsSVG/dotnet.svg";
import sqlServerIcon from "../assets/skillsSVG/sql-server.svg";
import mysqlIcon from "../assets/skillsSVG/mysql.svg";
import githubIcon from "../assets/skillsSVG/github.svg";
import figmaIcon from "../assets/skillsSVG/figma.svg";

// Import missing SVGs as PNGs from existing assets
import cLang from '../assets/images/skills/C.png';
import csharp from '../assets/images/skills/csharp.png';
import java from '../assets/images/skills/java.png';
import python from '../assets/images/skills/python.png';
import django from '../assets/images/skills/django.jpeg';
import bootstrap from '../assets/images/skills/bootstrap.png';
import canvas from '../assets/images/skills/canvas.avif';
import powerbi from '../assets/images/skills/powerbi.png';


const skills = [
    {
        title: "Frontend",
        stack: [
            {
                name: "HTML5",
                icon: htmlIcon,
                description: "Semantic markup for the web.",
                libraries: ["HTML5 Boilerplate"],
            },
            {
                name: "CSS3",
                icon: cssIcon,
                description: "Styling and layout for web pages.",
                libraries: ["Sass", "Flexbox", "Grid"],
            },
            {
                name: "JavaScript",
                icon: javascriptIcon,
                description: "Dynamic programming language for web.",
                libraries: ["ES6+", "Async/Await"],
            },
            {
                name: "TypeScript",
                icon: typescriptIcon,
                description: "Typed superset of JavaScript.",
                libraries: ["Interfaces", "Generics"],
            },
            {
                name: "React.js",
                icon: reactIcon,
                description: "Library for building user interfaces.",
                libraries: ["Redux", "Hooks", "Context API"],
            },
            {
                name: "Angular",
                icon: angularIcon,
                description: "Platform for building mobile and desktop web applications.",
                libraries: ["RxJS", "NgRx"],
            },
            {
                name: "Bootstrap",
                icon: bootstrap,
                description: "CSS framework for responsive design.",
            },
            {
                name: "Tailwind CSS",
                icon: tailwindIcon,
                description: "Utility-first CSS framework.",
            },
        ],
    },
    {
        title: "Backend",
        stack: [
            {
                name: "C",
                icon: cLang,
                description: "General-purpose programming language.",
            },
            {
                name: "C#",
                icon: csharp,
                description: "Modern, object-oriented, and type-safe programming language.",
            },
            {
                name: "Java",
                icon: java,
                description: "High-level, class-based, object-oriented programming language.",
            },
            {
                name: "Python",
                icon: python,
                description: "Interpreted, high-level, general-purpose programming language.",
            },
            {
                name: "Node.js",
                icon: nodejsIcon,
                description: "JavaScript runtime built on Chrome's V8 engine.",
            },
            {
                name: ".NET",
                icon: dotnetIcon,
                description: "Free, cross-platform, open source developer platform.",
            },
            {
                name: "Django",
                icon: django,
                description: "High-level Python web framework.",
            },
        ]
    },
    {
        title: "Database",
        stack: [
            {
                name: "MySQL",
                icon: mysqlIcon,
                description: "Open-source relational database management system.",
            },
            {
                name: "SQL Server",
                icon: sqlServerIcon,
                description: "Microsoft's relational database management system.",
            },
        ],
    },
    {
        title: "Tools & Designing",
        stack: [
            {
                name: "GitHub",
                icon: githubIcon,
                description: "Platform for version control and collaboration.",
            },
            {
                name: "Figma",
                icon: figmaIcon,
                description: "Vector graphics editor and prototyping tool.",
            },
            {
                name: "Canvas",
                icon: canvas,
                description: "Graphic design platform.",
            },
            {
                name: "Power BI",
                icon: powerbi,
                description: "Business analytics service by Microsoft.",
            },
        ],
    },
];

export default skills;
