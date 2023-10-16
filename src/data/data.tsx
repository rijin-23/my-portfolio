import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  /*BuildingOffice2Icon,*/
  CalendarIcon,
  ComputerDesktopIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
/*import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';*/
import heroImage from '../images/header-background.webp';
/*import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';*/
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
/*import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';*/
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rijin Thomas Portfolio',
  description: "A portfolio website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Rijin Thomas.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Tampa based <strong className="text-stone-100">Data Scientist</strong>, currently working and studying
        at <strong className="text-stone-100">University of South Florida</strong> helping build a report for
        the city of Tampa under Professors of USF.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me reading <strong className="text-stone-100">Fictional Books</strong>,
        cooking <strong className="text-stone-100">Indian Food</strong>, or exploring beautiful city of{' '}
        <strong className="text-stone-100">Tampa and St. Petersburg</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/uc?export=download&id=1PjP3vQUV5KnqhoBtrIgU2B3fXNJwf_Gq',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a data scientist with a passion for exploring and finding insights from complex and diverse datasets. I have experience in using Python, SQL, R and Power BI to perform data analysis, visualization and machine learning tasks. I enjoy learning new skills and tools to enhance my data science capabilities. I also have a never give up attitude that helps me overcome challenges and deliver high-quality results.
  `,
  aboutItems: [
    {label: 'Location', text: 'Tampa, FL', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Hiking, MMA, Skateboarding', Icon: SparklesIcon},
    {label: 'Study', text: 'University of South Florida', Icon: AcademicCapIcon},
    {label: 'Degree', text: 'Masters in Business Analytics and Information Systems', Icon: ComputerDesktopIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'Malayalam',
        level: 8,
      },
      {
        name: 'Marathi',
        level: 5,
      },
    ],
  },
  {
    name: 'Coding Languages',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'R Programming',
        level: 5,
      },
      {
        name: 'Java',
        level: 5,
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Power BI',
        level: 8,
      },
      {
        name: 'Tableau',
        level: 5,
      },
      {
        name: 'Databricks',
        level: 3,
      },
    ],
  },
  {
    name: 'Model Deployment',
    skills: [
      {
        name: 'AWS',
        level: 8,
      },
      {
        name: 'Flask',
        level: 6,
      },
      {
        name: 'Heroku',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
/*  {
    title: 'California Housing Data Analysis',
    description: 'A data analysis of the housing data of California and an attempt to predict the Median House Value using Regression Techniques.',
    url: 'https://github.com/rijin-23/California-Housing-Data-Analysis',
    image: porfolioImage1,
  },
/*  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },

  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
*/  {
    title: 'California Housing Data Analysis and Prediction',
    description: 'A data analysis of the housing data of California and an attempt to predict the Median House Value using Regression Techniques.',
    url: 'https://github.com/rijin-23/California-Housing-Data-Analysis',
    image: porfolioImage9,
  },
  {
    title: 'Football Data Analysis',
    description: 'Analysis of European Football leagues from 2014 to 2020. Data can be filtered on the basis of season year and League name',
    url: 'https://github.com/rijin-23/Football-Data-Analysis',
    image: porfolioImage8,
  },
/*  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
*/  {
    title: 'Optical Character Recognition',
    description: 'A project that utilizes OpenCV and PyTesseract to recognize handwritten characters and converts into Digital data',
    url: '',
    image: porfolioImage10,
  },
/*  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
*/
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected 2025',
    location: 'University of South Florida',
    title: 'Masters in Business Analytics and Information Systems',
    content: <p>One of the most valuable skills I acquired at USF was data mining. I learned how to extract, transform and analyze large and complex datasets using various tools and techniques. I also gained proficiency in R, a powerful programming language for statistical computing and graphics. Additionally, I studied advanced database management systems, such as SQL, and cloud-based solutions, and how to design, implement and optimize them for different applications and scenarios.</p>,
  },
  {
    date: 'May 2021',
    location: 'Deogiri Institute of Engineering and Management Studies',
    title: 'Computer Science and Engineering',
    content: <p>DIEMS provided me with a comprehensive education in various aspects of computer science, such as data structures, operating systems, data science, and cloud computing. I gained valuable skills and knowledge that prepared me for the challenges and opportunities in the field.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2021 - July 2023',
    location: 'Accenture India',
    title: 'Application Development Analyst',
    content: (
      <p>
        • Leveraged the advanced capabilities of Power BI to create interactive dashboards and reports that effectively convey complex 
        data insights to stakeholders of Eversource Energy. Employed data collection and analysis techniques from a variety of sources 
        to identify trends and patterns.
        <br></br>
        • Exhibited expertise in data cleaning and preprocessing techniques to ensure accuracy and consistency of data. Employed 
        advanced data analysis tools to identify and correct data inconsistencies.
        <br></br>
        • Maintained data privacy and security by implementing measures such as data encryption and access control. Demonstrated 
        expertise in data privacy and security best practices.
        <br></br>
        • Enhanced the efficiency of a “Storm Health Check” process by developing and automating it from scratch using Python libraries. 
        This automation has resulted in a daily time-saving of approximately 10 minutes.
      </p>
    ),
  },
  {
    date: 'April 2021 - September 2021',
    location: 'Bitwise India',
    title: 'Project Trainee',
    content: (
      <p>
        • Spearheaded the design, development, testing, and maintenance of data warehouses using cutting-edge ETL tools such as 
        AbInitio and AWS Snowflake.
        <br></br>
        • Displayed expertise in designing and executing data models that are optimized for performance and scalability.
        <br></br>
        • Managed databases by creating and maintaining database schemas, optimizing database performance, and ensuring data security.
        <br></br>
        • Communicated effectively and collaborated with stakeholders, including business users, data analysts, and other members of the 
        development team of Discover Financial Services. Translated complex technical concepts into clear and concise language.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Sangeetha Sheth (Application Development Senior Manager @ Accenture)',
      text: 'Rijin is a highly professional and adaptable individual who has demonstrated his ability to learn new technologies and work efficiently.',
      image: 'https://th.bing.com/th/id/R.d2d43cfd25adce11daa6dac484443581?rik=RMRW2hQgxCLIQw&riu=http%3a%2f%2fschloemerbusiness.com%2fwp-content%2fuploads%2f2017%2f02%2fbusinesswoman.png&ehk=pM1Li3IH7NGdcbFovcmAGJ994fLoTtStNqKuxHbWbgQ%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      name: 'Sanjay Kalyankar (HOD, Computer Science and Engineering @ DIEMS',
      text: 'Perseverance, determination, inventiveness and hard work have always been the traits of Rijin that have always made him shine in the college.',
      image: 'https://cdn3d.iconscout.com/3d/premium/thumb/businessman-2873051-2384305@0.png',
    },
  /*  {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },*/
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can reach out to me by any of the below methods.',
  items: [
    {
      type: ContactType.Email,
      text: 'rijin232@gmail.com',
      href: 'mailto:rijin232@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Tampa FL, USA',
      href: 'https://www.google.com/maps/place/Tampa,+FL/@27.9946875,-82.6190928,11z/data=!3m1!4b1!4m6!3m5!1s0x88c2b782b3b9d1e1:0xa75f1389af96b463!8m2!3d27.9516896!4d-82.4587527!16zL20vMG4xcmo?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@thomas_rijin_23',
      href: 'https://www.instagram.com/thomas_rijin_23/',
    },
    {
      type: ContactType.Github,
      text: 'rijin-23',
      href: 'https://github.com/rijin-23',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rijin-23'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/rijin-thomas/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/thomas_rijin_23/'},
];
