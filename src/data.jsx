import { nanoid } from 'nanoid'
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaSass, // Sass
  FaBootstrap,
} from 'react-icons/fa'

import {
  SiCsharp,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiJquery,
} from 'react-icons/si'

import portfolioImg from './assets/portfolio1.png'
import jobify from './assets/jobify.png'
import cozy from './assets/cozy.png'
import simbrella from './assets/simbrella.png'
import augustine from './assets/augustine.png'
import githubUser from './assets/githubuser.png'
import weatherMap from './assets/weathermap.png'
import colorGen from './assets/colorgn.png'
import todoList from './assets/todolist.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className="h-16 w-16 text-red-600" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className="h-16 w-16 text-yellow-400" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    icon: <FaBootstrap className="h-16 w-16 text-violet-500" />,
    text: 'Proficient in Bootstrap, a CSS framework, to rapidly build responsive and visually appealing web applications.',
  },
  {
    id: nanoid(),
    title: 'Sass',
    icon: <FaSass className="h-16 w-16 text-pink-500" />,
    text: 'Proficient in Sass (Syntactically Awesome Style Sheets), a CSS preprocessor, to write clean and maintainable CSS code with features like variables, nesting, and mixins.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-cyan-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className="h-16 w-16 text-cyan-300" />,
    text: 'Proficient in Tailwind CSS, a utility-first CSS framework, to streamline and expedite web development.',
  },
  {
    id: nanoid(),
    title: 'C#',
    icon: <SiCsharp className="h-16 w-16 text-violet-500" />,
    text: 'Skilled in C#, a versatile programming language, to develop robust and efficient software applications.',
  },
  {
    id: nanoid(),
    title: 'MS SQL',
    icon: <SiMicrosoftsqlserver className="h-16 w-16 text-rose-500" />,
    text: 'Experienced in MS SQL, a relational database management system, to efficiently manage and query databases.',
  },
  {
    id: nanoid(),
    title: 'jQuery',
    icon: <SiJquery className="h-16 w-16 text-sky-500" />,
    text: 'Proficient in jQuery, a JavaScript library, to simplify DOM manipulation and enhance web interactivity.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: jobify,
    url: 'https://jobgenius.netlify.app/',
    github: 'https://github.com/coderseyfi/react-jobGenius-project',
    title: 'JobGenius',
    // text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: cozy,
    // url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/coderseyfi/CozyFinal',
    title: 'Cozy E-Commerce',
    // text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: portfolioImg,
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Personal Portfolio',
    // text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: simbrella,
    url: 'https://simbrella.vercel.app/',
    github: 'https://github.com/coderseyfi/Simbrella-Website',
    title: 'Simbrella Clone',
    // text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: augustine,
    url: 'https://exam-template.vercel.app/',
    github: 'https://github.com/coderseyfi/Exam-Template',
    title: 'Augustine',
    // text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: githubUser,
    url: 'https://githubuserapii.netlify.app/',
    github: 'https://github.com/coderseyfi/Js-FetchApi',
    title: 'Github User Api',
    // text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: weatherMap,
    url: 'https://weathermapbyme.netlify.app/',
    github: 'https://github.com/coderseyfi/WeatherMap',
    title: 'Weather Map',
    // text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: colorGen,
    url: 'https://color-generator-byme.netlify.app/',
    github: 'https://github.com/coderseyfi/react-color-generator',
    title: 'Color Generator',
    // text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: todoList,
    url: 'https://todoapp-byme.netlify.app/',
    github: 'https://github.com/coderseyfi/react-todo-app',
    title: 'Todo App',
    // text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
]
