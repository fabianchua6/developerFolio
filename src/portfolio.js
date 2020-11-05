/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from 'react-easy-emoji';

const greeting = {
  /* Your Summary And Greeting Section */
  username: 'Fabian Chua',
  title: 'Hi, I\'m Fabian',
  subTitle1: emoji('I am a budding programmer. 🚀'),
  subTitle2: 'I have an interest towards simplifying life through technology to make the world a better place. Connect with me below!',
  resumeLink: 'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing' // TODO:
};

// Your Social Media Link

const socialMediaLinks = {
  github: 'https://github.com/fabianchua6',
  linkedin: 'https://www.linkedin.com/in/fabianchua6/',
  gmail: 'fabianchua6@gmail.com',
  telegram: 'https://t.me/fabianchua6' // TODO:
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section
// TODO:
const skillsSection = {
  title: 'What I Do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji('⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'), emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'), emoji('⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean')
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5'
    }, {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt'
    }, {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js'
    }, {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react'
    }, {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node'
    }, {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm'
    }, {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database'
    }, {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws'
    }, {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire'
    }, {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python'
    }, {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker'
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: 'Ngee Ann Polytechnic',
      logo: require('./assets/images/ngeeannLogo.png'),
      subHeader: ['Diploma in Business Studies, Entrepreneurship'],
      duration: '2016 - 2019',
      desc: 'Active leader in various school-wide projects and voluntary trips',
      descBullets: ['Diploma Plus in Quantitative Methods & Economics', 'Relevant Distinctions: Business Analytics A+, Decision Support Applications A']
    }, {
      schoolName: 'Stanford University',
      logo: require('./assets/images/stanfordLogo.png'),
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'September 2013 - April 2017',
      desc: 'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit']
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: []
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Army Digital Specialist',
      company: 'Army Digitalisation Office',
      companylogo: require('./assets/images/armyDO.png'),
      date: 'Apr 2020 – May 2021',
      desc1: 'My responsibilities mainly revolves around accounting and planning of the grooming/transportation schedule. ',
      desc2: 'If I am not busy replying customer\'s enquiries or checking up on the pets, I was often working on improving the workflow.'
    },
    {
      role: 'Data Administrator',
      company: 'Heinemann Asia Pacific',
      companylogo: require('./assets/images/hap.png'),
      date: 'May 2019 - Jul 2019',
      desc1: 'Setup framework to restructure data for data cleansing.',
      desc2: 'Accurate data allows for transactions to be processed automatically on a timely basis.',
      descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit']
    }, {
      role: 'Data Maintenance Intern',
      company: 'OCBC Bank',
      companylogo: require('./assets/images/ocbc.png'),
      date: 'Sep 2018 – Feb 2019',
      desc1: 'Streamline tedious processes from data creation, updates and deletion using VBA for Excel. Weekly team reporting using Tableau to present in a visually appealing manner. Concurrently, I also participated in various projects. Particularly, the setting up of an AiO form which allows consumers to retrieve MyInfo data using their SingPass to update their personal particulars. This reduces the amount of paperwork and provides convenience to consumers.'
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'saadpasta', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true' // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: 'Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/'
    }, {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/'
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji('Achievements And Certifications 🏆'),
  subtitle: 'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achivementsCards: [
     {
      title: 'Hackwagon Academy',
      subtitle: 'DS101 & DS102: Certificate of Distinction',
      image: require('./assets/images/hackwagon.png'),
      footerLink: [
        {
          name: 'DS101',
          url: 'https://elearn.hackwagon.com/certificate/MeueQ64w4ZL2uybdT'
        },{
          name: 'DS102',
          url: 'https://elearn.hackwagon.com/certificate/MPxK3xRheQ2kA8KjS'
        },{
          name: 'Final Project',
          url: 'https://elearn.hackwagon.com/projects/YHuf5FtuuB34Ym8jz'
        }
      ]
    },
    {
      title: 'Ngee Ann Diploma Plus',
      subtitle: 'v cool!',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'placeholders',
          url: ''
        }, {
          name: 'placeholder',
          url: ''
        }, {
          name: 'Google Code-in Blog',
          url: 'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html'
        }
      ]
    }, {
      title: 'Google Assistant Action',
      subtitle: 'deblop',
      image: require('./assets/images/mos.png'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url: ''
        }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {
  viewBlogs: false,

  title: 'Blogs',
  subtitle: 'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [  ]
};
// Projects Section

const projectSection = {

  title: 'Projects',
  subtitle: 'With Love for Developing cool stuff, I love to do projects.',

  projects: [
    {
      url: 'https://t.me/owadiobot/',
      image: require('./assets/images/owadioBot.png'),
      date: '01 Mar 2019',
      tag: ' Project 1',
      title: 'OWADIO Bot',
      description: 'My first project made with Python. A chatbot that allows users to countdown to their ORD date (end of National Service for all men in Singapore).',
      type: 'Try It Out!'
    }, {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      date: '02 Test 2019',
      tag: 'CAT 1 Status Channel',
      title: 'Army CAT 1 Info Channel',
      description: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris.',
      type: 'Check it out!'
    }, {
      url: 'https://elearn.hackwagon.com/projects/YHuf5FtuuB34Ym8jz',
      image: require('./assets/images/sentimentalAnalysis.png'),
      date: '03 weird 2019',
      tag: '3rd Bitch',
      title: 'Sentiment Analysis of COVID-19 Tweets',
      description: 'Analysis on how Singapore is feeling towards critical COVID 19 Events.',
      type: 'Project'
    }, {
      url: 'https://callhome.sg/',
      image: require('./assets/images/callHome.png'),
      date: 'Oct 2019',
      tag: 'Voluntary Project',
      title: 'callhome.sg',
      description: 'Call Home is an app for migrant workers to call their families back home from 3G to landline calls.',
      type: 'Project'
    }
  ]
};

// Talks Sections

const talkSection = {
  viewTalks: false,
  title: 'TALKS',
  subtitle: emoji('😅'),

  talks: [
  ]
};

// Podcast Section

const podcastSection = {
  viewPodcast: false,
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: []
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle: 'Discuss a project or just want to say hi? My Inbox is open for all.',
  email_address: 'fabianchua6@gmail.com'
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  projectSection
};
