/**
 * Centralized Portfolio Data Store for Harry Bosco Denis
 * Modifying this file automatically updates all components across the portfolio website.
 */

export interface PersonalBio {
  name: string;
  title: string;
  university: string;
  gpa: number;
  graduationDate: string;
  coopAvailability: string;
  bioSummary: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  devpost: string;
}

export interface Education {
  institution: string;
  degree: string;
  gpa: number;
  graduationDate: string;
  honorsAndAwards: string[];
  scholarships: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface Project {
  title: string;
  subtitle?: string;
  timeframe: string;
  tags: string[];
  techStack: string[];
  bullets: string[];
  githubUrl?: string;
  devpostUrl?: string;
  demoUrl?: string;
}

export interface ActivityItem {
  title: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export const personalBio: PersonalBio = {
  name: "Harry Bosco Denis",
  title: "Computer Science Student at University of Cincinnati",
  university: "University of Cincinnati",
  gpa: 3.93,
  graduationDate: "May 2029",
  coopAvailability: "Spring 2027",
  bioSummary:
    "Computer Science sophomore at the University of Cincinnati with a 3.93 GPA. Passionate about AI/ML models, native mobile applications, full-stack backends, and data pipeline engineering."
};

export const contactInfo: ContactInfo = {
  email: "boscodhy@mail.uc.edu",
  phone: "513-212-4950",
  linkedin: "https://linkedin.com/in/harry-bosco-denis",
  github: "https://github.com/Harry20222",
  devpost: "https://devpost.com/Harry20222?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
};

export const educationInfo: Education = {
  institution: "University of Cincinnati",
  degree: "Bachelor of Science in Computer Science",
  gpa: 3.93,
  graduationDate: "May 2029",
  honorsAndAwards: ["Dean's List", "AP Scholar"],
  scholarships: ["International Outreach Award", "UC Global Scholarship"]
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", highlight: true },
      { name: "Java", highlight: true },
      { name: "C++" },
      { name: "SQL / MySQL", highlight: true },
      { name: "MongoDB" },
      { name: "JavaScript / HTML / CSS" },
      { name: "TypeScript" }
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", highlight: true },
      { name: "Gemini API", highlight: true },
      { name: "CNNs & ECG Signal Processing" },
      { name: "Data Pipeline Engineering" }
    ]
  },
  {
    category: "Frameworks & Tools",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "Tkinter" },
      { name: "Tailwind CSS" },
      { name: "REST APIs" }
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Android Studio", highlight: true },
      { name: "VS Code" },
      { name: "Oracle VirtualBox" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "Billify",
    subtitle: "AI Medical Bill Translator & Negotiation Assistant",
    timeframe: "March 2026",
    tags: ["Generative AI", "Medical Tech", "Privacy Engine"],
    techStack: ["Python", "Gemini AI", "React", "OCR"],
    bullets: [
      "Integrated the Gemini API to translate complex, redacted medical bills into user-friendly summaries.",
      "Engineered prompts to detect common billing malpractices and generate actionable negotiation scripts.",
      "Processed scrubbed OCR text through the LLM pipeline to maintain strict data privacy.",
      "Contributed to the React frontend to streamline data flow across the multimodal system."
    ],
    githubUrl: "https://github.com/Harry20222"
  },
  {
    title: "Byte2Beat",
    subtitle: "Native Android Heart Arrhythmia Detector",
    timeframe: "Jan. 2026 – Feb. 2026",
    tags: ["Mobile App", "Machine Learning", "Healthcare"],
    techStack: ["Python", "TensorFlow", "Android Studio", "Java"],
    bullets: [
      "Developed a native Android application to detect cardiac arrhythmias with 99% accuracy on benchmark ECG data.",
      "Trained the CNN model using MIT-BIH Arrhythmia Database, leveraging verified data for accurate ECG classification.",
      "Simulated live ECG data from the benchmark database for mobile demonstration without external hardware dependencies.",
      "Authored a technical report documenting the problem framing, model architecture, and final evaluation benchmarks."
    ],
    githubUrl: "https://github.com/Harry20222"
  },
  {
    title: "Educational Shorts Platform",
    subtitle: "MAKE UC Hackathon Backend & Data Pipeline",
    timeframe: "Nov. 2025",
    tags: ["Data Pipeline", "Backend Systems", "Data Scraper"],
    techStack: ["Python", "FastAPI", "Gemini AI", "YouTube Data API"],
    bullets: [
      "Architected the backend for a video platform at the MAKE UC Hackathon, designed to deliver educational short-form computer science content.",
      "Engineered the data pipeline, utilizing the YouTube Data API to scrape 19,000+ videos from reputable tech educational channels.",
      "Utilized Google Gemini API to filter videos into a dataset of 1,800+ educational shorts.",
      "Led a 4-person team for creation of user interface using HTML/JavaScript/CSS and deployment of the project."
    ],
    devpostUrl: "https://devpost.com/Harry20222?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    githubUrl: "https://github.com/Harry20222"
  },
  {
    title: "ParkPulse",
    subtitle: "Desktop Parking Management System",
    timeframe: "Nov. 2024 – Feb. 2025",
    tags: ["Desktop App", "Database Systems"],
    techStack: ["Python", "MySQL", "Tkinter"],
    bullets: [
      "Processed vehicle entry/exit details, dynamically calculated parking rates, and maintained persistent database records.",
      "Implemented features for users to extend parking sessions and automated background purging of expired parking entities.",
      "Designed an administrative control panel in the GUI for system operators to monitor live parking occupancy and database logs."
    ],
    githubUrl: "https://github.com/Harry20222"
  }
];

export const activitiesData: ActivityItem[] = [
  {
    title: "Club Secretary",
    role: "Secretary",
    organization: "AAEIO",
    period: "May 2026 – Present",
    description: [
      "Directed outreach for the club, focusing on recruiting upcoming freshmen.",
      "Documented Executive Board meetings and managed a digital repository for organizational records.",
      "Coordinated logistics and event planning for upcoming Fall semester General Body Meetings."
    ]
  },
  {
    title: "Volunteer Teaching Assistant",
    role: "Teaching Assistant",
    organization: "Bearcat Coders @ Hughes STEM High School",
    period: "Sept. 2025 – Nov. 2025",
    description: [
      "Volunteered as a TA at Hughes STEM High School for a college-level IT course.",
      "Mentored students individually to bridge knowledge gaps and ensure alignment with course materials.",
      "Assisted the instructor with administrative duties including grading homework and tracking student progress.",
      "Led full teaching sessions, delivering lectures and guiding students through technical concepts."
    ]
  },
  {
    title: "Volunteer Developer & Instructor",
    role: "Developer / TA",
    organization: "Baker College",
    period: "July 2024 – Aug. 2024",
    description: [
      "Volunteered as a Python developer and instructor for introductory computer science students.",
      "Assisted students with hands-on coding exercises, debugging, and software engineering principles."
    ]
  },
  {
    title: "Machine Learning Program Participant",
    role: "Participant",
    organization: "Microsoft & NUS ML Collaboration",
    period: "Specialized Training",
    description: [
      "Participated in a technical machine learning program with Microsoft and National University of Singapore (NUS).",
      "Trained and benchmarked ML classification models on personality dataset metrics."
    ]
  }
];
