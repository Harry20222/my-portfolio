/**
 * Centralized Portfolio Data Store for Harry Bosco Denis
 * Styled to match the Maya Nigrin portfolio design.
 */

export interface PersonalBio {
  name: string;
  pronouns: string;
  title: string;
  university: string;
  year: string;
  major: string;
  coopAvailability: string;
  gpa: number;
  bioParagraph1: string;
  bioParagraph2: string;
  resumeUrl: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  devpost: string;
  location: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  major: string;
  minorOrSpecialization?: string;
  gpa?: number;
  coursework: string[];
  awardsAndScholarships: string[];
  description?: string;
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
  description: string;
  bullets: string[];
  githubUrl?: string;
  devpostUrl?: string;
  demoUrl?: string;
  iconName?: string;
}

export interface ExtracurricularItem {
  title: string;
  organization: string;
  role: string;
  location?: string;
  period: string;
  description?: string;
  bullets: string[];
  imageUrl?: string;
  iconName?: string;
  projectUrl?: string;
  projectUrlLabel?: string;
}

export const personalBio: PersonalBio = {
  name: "Harry Bosco Denis",
  pronouns: "He/Him/His",
  title: "Student, Developer, and Problem Solver",
  university: "University of Cincinnati",
  year: "Sophomore (Class of 2029)",
  major: "Computer Science",
  coopAvailability: "Spring 2027",
  gpa: 3.93,
  bioParagraph1:
    "I am a Computer Science student at the University of Cincinnati pursuing a Bachelor of Science degree with a 3.93 GPA. I have been studying computer science and software development passionately, with experience coding in Python, Java, C++, HTML, CSS, JavaScript, React, Next.js, FastAPI, and TensorFlow. When I am not in classes, I am often developing software projects, conducting technical research, or building AI applications.",
  bioParagraph2:
    "I have worked on a variety of software engineering projects including AI medical bill negotiation tools, native Android heart arrhythmia classification apps, and scalable web backend pipelines. I have also been a volunteer teaching assistant for introductory IT courses at Hughes STEM High School, served as Secretary for the AAEIO student organization, and collaborated on ML programs with Microsoft & NUS.",
  resumeUrl: "https://drive.google.com/open?id=1yCHs_BdM7G5E-bM6fg5TT90wzfrPN569"
};

export const contactInfo: ContactInfo = {
  email: "boscodhy@mail.uc.edu",
  phone: "513-212-4950",
  linkedin: "https://linkedin.com/in/harry-bosco-denis",
  github: "https://github.com/Harry20222",
  devpost: "https://devpost.com/Harry20222?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
  location: "University of Cincinnati, Cincinnati, OH"
};

export const educationList: Education[] = [
  {
    institution: "University of Cincinnati",
    degree: "Bachelor of Science in Computer Science",
    period: "2025 - Present (Expected May 2029)",
    major: "Computer Science",
    minorOrSpecialization: "Artificial Intelligence & Software Systems",
    gpa: 3.93,
    coursework: [
      "Data Structures & Algorithms",
      "Linear Algebra & Differential Equations",
      "Computer Systems Engineering",
      "Software Engineering",
      "Database Systems & MySQL",
      "Discrete Mathematics",
      "Physics Kinematics & Mechanics"
    ],
    awardsAndScholarships: [
      "Dean's List (First Semester 4.0 GPA)",
      "AP Scholar Award",
      "International Outreach Award",
      "UC Global Scholarship"
    ],
    description:
      "Pursuing a BS in Computer Science with a 3.93 cumulative GPA, engaged in software engineering coursework, competitive hackathons, and student leadership."
  }
];

