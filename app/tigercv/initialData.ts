import { TigerCVData } from "../../dataModels/TigerCVData";

export const tigerInitialData:TigerCVData = {
    name: "Tiger Abrodi",
    position: "Full Stack Developer",
    imageUrl: "https://media.licdn.com/dms/image/D4E03AQFuTk5mpCvsFQ/profile-displayphoto-shrink_400_400/0/1696133927472?e=1724889600&v=beta&t=FEqWZsi4TOudZivUcV3F4hv8bpt3OzKa1ZNUv4Q1meU",
    portfolio: {
    needed: true,
    link:""
    },
    twitter: {
        needed: true,
        link:""
    },
    github: {
        needed: true,
        link:""
    },
    linkedin: {
        needed: true,
        link:""
    },
    location: "Germany",
    blog: {
        needed: true,
        link:""
    },
    profile: ["I'm a passionate software develoepr who loves crafting products that people love", "I'm a huge lover of Open Source and also volunteer in many communities","I care about making the customers happy,testing,accessibility,teamwork and code quality."],
    skills: ["• React, Typescript, GraphQL, Styled Components, Tailwind, Remix, Firebase, Prisma and NextJS.",
        "• Cypress,Jest, Testing Library, Puppeteer and Storybook",
        "• Extreme Programming, Clean code, TDD Interviewing and Accessibility."],
    professionalExperienceNeeded: true,
    professionalExperience: [{
        position: "Frontend Developer",
        company: "XYZ Company",
        period: "06/2021-present",
        tasks: [`• Introduced team practices that helped us move faster, such as "Pair Reviews" and "Stop and Fix"`,
            `• Made the site more accessible which is important since many of our users are elders such as grandparents `,
            `• Actively worte tests,integration/unit with Jest and Testing Library and E2E Tests with Pentf and Puppeteer`,
            ],
    },
        {
            position: "Junior Frontend Developer",
            company: "ABC Company",
            period: "07/2020-06/2021",
            tasks: ["• Worked on frontend with React , Javascript/Typescript,GraphQL(URQL Client),Styled Components,Stroybook and react-i18next,used by over 2 million users",
                "• Documented usgae of performance APIs in React which increased the code quality",
            "• Helped with organizational tasks such as moderating our weekly Dev meetings"],
        }],
    openSourceNeeded: true,
    openSourceContributions: ["I have contributed to projects such as Mock Service Worker(used by thousands) and Testing Library(used by millions).",
        "I also volunteer in communities like KCD and Remix."],
    projects: [{
        title: "Madara",
        link: "",
        description: "A way for people to manage their tasks",
        features: ["• Task manager I still use myself to manage my tasks amd has 80+ users",
            "• Built with React,Typescript,Styled Components,DnD,React Firebase Hooks, and Firebase",
            "• Focused on accessibility by implementing inclusive design patterns and tested with NVDA screen reader",
            "• Implemented accessible Drag and Drop functionality"
        ],
    },
        {
            title: "Shisui",
            link: "",
            description: "An app to become better than your past by regularly assessing yourself and holding yourself accountable",
            features: ["• Helps 100+ users become better than their past",
                "• Built with Remix , Tailwind , Planetscale and Prisma",
                "• Implemented optimistic UI"]
        },
        {
            title: "Vinland Saga",
            link: "",
            description: "A platform where chefs can write their recipes and connect with each other",
            features: ["• Built with NextJS,Styled Components,Firebase,React Markdown and Zustand",
                "• Chefs can write their recipes in markdown , preview the recipes and comment when viewing others' recipes",
                "• Implemented image uplaoding (for the profile and recipe)",
                "• Handled the loading state globally"
            ]
        },
        {
            title: "Raveny",
            link: "",
            description: "A website where people can find recipes and find them based on different criteria",
            features: ["• Built with React,Typescript, and Styled Components",
                "• Wrote tests using Jest,Testing Library,Cypress and Mock Service Worker",
            "• Improvd the accesible state of the app after having learned more about accessbility"]
    }]
}