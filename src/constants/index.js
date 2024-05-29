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
    meta,
    starbucks,
    salesforce,
    ibm,
    tesla,
    shopify,
    carrent,
    alphawonders,
    aayuryog,
    projhub,
    jobit,
    tripguide,
    threejs,
} from "../assets/assets";

const navLinks = [
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
        title: "React  Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Trader ",
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
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Salesforce Developer(Intern)",
        company_name: "Salesforce/Persistence",
        icon: salesforce,
        iconBg: "#383E56",
        date: "October 1 - December 1 2022 ",
        points: [
            "Organizational Setup ",
            "Relationship & Process Automation",
            "Apex, Testing & Debugging",
            "Lightning Web Components (LWC) & API",
        ],
    },
    {
        title: "Cybersecurity intern ",
        company_name: "IBM",
        icon: ibm,
        iconBg: "#E6DEDD",
        date: "June 12 - July 24 2023",
        points: [
            "Learned and applied some concepts of cybersecurity",
            "made a keylogger project based on learning",
            "Learned different types of attacks that are harful for organization ",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        title: "Full stack Developer",
        company_name: "Excelr",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB72dqN6AGRo0UfvrHoAs5VQvbfOFcPtCir9i9PM4lA&s",
        iconBg: "#E6DEDD",
        date: "Feb 2023 - Present",
        points: [
            "Developing and maintaining web applications using HTML ,css ,JavaScript and other related technologies.",
            "Developing Projects on different Javascript frameworks such as React",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implementing backend server-side code and database ",
        ],
    },
];



const projects = [
    {
        name: "AlphaWonders Learning APP",
        description:
            `Imagine scanning the letter 'A' and watching as a bright, juicy "Apple" appears right before your eyes! Our app is designed to make learning fun, engaging, and interactive. It encourages kids to explore, learn, and connect with letters and words in a whole new way.`,
        tags: [
            {
                name: "Unity",
                color: "blue-text-gradient",
            },
            {
                name: "Vuforia",
                color: "green-text-gradient",
            },
            {
                name: "Blender",
                color: "pink-text-gradient",
            },
        ],
        image: alphawonders,
        source_code_link: "https://github.com/Abhijeetkadtan/AlphaWonders",
    },
    {
        name: "AayurYog Meditation App",
        description:
            "AayurYog is the Meditation application. It is a mobile-based application from which user is able to do meditation. it   has features like Meditation, pranayama, podcast, vlogs so that user is able to do many activities like meditation, Pranayama , listen podcast for overcoming from depression or any stress.",
        tags: [
            {
                name: "Android",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "fragment",
                color: "pink-text-gradient",
            },
        ],
        image: aayuryog,
        source_code_link: "https://github.com/Abhijeetkadtan/AayurYog-MeditationApp",
    },
    {
        name: "Project HUB",
        description:
            "Project HUB is Basically a platform on which students upload their project and reports. If any student or teacher wants to search past records of project Reports then It is very Complicated for a large quantity of data. ",
        tags: [
            {
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "HTML/css",
                color: "green-text-gradient",
            },
            {
                name: "Javascrpt",
                color: "pink-text-gradient",
            },
        ],
        image: projhub,
        source_code_link: "https://github.com/Abhijeetkadtan/ProjectHub",
    },
];

export { services, technologies, experiences, projects, navLinks };