export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    profilePicture: string;
    summary: string;
  };
  experience: {
    company: string;
    position: string;
    location?: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    field: string;
    graduationDate: string;
  }[];
  skills: string[];
  certifications?: {
    name: string;
    issuer: string;
    date?: string;
  }[];
  awards?: {
    name: string;
    issuer: string;
    date?: string;
  }[];
  languages?: {
    name: string;
    proficiency: string;
  }[];
}