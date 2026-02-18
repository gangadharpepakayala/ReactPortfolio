import { TbBrandCSharp } from "react-icons/tb";
import {
    SiReact,
    SiHtml5,
    SiCss3,
    SiPython,
    SiBootstrap,
    SiNodedotjs,
    SiSocketdotio,
    SiTailwindcss,
    SiAngular,
    SiDotnet,
    SiPostgresql,
} from "react-icons/si";

// Import existing project images
import portfolioImg from '../assets/images/projects/portfolio.png';
import carpentImg from '../assets/images/projects/carpent.png';
import ecommerceImg from '../assets/images/projects/ecommerce.png';
import netflixImg from '../assets/images/projects/netflix.jpeg';
import spotifyImg from '../assets/images/projects/Spotify.png';
import bingoImg from '../assets/images/projects/BingoGame.png';

const projects = [
    {
        image: bingoImg,
        title: "Bingo Game",
        description: "A Multiplayer Bingo Game Application featuring real-time gameplay.",
        stack: [
            { icon: TbBrandCSharp, name: "C#", color: "#239120" },
            { icon: SiAngular, name: "Angular", color: "#DD0031" },
            { icon: SiDotnet, name: ".NET", color: "#512BD4" },
            { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
        ],
        github: "https://github.com/gangadharpepakayala/BingoApp",
        live: "https://bingoappbyrock.netlify.app/",
        highlights: [
            "Real-time multiplayer functionality",
            "Interactive UI",
            "Socket.io for seamless communication"
        ]
    },
    {
        image: spotifyImg,
        title: "Spotify Clone",
        description: "Spotify Clone Website built using React.",
        stack: [
            { icon: SiReact, name: "React.js", color: "#61DBFB" },
            { icon: SiCss3, name: "CSS3", color: "#1572B6" },
        ],
        github: "https://github.com/gangadharpepakayala/Spotify-clone",
        live: "https://rocks-spotify-clone-app.netlify.app/",
        highlights: [
            "Music player interface",
            "Responsive design",
            "React-based component architecture"
        ]
    },
    {
        image: netflixImg,
        title: "Netflix Clone",
        description: "A simple Netflix Clone designed using HTML/CSS.",
        stack: [
            { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
            { icon: SiCss3, name: "CSS3", color: "#1572B6" },
        ],
        github: "https://github.com/gangadharpepakayala/NetflixClone",
        live: "https://flixnetflic.netlify.app",
        highlights: [
            "Static frontend clone",
            "Responsive grid layout",
            "CSS animations"
        ]
    },
    {
        image: ecommerceImg,
        title: "EcommerceApp",
        description: "A fully functional Ecommerce Application with cart and product management.",
        stack: [
            { icon: SiReact, name: "React.js", color: "#61DBFB" },
        ],
        github: "https://github.com/gangadharpepakayala/EcommerceApp",
        live: "https://ecommercepappp.netlify.app/",
        highlights: [
            "Product listing",
            "Cart functionality",
            "Responsive Design"
        ]
    },
    {
        image: carpentImg,
        title: "Homewoods",
        description: "A Carpentry web application for checking furniture and services.",
        stack: [
            { icon: SiPython, name: "Django", color: "#3776AB" },
            { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
        ],
        github: "https://github.com/gangadharpepakayala/Carpentry",
        live: "#",
        highlights: [
            "Furniture catalog",
            "Service request system"
        ]
    },
    {
        image: portfolioImg,
        title: "Portfolio Website",
        description: "My personal portfolio website showcasing my skills and projects.",
        stack: [
            { icon: SiReact, name: "React.js", color: "#61DBFB" },
            { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
        ],
        github: "https://github.com/gangadharpepakayala/GangadharPortfolio",
        live: "#bio",
        highlights: [
            "Responsive design",
            "Modern UI/UX",
            "Personal branding"
        ]
    },
];

export default projects;
