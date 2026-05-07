/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Deep Ponkiya",
  title: "Hi all, I'm Deep",
  subTitle: emoji(
    "A dedicated Full Stack Software Developer 🚀 experienced in crafting high-performance web solutions using React, SharePoint, PowerApps, Node.js, and JavaScript. Focused on delivering clean, scalable code and transforming complex business needs into efficient digital solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gRKycR3yZ1ARpas9mU5HuepwSBNO4wgh/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/deep-ponkiya-web",
  linkedin: "https://www.linkedin.com/in/deep-ponkiya-92093918b/",
  gmail: "dpatel.ponkiya773@gmail.com",
  stackoverflow: "http://stackoverflow.com/users/10391453/deep-ponkiya",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Expertise",
  subTitle: "Passionate Full Stack Developer 🚀 exploring and mastering diverse tech stacks",
  skills: [
    emoji(
      "⚡ Develop highly interactive React-based front-end interfaces for modern web applications"
    ),
    emoji("⚡ Build SharePoint (SPFx) solutions and PowerApps to streamline business processes and workflows"),
    emoji("⚡ Create scalable backend services with Node.js and integrate seamless APIs"),
    emoji(
      "⚡ Integrate third-party services and cloud platforms to enhance application functionality"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "React",
      iconLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
    },
    {
      skillName: "TypeScript",
      iconLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/960px-Typescript_logo_2020.svg.png"
    },
    {
      skillName: "Redux",
      iconLink: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
    },
    {
      skillName: "NodeJs",
      iconLink: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-download-png-1174935.png"
    },
    {
      skillName: "Javascript",
      iconLink: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      skillName: "Asp.net",
      iconLink: "https://logodix.com/logo/1796970.png"
    },
    {
      skillName: "PowerApps",
      iconLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Powerapps-logo.svg/3840px-Powerapps-logo.svg.png"
    },
    {
      skillName: "PowerAutomate",
      iconLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Microsoft_Power_Automate.svg/3840px-Microsoft_Power_Automate.svg.png"
    },
    {
      skillName: "HTML",
      iconLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png"
    },
    {
      skillName: "CSS",
      iconLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1920px-CSS3_logo_and_wordmark.svg.png"
    },
    {
      skillName: "Tailwind CSS",
      iconLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png"
    },
    {
      skillName: "Prime React",
      iconLink: "https://i0.wp.com/www.primefaces.org/wp-content/uploads/2018/05/primereact-logo.png?fit=1000%2C1000&ssl=1&w=640"
    },
    {
      skillName: "Bootstrap",
      iconLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/960px-Bootstrap_logo.svg.png"
    },
    {
      skillName: "MySQL",
      iconLink: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"
    },
    {
      skillName: "SQL Server",
      iconLink: "https://img.icons8.com/color/600/microsoft-sql-server.png"
    },
    {
      skillName: "Azure",
      iconLink: "https://swimburger.net/media/ppnn3pcl/azure.png"
    },
    {
      skillName: "GitHub",
      iconLink: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr Software Developer",
      company: "Product Based Company",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Jul 2022 – Present",
      desc: "As a Senior Software Developer in a product-based company, I lead the development of scalable and high-performance CRM systems, focusing on delivering efficient and user-centric solutions.",
      descBullets: [
        "I am involved in designing system architecture, implementing robust features, and ensuring seamless integration across platforms.",
        "I collaborate with cross-functional teams, mentor developers, and maintain high standards of code quality through best practices and reviews. Additionally, I continuously optimize system performance and enhance functionality to meet evolving business needs."
      ]
    },
    {
      role: "Software Developer",
      company: "Service Based Company",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Nov 2019 – Jun 2022",
      desc: "As a Software Developer, I was responsible for reviewing code to ensure high standards of quality, performance, and functionality. I contributed to drafting and implementing design blueprints, helping build scalable and efficient solutions aligned with project requirements.",
      descBullets: [
        "Authored many reusable components, modules, and libraries optimized for maximum user satisfaction. Building stable and maintainable codebase using React. Design and implement user-friendly web applications, including component optimization.",
      ]
    },
    {
      role: "Jr. Developer",
      company: "Service Based Startup",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Fab 2019 – Nov 2015",
      desc: "I contributed to the development, maintenance, testing, and debugging of websites and applications as a junior developer.",
      descBullets: [
        "I actively participate in code reviews, providing constructive feedback to maintain high code quality and best practices. I collaborate closely with team members to design, develop, and implement new features, ensuring scalable and efficient solutions. I focus on writing clean, readable, and maintainable code, making it easier for long-term development and collaboration. Additionally, I troubleshoot, debug, and resolve issues in existing codebases to improve performance and stability.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Work Portfolio"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Asset Management System",
      subtitle:
        "A CRM-based Asset Management System designed to manage and track organizational assets while maintaining complete visibility of customer and asset interactions. The system streamlines asset allocation, lifecycle management, and client mapping, enabling businesses to improve efficiency, reduce losses, and enhance decision-making through real-time insights and reporting.",
      image: "https://www.pngitem.com/pimgs/m/193-1939529_asset-management-system-icon-hd-png-download.png",
      imageAlt: "Asset Management System",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },
    {
      title: "Hospital Management System",
      subtitle:
        "A comprehensive Hospital Management System designed to streamline healthcare operations, including patient records, appointments, billing, and staff management. The system improves efficiency by centralizing data, enabling real-time access, and ensuring smooth coordination between departments.",
      image: "https://shop.akgun.com.tr/wp-content/uploads/2021/08/clipart2978376.png",
      imageAlt: "Hospital Management System",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },

    {
      title: "Construction Management",
      subtitle: "A Construction Management solution built using PowerApps to streamline project operations, including task tracking, resource allocation, and site management. The application improves coordination between teams, enhances real-time visibility, and ensures efficient execution of construction workflows.",
      image: "https://thumbs.dreamstime.com/b/construction-management-icon-suitable-project-management-construction-industry-construction-management-icon-359066571.jpg",
      imageAlt: "Construction Management",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },
     {
      title: "BioScience Organization",
      subtitle: "Developed a centralized dashboard solution for a BioScience organization to monitor and manage project statuses through interactive charts and real-time data visualization. The application enables users to track project progress, analyze key data fields, and access filterable insights with dynamically updated visualizations for better decision-making. Data was securely managed and stored in SharePoint Online, ensuring seamless collaboration and accessibility across teams.",
      image: "https://static.vecteezy.com/system/resources/previews/003/588/648/non_2x/project-management-planning-software-icon-vector.jpg",
      imageAlt: "BioScience Organization",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9924095173",
  email_address: "dpatel.ponkiya773@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  talkSection,
  contactInfo,
  isHireable,
  resumeSection
};
