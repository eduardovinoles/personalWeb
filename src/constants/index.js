import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  nodejs,
  swiftui,
  uikit,
  react,
  reactnative,
  agile,
  appstore,
  aws,
  git,
  git2,
  vscode,
  neme,
  meli,
  magda,
  dani,
  mauri,
  cata,
  zipe1,
  zipe2,
  zipe3,
  zipe4,
  zipe5,
  zipe6,
  zipe7,
  zipe8,
  zipeBG,
  indulge1,
  indulge2,
  indulge3,
  indulge4,
  indulge5,
  indulgeBG,
  fit1,
  fit2,
  fit4,
  crami1,
  crami2,
  crami3,
  crami4,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  tag6,
  more,
  cramiV3,
  driverV1,
  indulgeV1,
  cramiV1,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "about",
    url: "/#about",
  },
  {
    id: "1",
    title: "mywork",
    url: "/#mywork",
  },
  {
    id: "2",
    title: "testimonials",
    url: "/#testimonials",
  },
];

export const work1 = [zipe1, zipe5, zipe6, zipe7, zipe8];
export const work1BG = zipeBG;
export const work1Icons = [uikit, aws, nodejs];

export const work2 = [indulge1, indulge3, indulge4, indulge5];
export const work2BG = indulgeBG;
export const work2Icons = [uikit, aws, nodejs];

export const work3 = [fit1, fit2, fit4];
export const work3BG = indulgeBG;
export const work3Icons = [uikit, aws, nodejs];

export const work4 = [crami1, crami2, crami3, crami4];
export const work4BG = crami4;
export const work4Icons = [uikit, aws, nodejs];

export const work5 = [tag1, tag2, tag3, tag4, tag5];
export const work5BG = zipeBG;
export const work5Icons = [react, aws, nodejs];

export const work6 = [zipe1, zipe5, zipe6, zipe7, zipe8];
export const work6BG = zipeBG;
export const work6Icons = [swiftui];

export const videoSlides = [cramiV1, driverV1, indulgeV1];

export const heroIcons = [agile, notion, appstore, figma];

export const notificationImages = [notification4, notification3, notification2];

export const moreComming = more;

export const companyLogos = [
  swiftui,
  uikit,
  nodejs,
  react,
  reactnative,
  aws,
  git2,
  vscode,
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: "work3",
    title: "Fitness app (USA)",
    text: "Developed a personal training app featuring videos and daily routines. Responsible for creating the app using UIKit, tailored to the US market.",
    backgroundUrl: benefitCard1, //"assets/benefitsImage/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: fit2,
  },
  {
    id: "work4",
    title: "Crami app (Uruguay)",
    text: "Built a medical app for user self-management, allowing users to schedule and pay for medical appointments, purchase medications, view lab results, and receive push notifications. Implemented Fiserv payment functionality.",
    backgroundUrl: benefitCard2, //"assets/benefitsImage/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: crami1,
    light: true,
  },
  {
    id: "work5",
    title: "Crami Tag app (Uruguay)",
    text: "The Crami Tag App, built in React with a serverless backend, is deployed on hospital Totems to help users announce their arrival, pay medical bills, and request services in areas like Pharmacy and Admissions. It also assists hospital staff in managing and calling patients via a monitor display, improving efficiency and communication.",
    backgroundUrl: benefitCard3, //"assets/benefitsImage/card-3.svg",
    iconUrl: benefitIcon2,
    imageUrl: tag1,
  },
  {
    id: "work1",
    title: "Taxi app (UK)",
    text: "Developed a ride-sharing app for transporting children to and from school. The app allows drivers to view, accept, or reject jobs, manage real-time trips, and access optimal routes and maps. Technologies: SwiftUI.",
    backgroundUrl: benefitCard4, //"assets/benefitsImage/card-4.svg",
    iconUrl: benefitIcon2,
    imageUrl: zipe6,
    light: true,
  },
  {
    id: "work2",
    title: "Beauty app (USA)",
    text: "Created a retail app for the personal care market, connecting beauty salons with clients. Implemented payment functionality for customers using Square, Venmo, and Stripe SDKs.The app allows business owners to manage bookings, payments, and promotions, while customers can book treatments, pay, and share experiences",
    backgroundUrl: benefitCard5, //"assets/benefitsImage/card-5.svg",
    iconUrl: benefitIcon2,
    imageUrl: indulge3,
  },
  {
    id: "work6",
    title: "More coming soon",
    text: "Working on a bunch of cool projects—can’t wait to share them with you soon!.",
    backgroundUrl: benefitCard6, //"assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const testimonials = [
  {
    name: "Juan Peon",
    role: "Lead Developer",
    avatar: neme,
    opinion: `Eduardo was super committed to the program, applying himself with outstanding responsibility and dedication. <br />  He's a super fast learner, never faltered during the intensive process and a pleasure to work with.  <br />I totally recommend Eduardo for a junior JS/frontend position in any company.`,
  },
  {
    name: "Melani Lopez",
    role: "HR Analyst at Tarmac.IO",
    avatar: meli,
    opinion: `Eduardo was part of the Tarmac Internship program in 2021. <br />He was very participative in the classes and meetings, always very predisposed to learning new things. I highlight his commitment, participation and communication`,
  },
  {
    name: "Magdalena Ezeiza",
    role: "CFO | COO @ Tarmac",
    avatar: magda,
    opinion: `Eduardo was part of the Tarmac Internship program. He is an enthusiastic student,<br /> always willing to learn new technologies and really proactive towards new experiences and knowledge.<br />I believe he is a great asset to any team due to his attitude and approach to the new opportunities`,
  },
  {
    name: "Daniel Servidie",
    role: "Software Developer",
    avatar: dani,
    opinion: `I worked with Eduardo during Tarmac's internship program, and I were able to see him outdo himself day by day.<br /> He put a lot of enthusiasm and dedication and quickly mastered the skills that were being taught to him, and helping his classmates to keep up with the program. <br />He quickly learned web development skills, like Vue.js framework and Nuxt.js. He also ventured to learn other skills on his own in his spare time, such as Node.js and others. <br />I would definitely like to have him on my team!`,
  },
  {
    name: "Mauricio Souto",
    role: "Co-Founder Spiria",
    avatar: mauri,
    opinion: `Eduardo joined Tarmac as part of our internship program, and I had the chance to work with him for almost a year!<br /> I'm amazed on how quickly he adapted to our way of work, and how committed he was with the project all the way.<br /> Eduardo is a persons that I found easy to work with, always eager to learn new things, proactive and hard working. From a technical point of view, he has quickly learned JS/HTML/CSS skills.<br />Eduardo has a lot of potencial and was a pleasure to work with him!`,
  },
  {
    name: "Catalina Tuyaré Scuadroni",
    role: "Sales Development Representative at Nublit",
    avatar: cata,
    opinion: `Eduardo worked with me on the development of an application for a healthcare project, and he was an exceptional teammate.<br /> As a programmer, he demonstrated outstanding technical expertise, applying his knowledge with precision and effectively solving complex problems while meeting all deadlines.<br /> In addition, Eduardo stood out for his collaborative attitude and willingness to work as part of a team. He was always open to listening to ideas, suggesting improvements, and sharing his expertise, which significantly contributed to the project's success`,
  },
];