export const projectsData: Project[] = [
  {
    title: "Billify",
    subtitle: "AI Medical Bill Translator & Negotiation Assistant",
    timeframe: "March 2026",
    tags: ["Generative AI", "Medical Tech", "Privacy Engine"],
    techStack: ["Python", "Gemini AI", "React", "OCR"],
    description:
      "This program lets users upload or input medical bills, using Google Gemini AI to translate complex billing codes into plain language and generate negotiation scripts.",
    bullets: [
      "Integrated Google Gemini API to translate complex, redacted medical bills into user-friendly summaries.",
      "Engineered prompt sequences to detect billing malpractices and auto-generate actionable negotiation scripts.",
      "Processed scrubbed OCR text through LLM pipeline to maintain strict patient data privacy.",
      "Contributed to React frontend logic to streamline data flow across the multimodal system."
    ],
    githubUrl: "https://github.com/Harry20222",
    iconName: "FileText"
  },
  {
    title: "Byte2Beat",
    subtitle: "Native Android Heart Arrhythmia Detector",
    timeframe: "Jan. 2026 – Feb. 2026",
    tags: ["Mobile App", "Machine Learning", "Healthcare"],
    techStack: ["Python", "TensorFlow", "Android Studio", "Java"],
    description:
      "A native Android mobile application utilizing Convolutional Neural Networks (CNNs) to classify heart arrhythmias from benchmark ECG data.",
    bullets: [
      "Developed a native Android application to detect cardiac arrhythmias with 99% accuracy on benchmark ECG data.",
      "Trained CNN model using MIT-BIH Arrhythmia Database for verified wave classification.",
      "Simulated live ECG data streaming for mobile demonstration without external hardware dependencies.",
      "Authored a technical report documenting problem framing, model architecture, and evaluation benchmarks."
    ],
    githubUrl: "https://github.com/Harry20222",
    iconName: "Activity"
  },
  {
    title: "Educational Shorts Platform",
    subtitle: "MAKE UC Hackathon Backend & Data Pipeline",
    timeframe: "Nov. 2025",
    tags: ["Hackathon Winner", "Backend Systems", "Data Scraper"],
    techStack: ["Python", "FastAPI", "Gemini AI", "YouTube Data API"],
    description:
      "Backend architecture and automated data scraper built for MAKE UC Hackathon that curated 1,800+ educational CS shorts.",
    bullets: [
      "Architected backend for a video platform at MAKE UC Hackathon delivering short-form educational CS content.",
      "Engineered data pipeline using YouTube Data API to scrape 19,000+ videos from tech educational channels.",
      "Utilized Gemini API to filter videos into a curated dataset of 1,800+ educational shorts.",
      "Led a 4-person engineering team for UI creation and platform deployment."
    ],
    devpostUrl: "https://devpost.com/Harry20222?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    githubUrl: "https://github.com/Harry20222",
    iconName: "Video"
  },
  {
    title: "ParkPulse",
    subtitle: "Desktop Parking Management System",
    timeframe: "Nov. 2024 – Feb. 2025",
    tags: ["Desktop App", "Database Systems"],
    techStack: ["Python", "MySQL", "Tkinter"],
    description:
      "A desktop application handling real-time vehicle entry/exit logs, parking fee calculations, and automated record purging.",
    bullets: [
      "Processed vehicle entry/exit details, dynamically calculated parking rates, and maintained persistent database records.",
      "Implemented features for users to extend sessions and automated background purging of expired entities.",
      "Designed an administrative control panel in Tkinter GUI for monitoring live occupancy and database logs."
    ],
    githubUrl: "https://github.com/Harry20222",
    iconName: "Database"
  }
];

export const extracurricularsList: ExtracurricularItem[] = [
  {
    title: "Club Secretary",
    organization: "AAEIO Student Organization",
    role: "Secretary & Executive Board Member",
    period: "May 2026 – Present",
    description:
      "Direct outreach for the student club focusing on recruiting incoming freshmen. Document Executive Board meetings and manage digital records and event logistics for General Body Meetings.",
    bullets: [
      "Directed outreach initiatives for incoming freshmen.",
      "Documented Executive Board meeting minutes and organizational records.",
      "Coordinated logistics and event planning for upcoming General Body Meetings."
    ],
    iconName: "Users"
  },
  {
    title: "Bearcat Coders Outreach",
    organization: "Hughes STEM High School",
    role: "Volunteer Teaching Assistant & Mentor",
    location: "Cincinnati, OH",
    period: "Sept. 2025 – Nov. 2025",
    description:
      "Volunteered as a Teaching Assistant for a college-level introductory IT course, mentoring Cincinnati high school students in computer science and IT concepts.",
    bullets: [
      "Mentored students individually to bridge knowledge gaps and align them with course material.",
      "Assisted the primary instructor with grading assignments, tracking student progress, and technical labs.",
      "Led teaching sessions and guided students through hands-on technical labs."
    ],
    iconName: "GraduationCap"
  },
  {
    title: "Volunteer Developer & Instructor",
    organization: "Baker College",
    role: "Volunteer Developer & Instructor",
    location: "Remote / On-site",
    period: "July 2024 – Aug. 2024",
    bullets: [
      "Instructed introductory computer science students in Python programming, debugging, and software engineering principles.",
      "Guided students through interactive coding exercises, data structure logic, and algorithmic problem-solving."
    ],
    iconName: "Code"
  },
  {
    title: "Machine Learning Program Participant",
    organization: "Microsoft & NUS ML Collaboration",
    role: "Machine Learning Program Participant",
    location: "Specialized Training",
    period: "2024",
    bullets: [
      "Participated in a technical machine learning program with Microsoft and National University of Singapore (NUS).",
      "Trained and benchmarked ML classification models on complex dataset metrics."
    ],
    iconName: "Code",
    projectUrl: "https://github.com/Harry20222",
    projectUrlLabel: "View project repository on GitHub"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", highlight: true },
      { name: "Java", highlight: true },
      { name: "C++" },
      { name: "SQL / MySQL", highlight: true },
      { name: "MongoDB" },
      { name: "JavaScript" },
      { name: "HTML & CSS" },
      { name: "TypeScript" }
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", highlight: true },
      { name: "Gemini API", highlight: true },
      { name: "CNNs & ECG Classification" },
      { name: "Data Pipeline Engineering" }
    ]
  },
  {
    category: "Frameworks & Libraries",
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
