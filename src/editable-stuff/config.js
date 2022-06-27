// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ganesh",
  middleName: "",
  lastName: "Kharche",
  message: " Software Engineer | Fullstack Developer | Sports Person | Gamer ",
  subtitle: " Let's create Magic!!! ",
  icons: [{
      image: "fa-github",
      url: "https://github.com/ganesh-kharche",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/gkharche1/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/ganeshkharche",
    },
    {
      image: "fa-linkedin",
      url: "https://linkedin.com/in/ganesh-kharche-aa3173a1",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/ganeshkharche7",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/ganeshkharche.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://drive.google.com/file/d/17UQAwNAWHaqsx4iev0lcmWsEYK3waplZ/view?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ganeshkharche.png"),
  imageSize: 375,
  message: "My name is Ganesh Kharche. I’m a Computer Engineering graduate of 2015 from Sushila Devi Bansal College of Technology, Indore. Having well-developed skills in Agile methodology and proficient in variety of platforms and programming languages with an innate ability to learn and master new technologies. In my leisure hours I like to play sports and video games.",
  resume: "https://drive.google.com/file/d/17UQAwNAWHaqsx4iev0lcmWsEYK3waplZ/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ganesh-kharche",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Achievements",
  message: "I have received appriciation from employer as well as clients for the extraordinary performance and problem solving skills which interns helped organization for achieving overall goals.",
  images: [{
      img: require("../editable-stuff/nodeJs_HackerRank.png"),
      label: "First slide label",
      paragraph: ""
    },
    {
      img: require("../editable-stuff/star_certificate.png"),
      label: "Second slide label",
      paragraph: "Star performer award"
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [{
      name: "Data Structures",
      value: 80
    },
    {
      name: "JavaScript",
      value: 92
    },
    {
      name: "NodeJS",
      value: 90
    },
    {
      name: "MongoDB",
      value: 70
    },
    {
      name: "Angular",
      value: 75
    },
    {
      name: "SQL",
      value: 75
    },
    {
      name: "React",
      value: 75
    },
    {
      name: "HTML/CSS",
      value: 60
    },
    {
      name: "ArangoDB",
      value: 70
    },
    {
      name: "PHP",
      value: 50
    },
    {
      name: "Cloud Platforms(AWS, GCP)",
      value: 50
    },
    {
      name: "Third Party Integrations",
      value: 90
    },
  ],
  softSkills: [{
      name: "Goal-Oriented",
      value: 90
    },
    {
      name: "Collaboration",
      value: 95
    },
    {
      name: "Positivity",
      value: 85
    },
    {
      name: "Adaptability",
      value: 96
    },
    {
      name: "Problem Solving",
      value: 89
    },
    {
      name: "Creativity",
      value: 90
    },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "I'm interested in challaging work oppertunities as a fullstack JavaScript developer. I am also open for onsite oppertunities. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ganesh.kharche93@yahoo.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [{
      role: 'Software Engineer', // Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences
};