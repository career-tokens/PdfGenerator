interface Experience {
    position: string;
    company: string;
    period: string;
    tasks: string[];
}

interface Blog {
    needed: boolean;
    link: string;
}

interface SocialMedia {
    needed: boolean;
    link: string;
}

interface Portfolio {
    needed: boolean;
    link: string;
}

interface Project {
    title: string;
    link: string;
    description: string;
    features: string[];
}

export interface TigerCVData {
    name: string;
    position: string;
    imageUrl: string;
    portfolio: Portfolio;
    twitter: SocialMedia;
    github: SocialMedia;
    linkedin: SocialMedia;
    location: string;
    blog: Blog;
    profile: string[];
    skills: string[];
    professionalExperienceNeeded: boolean;
    professionalExperience: Experience[];
    openSourceNeeded: boolean;
    openSourceContributions: string[];
    projects: Project[];
}