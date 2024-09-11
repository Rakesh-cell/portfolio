import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rakesh",
  initials: "M",
  url: "https://simpleportfolio-phi.vercel.app/",
  location: "Bengaluru, India",
  locationLink: "https://maps.app.goo.gl/PZkSkceoJ2tbKFcX8",
  description:
    "Passionate Software Engineer. I love building things and contribute postively to grow in career",
  summary:
    "At the end of 2021, I got a job as a software engineer to go fulltime into building and scaling web and mobile applications using [React Native/React Js](#skills). In the past, [I pursued a degree in computer science](/#education), and [Have knowledge on Analytics along with python and sql](/#hackathons). I also have experience of Working with building and scaling [5+ projects.](#projects) ",
  avatarUrl: "/me.png",
  skills: [
    "React Native",
    "React Js",
    "JavaScript",
    "jQuery",
    "Next.js",
    "Typescript",
    "CI/CD",
    "Git",
    "FireBase",
    "Agile methodology",
    "HTML/CSS",
    "Python",
    "SQL",
    

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rakm030@gmail.com",
    tel: "7019891961",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rakesh-cell",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rakesh-m-765339195/",
        // url:"https://www.linkedin.com/messaging/thread/2-ZjE3ZDFmNDctYzZkNi00Y2M3LTllZjgtZjgxZjRlMzg5ODMxXzAxMA==/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Rakrok7",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "rakm030@gmail.com", //#
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Neosoft",
      href: "https://www.neosofttech.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/NeoSoft.png",
      start: "Aug 2021",
      end: "May 2024",
      description:
        "A highly skilled and 2.10 year experienced React Native developer with proven track record of building robust and scalable web and mobile applications for iOS and Android platforms.Strong expertise in Javascript,React Js, Redux, and other related technology. ",
    },
   
  ],
  education: [
    {
      school: "MS Ramaiah Institute of Technology",
      href: "https://www.msrit.edu/",
      degree: "Bachelor of Engineering in Computer Science",
      logoUrl: "/MSRIT.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "SJ Polytechnic",
      href: "https://sjpolytechnic.karnataka.gov.in/en",
      degree: "Diploma in Computer Science",
      logoUrl: "/SJP.png",
      start: "2015",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Picstagraph",
      href: "https://play.google.com/store/apps/details?id=com.picstagraph&pcampaignid=web_share",
      dates: "Aug 2022 - Nov 2022",
      active: true,
      description:
        "Picstagraph is the network for creatives, photographers, models and content creators. Connect with like-minded people.",
      technologies: [
        "React Native",
        "React Hooks",
        "JavaScript",
        "React",
        "NativeBase UI",
        "Xcode",
        "Agile methodology",
      ],
      links: [
        {
          type: "Playstore",
          href: "https://play.google.com/store/apps/details?id=com.picstagraph&pcampaignid=web_share",
          icon: <Icons.mobile className="size-3" />,
        },
      ],
      image: "/Picstagraph.png",
      video:"",
        // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Coronation Mobile",
      href: "https://play.google.com/store/apps/details?id=com.coronation.app&pcampaignid=web_share",
      dates: "Nov 2022 - Jul 2023",
      active: true,
      description:
        "The Coronation Merchant Bank App is an innovative app that delivers our prestigious banking experience to your fingertips.",
      technologies: [
        "JavaScript",
        "Backbone Js",
        "Jquery",
        "Html",
        "Css",
        "Apache Cordova",
        "Agile methodology",
      ],
      links: [
        {
          type: "Playstore",
          href: "https://play.google.com/store/apps/details?id=com.coronation.app&pcampaignid=web_share",
          icon: <Icons.mobile className="size-3" />,
        },
  
      ],
      image: "/Coronation.png",
      video: "",//url
    },
    {
      title: "FirstMobile",
      href: "https://play.google.com/store/apps/details?id=com.firstbank.firstmobile&pcampaignid=web_share",
      dates: "Nov 2022 - Jul 2023",
      active: true,
      description:"FirstMobile is the official mobile banking smartphone application from FirstBank. It provides convenient access  by FirstBank account holders via their mobile phones/devices.",
      technologies: [
        "JavaScript",
        "Backbone Js",
        "Jquery",
        "Html",
        "Css",
        "Apache Cordova",
        "Agile methodology",
      ],
      links: [
        {
          type: "Playstore",
          href: "https://play.google.com/store/apps/details?id=com.firstbank.firstmobile&pcampaignid=web_share",
          icon: <Icons.mobile className="size-3" />,
        },
  
      ],
      image: "/FBNmobile.png",
      video: "",
    },
    {
      title: "FBN Edge (FBNquest)",
      href: "https://play.google.com/store/apps/details?id=com.fbnquest.FBNEdge&pcampaignid=web_share",
      dates: "Jul 2023 - Aug 2023",
      active: true,
      description:"FBN Edge brought to you by FBNQuest Asset Management is a mobile application which simplifies investing in mutual funds and allows you track the progress of your investments.",
      technologies: [
        "React Native",
        "React Hooks",
        "JavaScript",
        "React",
        "NativeBase UI",
        "Xcode",
        "feature Implemention",
        "Agile methodology",
      ],
      links: [
        {
          type: "Playstore",
          href: "https://play.google.com/store/apps/details?id=com.fbnquest.FBNEdge&pcampaignid=web_share",
          icon: <Icons.mobile className="size-3" />,
        },
      ],
      image: "/FBNquest.png",
      video: "",
    },
    {
      title: "SBI Hrms",
      href: "https://play.google.com/store/apps/details?id=com.sbi.myhrms&pcampaignid=web_share",
      dates: "Dec 2023 - May 2024",
      active: true,
      description:"MyHRMS is new HR Application which is accessed by SBI Employees, Pensioners and Family Pensioners. Main features provided are - Reimbursements/claims, Leave Apply / Approve, GEMS, Pension ID Download, Video Life Certificate submission. Employee Profile, Employee Search, Organ Donation etc.",
      technologies: [
        "JavaScript",
        "Backbone Js",
        "Jquery",
        "Html",
        "Css",
        "Debugging",
        "feature Development",
        "Apache Cordova",
        "Agile methodology",
      ],
      links: [
        {
          type: "Playstore",
          href: "https://play.google.com/store/apps/details?id=com.sbi.myhrms&pcampaignid=web_share",
          icon: <Icons.mobile className="size-3" />,
        },
      ],
      image: "/SBIHrms.png",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Scrum Fundamentals Certified (SFC)",
      dates: "August 2021",
      location: "Remote",
      description:
        "Issued by SCRUMstudy - Accreditation Body for Scrum and Agile",
      image:
        "https://media.licdn.com/dms/image/v2/C4E0BAQG9_uP8f-kpiw/company-logo_100_100/company-logo_100_100/0/1631356592679?e=1733961600&v=beta&t=2zpRZaX694907DlW_89ylQSh2AqXrIqZgSL4FKNtfVM",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.scrumstudy.com/certification/verify?type=SFC&number=866628",
        },
      ],
    },
    {
      title: "Python (Basic)",
      dates: "October 2023",
      location: "Remote",
      description:
        "Issued by HackerRank for completing the levels during the learning process",
      image:
        "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1733961600&v=beta&t=QAVJq2SBzExTR6DnJMoKeCzcm3E_l9pUTC1UHQ2ZG7Y",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hackerrank.com/certificates/c4ee0f228461",
        },
      ],
    },
    {
      title: "SQL (Basic)",
      dates: "March 2023",
      location: "Remote",
      description:
        "Issued by HackerRank for completing the levels during the learning process",
      image:
        "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1733961600&v=beta&t=QAVJq2SBzExTR6DnJMoKeCzcm3E_l9pUTC1UHQ2ZG7Y",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hackerrank.com/certificates/cd374b026d0a",
        },
      ],
    },
    {
      title: "Google Data Analytics Certificate",
      dates: " Issued on October 2022",
      location: "Remote",
      description:
        "For Details click on Show Credential button",
      image:
        "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1733961600&v=beta&t=yrvzYS6CyS7jahwqvetli83vjChB6I8TGbqBMNP9sFE",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/29855888-1a27-4e7a-b1c5-d05a53db20c1/linked_in_profile",
        },
      ],
    },
  ],
} as const;
