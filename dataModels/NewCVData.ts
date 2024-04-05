
export interface Contact {
    phone: string;
    email: string;
    location: string;
  }
  
  export interface PersonalInfo {
    firstName: string;
    lastName: string;
    title: string;
    about: string;
    contact: Contact;
    image: string;
  }
  
  export interface Skill {
    name: string;
  }
  
  export interface Experience {
    company: string;
    period: string;
    role: string;
    location: string;
    tasks: string[];
  }
  
  export interface Language {
    name: string;
    level: string;
  }
  
  export interface Education {
    timeline: string;
    stream: string;
    university: string;
    universityLocation: string;
  }
  
  export interface NewCVData {
    personalInfo: PersonalInfo;
    skills: Skill[];
    experiences: Experience[];
    languages: Language[];
    education: Education[];
  }