export interface CVData {
    name: string;
    phoneNumber1: string;
    phoneNumber2: string;
    addressLine1: string;
    addressLine2: string;
    email1: string;
    email2: string;
    education: {
      university: string;
      universityLocation: string;
      timeline: string;
      stream: string;
      major: string;
    }[];
    work: {
      company: string;
      location: string;
      position: string;
      timeline: string;
      task: string;
    }[];
    academic: {
      company: string;
      location: string;
      position: string;
      timeline: string;
      task: string;
    }[];
    coursework: {
      subject: string;
      topics: string;
    }[];
    additionalInfo: {
      subject: string;
      description: string;
    }[];
  }
  