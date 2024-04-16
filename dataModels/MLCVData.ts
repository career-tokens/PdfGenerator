interface Education {
    university: string;
    universityLocation: string;
    course: string;
    period: string;
    details: string[];
  }
  
  interface ProfessionalExperience {
    company: string;
    companyLocation: string;
    period: string;
    role: string;
    tasks: string[];
  }
  
  interface Skill {
    topic: string;
    description: string;
  }
  
  interface ProjectAndLeadership {
    role: string;
    location: string;
    program: string;
    period: string;
    tasks: string[];
  }
  
  export interface MLCVData {
    name: string;
    email: string;
    phone: string;
    phoneNeeded: boolean;
    address: string;
    addressNeeded: boolean;
    education: Education[];
    educationNeeded: boolean;
    professionalExperience: ProfessionalExperience[];
    professionalExperienceNeeded: boolean;
    skills: Skill[];
    skillsNeeded: boolean;
    projectsAndLeadership: ProjectAndLeadership[];
    projectsAndLeadershipNeeded: boolean;
  }