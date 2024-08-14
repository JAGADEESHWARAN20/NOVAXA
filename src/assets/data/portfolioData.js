import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.png";
import portfolioImg04 from "../images/portfolio-04.png";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "web-design",
    title: "Movie App Website using TMBD API",
    description:
      "The Movie App Website allows users to explore movies using the TMBD API. It offers a user-friendly interface for browsing and searching movies. It also sends a Telegram link to users who fill out a form, enabling direct movie downloads. Built with React, SCSS, and JavaScript. Discover and access your favorite movies on the live site.",
    technologies: ["React", "SCSS", "TMBD API", "JavaScript"],
    siteUrl: "https://movie-r-app.vercel.app/",
    siteButton: "Live Site",
  },

  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Python",
    title: "Resume Generator Using Python",
    description:
      "The Resume Generator Using Python automates creating professional resumes. Users input personal info and get well-formatted PDF resumes. It uses Python, ttkBootstrap, MongoDB/SQLite, and PDF libraries. Effortlessly generate customized resumes. Visit GitHub for more info and to try it out!",
    technologies: ["Python", "MongoDB", "SQLite", "PDF", "ATS"],
    siteUrl: "https://github.com/JAGADEESHWARAN20/Resume-Generator",
    siteButton: "View Page",
  },
  

  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Cryptography",
    title: "Encrypt Your Image",
    description: "This Image Encryption application is built using Python, Tkinter, and the image library. It utilizes the Triple DES algorithm to encrypt and decrypt images securely. With this application, you can protect your sensitive images by encrypting them with a strong encryption algorithm. Safeguard your images and keep them secure with this Image Encryption application.",
    technologies: ["Python", "tkinter", "Three DES","Encryption"],
    siteUrl: "https://github.com/JAGADEESHWARAN20/ImageEncryption",
    siteButton:'View Page',
  },

  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "web-design",
    title: "Simple Portfolio",
    description:
      " Here, I proudly present my projects and demonstrate my skills in web development. With a strong passion for creating user-friendly and visually appealing websites. Feel free to explore and discover the work I've done. If you have any inquiries or collaboration opportunities, don't hesitate to get in touch with me. Let's create something amazing together!",
    technologies: ["HTML", "CSS", "Vanilla JS","AOS scroll", "Email JS"],
    siteUrl: "https://jagadeesh-me.netlify.app/",
    siteButton:'Live Site',
  },
  
];

export default portfolios;
