import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  pyIcon,
  nodeIcon,
  android,
  interclima,
  smartInsole,
  earthCenter,
  smsApp,
  msc,
  intMsc,
  caiLogo,
  mongoDb,
  graphQl,
  btc,
  restApi,
  scarculator,
  avatar,
  property_app
} from '../assets';

library.add(faX, faBars);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  nodeIcon,
  reactIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  android,
  pyIcon,
  mongoDb,
  restApi,
  graphQl,
  avatar,
};

const icons = {
  faBars,
  faX,
  faGithub,
  faInstagram,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here!",

    "The name’s FATION SHEHAJ. I am a tireless seeker of knowledge. Your visit to my portfolio is deeply appreciated!",

    "My interests are Web Development, Android and Robotics. Outside of my regular activities, I'm into sports and I enjoy travelling. I'm also a huge dog lover.",

    "Motto: Someone once told me the definition of hell: On your last day on earth, the person you became will meet the person you could have become.",
  ],
};

const experience = {
  text: [
    "WORK EXPERIENCE",

    "CURRENTLY",

    "Full-Stack Developer: at Studyportals, Eindhoven (Netherlands) [03/2024 - current]. Helping students globally to make the right study choice.",

    "Full member of the Technical Chamber of Greece [since 07/2021].",

    "PAST",

    "Full-Stack Developer / Software Engineer: at NIKI Ltd Digital Engineering, Ioannina (Greece) [09/2021 - 02/2024]. Assisting German car manufacturers.:• Web development (NodeJS, Javascript/Typescript, MongoDB, GraphQL, Redis, React, Angular).:• Data Analysis using Python",

    "Android Software Engineer: at PD Neurotechnology, Ioannina (Greece) [09/2020 - 07/2021] Developing android native (Java) apps for Deep Brain Stimulation (DBS) surgical treatment and smart soles:• Java, Bluetooth/BLE, JWT Authentication, REST APIs, Threads, I/O streams.",

    "University Teaching Assistant: at department of Computer Science and Engineering. University of Ioannina - School of Engineering, Greece [10/2019-02/2020] && [10/2020-02/2021].:• Course. Software Development - Prof. Panos Vassiliadis",

    "Freelance Android Developer: Development of a reporting/tracking Android app. Rhodes (Greece) [06/2019-10/2019]:• Java, XML, SQLite, PDF creator, Android SDK",
    
    "Internship - Mobile Developer: at Terracom Informatics, Ioannina (Greece) [07/2016-09/2016]:• Cross-platform mobile apps (Android, iOS, Web) using HTML, PHP and JavaScript.",

    "EDUCATION",

    "Master of Science: Data and Computer Systems Engineering. University of Ioannina - School of Engineering, Greece [10/2019-07/2021].",

    "Integrated Master of Science: Design and Implementation of a 3DoF Haptic Device. University of Ioannina - School of Engineering, Greece [2016-2017].",

    "Bachelor of Engineering: Computer Science and Engineering. University of Ioannina - School of Engineering, Greece [2012-2017].",

    "PUBLICATIONS",

    "A Study of Schema & Software Co-evolution for Relational Databases in Free Open-Source Projects [2021].",

    "https://openproceedings.org/2023/conf/edbt/paper-160.pdf",

    "Poster for CubicAI project: AI-aided Simulation – the Future of NVH Engineering",

    "https://www.fkfs-veranstaltungen.de/en/events/stuttgart-symposium/program/poster"
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "MSc Thesis",
    description: 'A Study of Schema & Software Co-evolution for Relational Databases in Free Open-Source Projects.',
    image: msc,
    source_code_link: 'https://github.com/FationSH/EvolutionChartExporter',
    demo_link: 'https://openproceedings.org/2023/conf/edbt/paper-160.pdf',
  },
  {
    name: 'Integrated MSc Thesis',
    description: 'Design and Modeling of a Low-Cost 3DoF Haptic Interface.',
    image: intMsc,
    source_code_link: 'https://github.com/FationSH/haptic',
    demo_link: 'https://github.com/FationSH/portfolioAssets/tree/master/3DoF_Interface',
  },
  {
    name: 'Web - Cubic AI',
    description: 'In collaboration with TWT Gmbh: Draw your own desired line and it will predict car movement. Angular - .NET - Matlab',
    image: caiLogo,
    source_code_link: 'https://cubicai.twt-gmbh.de/home',
    demo_link: 'https://cubicai.twt-gmbh.de/home',
  },
  {
    name: 'Property Classifier Web App',
    description: 'Simple app to add/list your home/property. Client in React. UI using chakra. Server in nodejs and express, uses mongo database. Functions also as a proxy server to handle fetch area list.',
    image: property_app,
    source_code_link: 'https://github.com/FationSH/PropertyApp',
    demo_link: 'https://github.com/FationSH/PropertyApp',
  },
  {
    name: 'Web - Track Crypto Prices',
    description: 'Web Crypto App with Proxy Server using Coingecko API.',
    image: btc,
    source_code_link: 'https://github.com/FationSH/CryptoApp',
    demo_link: 'https://github.com/FationSH/CryptoApp',
  },
  {
    name: 'Android - SMS to 13033',
    description: 'A simple android app to send SMS to 13033. Java',
    image: smsApp,
    source_code_link: 'https://play.google.com/store/apps/details?id=sotiris.zogos.a13033',
    demo_link: 'https://play.google.com/store/apps/details?id=sotiris.zogos.a13033',
  },
  {
    name: 'Android - Scarculator',
    description: 'A prank calculator app. Kotlin',
    image: scarculator,
    source_code_link: 'https://play.google.com/store/apps/details?id=com.fsharp.calculator',
    demo_link: 'https://play.google.com/store/apps/details?id=com.fsharp.calculator',
  },
  {
    name: 'Android - Interclima',
    description: 'A tablet android app for Interclima S.A. in Rhodes. Java',
    image: interclima,
    source_code_link: 'https://github.com/FationSH/portfolioAssets/tree/master/interclimaImages',
    demo_link: 'https://github.com/FationSH/portfolioAssets/blob/master/interclimaImages/Interclima.txt',
  },
  {
    name: 'Android - Smart Insole',
    description: 'A novel wearable sensor for continuous analysis and evaluation of human gait. Java',
    image: smartInsole,
    source_code_link: 'https://www.smart-insole.eu/',
    demo_link: 'https://www.smart-insole.eu/',
  },
  {
    name: 'Data Visualisation',
    description: 'A small Java app to visualize data using d3.js. Java',
    image: githubIcon,
    source_code_link: 'https://github.com/FationSH/DataVisualisation',
    demo_link: 'https://github.com/FationSH/DataVisualisation',
  },
  {
    name: 'Journey through the Center of the Earth',
    description: 'Matlab Simulation: fall through the center of the Earth. Matlab',
    image: earthCenter,
    source_code_link: 'https://github.com/FationSH/FallSimul',
    demo_link: 'https://github.com/FationSH/FallSimul',
  },
  {
    name: 'Vending Machine',
    description: 'A vending machine in Java with UI. Java - Swing',
    image: githubIcon,
    source_code_link: 'https://github.com/FationSH/VendingMachine',
    demo_link: 'https://github.com/FationSH/VendingMachine',
  }
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'jsts',
    title: 'JS/TS',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript and TypeScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description: 'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description: 'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description: 'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'mongoDb',
    title: 'MongoDB',
    icon: mongoDb,
    description: 'With 2 years of experience in MongoDB, one of the most used NoSQL databases.',
  },
  {
    id: 'graphQl',
    title: 'graphQL',
    icon: graphQl,
    description: 'I have used graphQL in my projets to get all the data required in a single request.',
  },
  {
    id: 'restApi',
    title: 'Rest API',
    icon: restApi,
    description: 'I have hands-on experience in Rest API using it in my android and web projects.',
  },
  {
    id: 'android',
    title: 'Android',
    icon: android,
    description: 'I have extensive experience with Android creating applications for companies and as a hobby.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description: 'I have substantial experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description: 'With 2 years of Python experience, I am adept at coding functions and automating things.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description: 'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  }
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  experience,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
