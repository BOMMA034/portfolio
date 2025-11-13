/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Niharika's Portfolio",
  description:
    "Turning ideas into intuitive, scalable, and human-centered tech driven by AI, VR, and cloud.",
  og: {
    title: "Niharika Bommadi Portfolio",
    type: "website",
    url: "https://bomma034.github.io/portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Niharika Bommadi",
  logo_name: "NiharikaBommadi",
  //nickname: "layman_brother",
  subTitle:
    "Turning ideas into intuitive, scalable, and human-centered tech driven by AI, VR, and cloud.",
  resumeLink:
    "https://drive.google.com/file/d/1yGyACaKaKUiiR_JkLkBqnVqaJH5D92NO/view?usp=sharing",
  portfolio_repository: "https://github.com/BOMMA034/portfolio",
  githubProfile: "https://github.com/BOMMA034",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/BOMMA034",
  // linkedin: "https://www.linkedin.com/in/niharika-bommadi",
  // gmail: "niharikabommadi5985692@gmail.com",
  // gitlab: "https://gitlab.com/duluthmemo5985692",
  // facebook: "https://www.facebook.com/chinni.ganesh.35",
  // instagram: "https://www.instagram.com/niharika.bommadi/"

  {
    name: "Github",
    link: "https://github.com/BOMMA034",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/niharika-bommadi",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:niharikabommadi5985692@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/chinni.ganesh.35",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/niharika.bommadi/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Research & Immersive Technologies",
      fileName: "VRResearchImg",
      skills: [
        "⚡ Conducting VR research on multisensory feedback and spatial presence at the University of Minnesota Duluth.",
        "⚡ Building immersive Unity environments with avatars, haptic feedback, and sound to study comfort and realism in VR.",
        "⚡ Exploring how visual, auditory, and tactile cues affect users’ perception of personal space and embodiment.",
      ],
      softwareSkills: [
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: { color: "#000000" },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: { color: "#68217A" },
        },
        {
          skillName: "VR",
          fontAwesomeClassname: "simple-icons:oculus",
          style: { color: "#1C1E20" },
        },
        {
          skillName: "Haptics",
          fontAwesomeClassname: "simple-icons:hapticssharp",
          style: { color: "#2E7D32" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fab fa-github",
          style: { color: "#181717" },
        },
      ],
    },
    {
      title: "Cloud & DevOps Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designed and automated AWS workflows for EC2, VPC, IAM, and S3 to optimize cloud performance and security.",
        "⚡ Developed Python automation scripts using Boto3 and Lambda for monitoring, patching, and remediation.",
        "⚡ Created real-time monitoring dashboards using CloudWatch and Grafana to ensure zero downtime.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Lambda",
          fontAwesomeClassname: "simple-icons:awslambda",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Boto3",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#FFD43B" },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: { color: "#F46800" },
        },
      ],
    },
    {
      title: "Application Development & Human-Centered Design",
      fileName: "AppDevImg",
      skills: [
        "⚡ Designed and developed PantryPal — a Flutter & Firebase app that helps low-income families plan healthy, affordable meals.",
        "⚡ Implemented features like pantry item tracking, recipe matching, and user community spaces.",
        "⚡ Focused on accessibility and inclusive UI/UX design through prototyping, testing, and iteration.",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: { color: "#02569B" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "fab fa-figma",
          style: { color: "#F24E1E" },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: { color: "#0175C2" },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: { color: "#00C4CC" },
        },
      ],
    },
    {
      title: "AI & Data-Driven Research",
      fileName: "AIResearchImg",
      skills: [
        "⚡ Built IVF Success Prediction model using Mistral-7B and PEFT fine-tuning for interpretable AI in reproductive healthcare.",
        "⚡ Experienced in natural language preprocessing, model evaluation, and transformer-based architectures.",
        "⚡ Applying LLMs for practical problem-solving across NLP, healthcare, and intelligent data systems.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "PEFT",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "Mistral-7B",
          fontAwesomeClassname: "simple-icons:ai",
          style: { color: "#0A66C2" },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Sri Venkateswara University College of Engineering",
      subtitle: "B.Tech. in Electronics and Commmunication Engineering",
      logo_path: "svuce_logo.png",
      alt_name: "SVUCE",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://svuce.edu.in/",
    },
    {
      title: "University of Minnesota",
      subtitle: "M.S. in Computer Science",
      logo_path: "umd_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://d.umn.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: "- Udemy training",
      logo_path: "AWS_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1XR3_XavruW5ktftKQw-PXOgKV5M37HQi/view?usp=sharing",
      alt_name: "Amazon Web Services",
      color_code: "#8C151599",
    },
    {
      title: "Programming in Java",
      subtitle: "- NPTEL",
      logo_path: "NPTEL_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1xIuL_-uNivbV6KlEIi9KA8WU7cJQBWEx/view?usp=sharing",
      alt_name: "Programming in Java",
      color_code: "#00000099",
    },
    {
      title: "Internet Of Things",
      subtitle: "- NPTEL",
      logo_path: "NPTEL_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1xZetuKhJwrcTrcH7i0bUVimMdWECBbX3/view?usp=sharing",
      alt_name: "IOT",
      color_code: "#0C9D5899",
    },
    {
      title: "Scientific Computing using Matlab",
      subtitle: "- NPTEL",
      logo_path: "NPTEL_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1zAfLiNAxW1VnnXjnM9WlGTglbntdtk39/view?usp=sharing",
      alt_name: "Matlab",
      color_code: "#1F70C199",
    },
    {
      title: "VLSI Physical Design",
      subtitle: "- NPTEL",
      logo_path: "NPTEL_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1bz6CGt2uT__5g276eOMP5OEt05vpnhlc/view?usp=sharing",
      alt_name: "VLSI",
      color_code: "#D83B0199",
    },
    {
      title: "Research Involving Human Subjects",
      subtitle: "- CITI Program",
      logo_path: "CITI_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1VnZpD6KF5q1RhzvoUTfwV8YQ2cEgdOlT/view?usp=sharing",
      alt_name: "CITI Program",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, Volunteership and Leadership",
  description:
    "I specialize in Development Operations with hands-on experience in AWS infrastructure management, CI/CD automation, and system monitoring to ensure scalable and secure cloud environments. Alongside my technical career, I conduct research in Virtual Reality focused on spatial interaction, embodiment, and social presence, integrating immersive design with user experience. Beyond engineering and research, I mentor graduate students in thesis development and serve in leadership roles at the University of Minnesota Duluth, promoting collaboration, innovation, and community engagement across technical and academic fields.",
  header_image_path: "career_development.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Development Operations Engineer, Associate",
          company: "Infor Private Limited",
          company_url: "https://www.infor.com/",
          logo_path: "infor_logo.png",
          duration: "August 2022 - August 2024",
          location: "Hyderabad, Telangana, India",
          description:
            "⚡As a Development Operations Engineer at Infor, I had the opportunity to dive deep into managing AWS infrastructure. My role involved overseeing key components like EC2, VPC, S3, and EBS to ensure they operated at peak performance. One of my proudest achievements was automating various operational workflows using Python scripts alongside AWS Lambda functions.\n⚡Continuous monitoring was another critical aspect of my responsibilities. By implementing proactive solutions to identify network vulnerabilities early on. Collaborating closely with other teams allowed us to enhance our cloud security measures effectively—resulting in zero breaches during my tenure. The experience solidified my passion for cloud technologies and reinforced the importance of robust security practices",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Embedded Systems Intern",
          company: "Verzeo (in association with MVARO)",
          company_url:
            "https://www.linkedin.com/company/verzeo/?originalSubdomain=in",
          logo_path: "verzeo_logo.png",
          duration: "March 2021 - April 2021",
          location: "Remote",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Automation Intern",
          company: "Siemens Center of Excellence, Sri Venkateswara University",
          company_url: "https://svuniversity.edu.in/",
          logo_path: "siemens_logo.png",
          duration: "May 2021 - June 2021",
          location: "Tirupati, India",
          description:
            "Completed a one-month internship on 'Automation - Basics of PLC, SCADA, and Induction Motors' under Siemens Center of Excellence, SVU College of Engineering, Tirupati. Gained hands-on experience in PLC programming, SCADA systems, and industrial automation concepts.",
          color: "#0A9EDC",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Graduate Mentor Program",
          company: "University of Minnesota Duluth",
          company_url: "https://www.d.umn.edu/",
          logo_path: "umd_logo.png",
          duration: "September 2025 - Present",
          location: "Duluth, Minnesota, USA",
          description:
            "Mentoring a junior graduate student in developing and executing their thesis. Guiding through topic selection, literature review, IRB preparation, and thesis structuring using LaTeX. Meetings are conducted biweekly to review progress, address challenges, and refine research goals. Providing feedback on writing, citation management (Zotero), and user study planning.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "Graduate Student Association Leader",
          company: "University of Minnesota, Duluth",
          company_url:
            "https://graduate-school.d.umn.edu/current-students/graduate-student-association",
          logo_path: "GSA_logo.png",
          duration: "August 2025 - Present",
          location: "Duluth, Minnesota, USA",
          description:
            "⚡ Represented graduate students in UMD shared governance by serving on the Graduate Programs Committee and voicing student concerns.\n⚡ Co-led the Graduate Student Association (GSA), organizing meetings, events, and initiatives to enhance the graduate student experience.\n⚡ Collaborated with faculty and the Student Government Association (SGA) to secure funding, plan activities, and strengthen campus community engagement.",
          color: "#4285F4",
        },
        {
          title: "Graduate Student Representative for International Club",
          company: "University of Minnesota, Duluth",
          company_url: "https://duluthumn.campusgroups.com/intlclub/home/",
          logo_path: "IC_logo.jpeg",
          duration: "August 2025 - Present",
          location: "Duluth, Minnesota, USA",
          description:
            "⚡ Promote the club among international and domestic graduate students to increase awareness and involvement.\n⚡ Collaborate with the Event Coordinator and leadership team to plan and organize events, including catering and logistics.\n⚡ Lead graduate student recruitment and gather feedback to continuously improve club activities and engagement.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "From automating cloud operations to designing mobile apps and exploring VR interactions, my projects bring together engineering and creativity to craft meaningful, scalable, and human-centered technology.",
  avatar_image_path: "ideas_flow.svg",
};

const achievementsHeader = {
  title: "Achievements",
  description: "Some of my Achievments and Research.",
  avatar_image_path: "ideas_flow.svg",
};

const achievements = {
  data: [
    {
      id: "iot-iit-hyderabad",
      name: "Internet of Things Workshop - IIT Hyderabad",
      createdAt: "2019-08-18T00:00:00Z",
      description:
        "Participated in the Internet of Things Workshop conducted by Kyrion Technologies at IIT Hyderabad.",
      url:
        "https://drive.google.com/file/d/1iHMOZa6-mczSK8pBuXSUaeF_oipfj19O/view?usp=sharing",
    },
    {
      id: "iot-svu",
      name: "Internet of Things Workshop - Sri Venkateswara University",
      createdAt: "2020-03-01T00:00:00Z",
      description:
        "Completed a workshop on Internet of Things organized by Sri Venkateswara University, Tirupati.",
      url:
        "https://drive.google.com/file/d/1F0VOQDDLZ_tb0YrJ6Nes-LRwZaFo-eea/view?usp=sharing",
    },
    {
      id: "entrepreneurial-ideation-iit-bhubaneswar",
      name: "Entrepreneurial Ideation - IIT Bhubaneswar",
      createdAt: "2019-11-20T00:00:00Z",
      description:
        "Participated in the Entrepreneurial Ideation (Elbal Round) at E-Summit ’19, IIT Bhubaneswar.",
      url:
        "https://drive.google.com/file/d/1RD-3uz-u5sfineSM9qX5UZW5jOZB6FBI/view?usp=sharing",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Profile_attire.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  demoSection: {
    title: "Demo of My Work",
    subtitle:
      "Watch a demonstration of my projects and skills in action. Click the button below to view a video showcasing my work, including project walkthroughs, technical implementations, and key achievements.",
    videoLink: "/videos/demo-video.mp4",
  },
  addressSection: {
    title: "Address",
    subtitle: "1410 Acre street, Duluth, MN, USA 55811",
    locality: "Duluth",
    country: "USA",
    region: "Minnesota",
    postalCode: "55811",
    streetAddress: "1410 Acre Street",
    avatar_image_path: "new_message.svg",
    location_map_link: "https://maps.app.goo.gl/9ZF2rGNr7r6bmxSJ8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  achievementsHeader,
  achievements,
  contactPageData,
};
