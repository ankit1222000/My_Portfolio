/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Ankit Bhatia',
  title: "Hi all, I'm Ankit",
  subTitle: emoji(
    'A passionate Software Developer 🚀 having an experience of building Web , Mobile and Desktop applications with Angular / JavaScript / HTML/CSS / Nodejs / Java / Python  and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1hRyl_Y_OQ6NHYnMitgKGUBAFLM2NskeQ/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/ankit1222000',
  linkedin: 'https://www.linkedin.com/in/ankit-bhatia12/',
  gmail: 'ankit.bhatia1220@gmail.com',
  instagram: 'https://www.instagram.com/ankit1222000/',
  gitlab: 'https://gitlab.com/ankit.bhatia1220',
  facebook: 'https://www.facebook.com/ankit.bhatia.524/',
  // medium: '',
  // stackoverflow: '',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web , mobile & desktop applications'
    ),
    emoji('⚡ Progressive & Dynamic Web Applications in normal '),
    emoji(
      '⚡ Integration of third party services such as RESTful API/ Git / AWS / Digital Ocean'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'angular',
      fontAwesomeClassname: require('./assets/images/skills/angular.png'),
    },
    {
      skillName: 'html-5',
      fontAwesomeClassname: require('./assets/images/skills/html-5.png'),
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: require('./assets/images/skills/css.png'),
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: require('./assets/images/skills/sass.png'),
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: require('./assets/images/skills/java-script.png'),
    },

    {
      skillName: 'nodejs',
      fontAwesomeClassname: require('./assets/images/skills/nodejs.png'),
    },
    {
      skillName: 'rest-api',
      fontAwesomeClassname: require('./assets/images/skills/api.png'),
    },
    {
      skillName: 'java',
      fontAwesomeClassname: require('./assets/images/skills/java.png'),
    },
    {
      skillName: 'python',
      fontAwesomeClassname: require('./assets/images/skills/python.png'),
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: require('./assets/images/skills/mysql.png'),
    },
    {
      skillName: 'data-structres',
      fontAwesomeClassname: require('./assets/images/skills/ds.png'),
    },
    {
      skillName: 'C',
      fontAwesomeClassname: require('./assets/images/skills/c-prog.png'),
    },

    {
      skillName: 'git',
      fontAwesomeClassname: require('./assets/images/skills/git.png'),
    },

    {
      skillName: 'visual studio code',
      fontAwesomeClassname: require('./assets/images/skills/visual-code.png'),
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, India',
      logo: require('./assets/images/svvv.jpg'),
      subHeader: 'Bachelor of Technology in Computer Science',
      duration: 'June 2017 - April 2021',
      desc: 'Took courses about Software Engineering, Web Development, Operating Systems, ...',
      descBullets: [
        'Participated in various Hackathons and Coding Competitions.',
        'Create several Minor and Major Projects.',
        'Member of Management and Organizing Committee for Cultural & Technical Fests.',
        'Current Grade Point Average (GPA) 8.19',
      ],
    },
    {
      schoolName: 'Gyan Sagar Academy, Ujjain , India',
      logo: require('./assets/images/gsaLogo.png'),
      subHeader: 'Senior Secondary & Higher Secondary',
      duration: 'June 2015 - April 2017',
      desc:
        'Ranked top 10% in the Higher Secondary . Pursued Science Stream in Senior Secondary',
      descBullets: ['Higher Secondary Grade Point Average (GPA) 9.4',
        'Scored 79.2% in Senior Secondary ',
        'Elected as the Best Student Teacher of the School.',
        'Participated in various Inter-School Talk Shows and Extempores'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '70%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '80%',
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Angular Developer Intern',
      company: 'BinaryDots Technologies',
      companylogo: require('./assets/images/BinaryDots.png'),
      date: 'Nov 2020 – Present',
      desc:
        'Angular Development Intern working upon Web Development Technologies like Angular , HTML/CSS ,JavaScript ,TypeScript , Ionic  and Frameworks.',
      descBullets: [
        'Created and Managing  Websites for the Company from Scratch.',
        'Working upon Live Webistes UI/UX Development and Management.',
      ],
    },
    {
      role: 'Angular Industrial Trainee',
      company: 'Eway IT Solutions Pvt. Ltd.',
      companylogo: require('./assets/images/eway.jpg'),
      date: 'June 2020 – Aug 2020',
      desc:
        'Developing Projects using Express Js, Angular Development to create a RESTful API and building dynamic web sites and web applications.',
      descBullets: [
        'Created a MySQL, Angular, Express. js and Node. js based Mobile E-Commerce Store.',
        'Created Node Express.js API that performs basic CRUD operations on a particular Student with a relational database.',
      ],
    },
    {
      role: 'Python Programming Training',
      company: 'Medha Innovation and Development',
      companylogo: require('./assets/images/Medha.png'),
      date: 'Jan 2020 – Feb 2020',
      desc:
        'Development using Python Programming with Practical Cases , Competitive Programming using Python Data Structures, Packages & Modules.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'ankit1222000', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Badges and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'HackerRank Gold Badge ',
      subtitle:
        'Hacker Rank Gold Badge in Competitive Programming and Problem Solving using Python',
      image: require('./assets/images/HackerRank.jpg'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://www.hackerrank.com/certificates/ad5aa4177182',
        },
        {
          name: 'Badges',
          url:
            'https://www.hackerrank.com/dr_ankit1234?badge=python&stars=5&level=3&hr_r=1&utm_campaign=social-buttons&utm_medium=linkedin&utm_source=badge_share&social=linkedin',
        },

      ],
    },
    {
      title: 'RESTful API with HTTP and JavaScript',
      subtitle:
        'Certification on RESTful API with HTTP and JavaScript on Coursera',
      image: require('./assets/images/Coursera.png'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/1v6oTbD8SZEq_SnOy_Mj4pNbtPrrENnyr/view?usp=sharing',
        },
      ],
    },

    {
      title: 'Career Edge by Tata Consultancy Services',
      subtitle: 'Completed Certifcation on Industry Oriented Soft Skills',
      image: require('./assets/images/tcs.jpg'),
      footerLink: [
        { name: 'Certification', url: 'https://drive.google.com/file/d/1ChuRR8fOm_YNs_jlFL3FVY75FQ_mJDX1/view?usp=sharing' },
       
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to read about tech 💻, gaming 🎮 and entertainment 🍿',

  blogs: [
    {
      url:
        'https://medium.com/javascript-in-plain-english/the-good-and-bad-of-angular-development-f48ac045d556#:~:text=Angular%20is%20the%20most%20popular,%2Duse%2C%20and%20maintainable%20codes.',
      title: 'The Good and Bad of Angular Development',
      description:
        'How is Angular the most popular framework and ranks in the top five amongst other web app development frameworks.?',
    },
    {
      url: 'https://www.thegamer.com/best-ubisoft-games-metacritic/',
      title: 'Games to Play OverNight if you are a Developer',
      description:
        'Ubisoft Developers who constantly puts out tons of video game content. Chances are one of their games is sitting in your library',
    },
    {
      url: 'https://www.thrillist.com/entertainment/nation/best-sci-fi-tv-shows-netflix',
      title: 'Best Sci-Fi Tv Shows to All Time',
      description:
        'Travel to another dimension with these mind-bending series.The addictive intrigue of sci-fi show means that when youre finished with one, youre left wanting more, more, more',
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: '',
      subtitle: '',
      slides_url: '',
      event_url: '',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Listen to My Favs 🎧'),
  subtitle: 'LIGHTEN YOUR MOOD , LETS GROOVE-UP TOGETHER 💃🏼 🕺🏼',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://open.spotify.com/embed/playlist/05vLcLsdaxixIp3qteEYDC',
    'https://open.spotify.com/embed/playlist/37i9dQZF1DX8xfQRRX1PDm'
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hii ? My Inbox is open for all.',
  number: '+91-8770795327',
  emailAddress: 'ankit.bhatia1220@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
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
  twitterDetails,
};
