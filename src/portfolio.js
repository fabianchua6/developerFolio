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
  title: 'What I Can Do',
  skills: [
    emoji('⚡ Develop highly interactive Front End / User Interfaces for your web and mobile applications'), 
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'), 
    emoji('⚡ Integration of third party services such as Firebase / AWS')
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js'
    }, {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5'
    }, {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt'
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

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: 'Data Maintenance Intern',
      company: 'OCBC Bank',
      companylogo: require('./assets/images/ocbc.png'),
      date: 'Sep 2018 – Feb 2019',
      desc1: 'Streamline tedious processes using VBA for Excel to update system database.',
      desc2: 'First bank in Singapore to utilize MyInfo from SingPass for instantaneous account opening.'
    },
    {
      role: 'Data Administrator',
      company: 'Heinemann Asia Pacific',
      companylogo: require('./assets/images/hap.png'),
      date: 'May 2019 - Jul 2019',
      desc1: 'Setup framework to restructure data for data cleansing.',
      desc2: 'Accurate data allows for transactions to be processed automatically on a timely basis.'
      }, 
      {
        role: 'Army Digital Specialist',
        company: 'Army Digitalisation Office',
        companylogo: require('./assets/images/armyDO.png'),
        date: 'Apr 2020 – May 2021',
        desc1: 'Involved in ideation of innovative ideas to digitalise Army wide processes.',
        desc2: 'Development of RPA applications, systems applications and front end UI/UX design.'
      }
  ]
};

// Projects Section

const projectSection = {
  title: 'Projects',
  subtitle: 'My personal projects as well as voluntary projects helping those in need.',

  projects: [
    {
      url: 'https://t.me/owadiobot/',
      image: require('./assets/images/owadioBot.png'),
      date: 'Mar 2020',
      tag: ' Telegram Chatbot',
      title: 'OWADIO Bot',
      description: 'My first project made with Python. A chatbot that allows users to countdown to their ORD date (end of National Service for all men in Singapore).',
      type: 'Try It Out!'
    }, {
      url: 'https://t.me/ArmyCAT1',
      image: require('./assets/images/armyCAT1.jpg'),
      date: 'Nov 2020',
      tag: 'CAT 1 Status Channel',
      title: 'Army CAT 1 Info Channel',
      description: 'Web-scraping bot that informs user through Telegram if there is a lightning risk in their area.',
      type: 'Check It Out!'
    }, {
      url: 'https://elearn.hackwagon.com/projects/YHuf5FtuuB34Ym8jz',
      image: require('./assets/images/sentimentalAnalysis.png'),
      date: 'July 2020',
      tag: 'Machine Learning & Natural Language Processing',
      title: 'Sentiment Analysis of COVID-19 Tweets',
      description: 'Analysis on how Singapore is feeling towards critical COVID 19 Events.',
      type: 'Project'
    }, {
      url: 'https://callhome.sg/',
      image: require('./assets/images/callHome.png'),
      date: 'Sep 2020',
      tag: 'Voluntary Project',
      title: 'callhome.sg',
      description: 'Call Home is an app for migrant workers to call their families back home from 3G to landline calls.',
      type: 'Check It Out!'
    }, {
      url: 'https://better.sg/',
      image: require('./assets/images/verifact_sg.png'),
      date: 'Oct 2020',
      tag: 'Voluntary Project',
      title: 'VeriFact.sg',
      description: 'VeriFact.sg is a techforgood project by better.sg, it aims to create a crowdsourced fact-checking platform that encourages genuine dialog among users and requires some substantiation of facts to improve media literacy.',
      type: 'Check It Out!'
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
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji('Achievements And Certifications 🏆'),
  subtitle: 'Achievements, Certifications and Recommendations from people that I worked with!',

  achievementsCards: [
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
      subtitle: 'Quantitative Methods & Economics',
      image: require('./assets/images/npLogo.png'),
      footerLink: [
        {
          name: 'Certificate',
          url: require('./assets/files/ngeeannDipPlus.pdf')
        }
      ]
    },
    {
      title: 'Testimonials and Referrals',
      subtitle: 'Companies and Schools',
      image: require('./assets/images/referral.svg'),
      footerLink: [
        {
          name: 'Heinemann AP',
          url: require('./assets/files/heinemannTestimonial.pdf')
        },{
          name: 'Pets Eden',
          url: require('./assets/files/petsedenTestimonial.pdf')
        },{
          name: 'Ngee Ann Polytechnic',
          url: require('./assets/files/ngeeannTestimonial.pdf')
        }
      ]
    }
  ]
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
  workExperiences,
  achievementSection,
  contactInfo,
  projectSection
};
