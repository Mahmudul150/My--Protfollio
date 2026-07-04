import payBillImage from "../assets/projects-photo/Pay-Bill.jpg";
import plantCareImage from "../assets/projects-photo/demo-projects.png";
import ecommerceImage from "../assets/projects-photo/demo-projects-2.png";



export const projects = [
  {
    id: 1,
    title: "Pay Bill Website",
    image: payBillImage,
    description: "Payment web application.",
     overview:
    "Pay Bill Website is a responsive web application where users can pay utility bills easily. The project is built with React, Tailwind CSS and Firebase Authentication.",

  challenges: [
    "Implemented Firebase Authentication.",
    "Created a responsive UI for all devices.",
    "Managed user authentication securely.",
    "Handled dynamic routing and protected pages."
  ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase"
    ],
    liveLink: "https://pay-bill-website.netlify.app/",
    clientGithub: "https://github.com/Mahmudul61/Pay-bill-sites-repo",
    
    
  },
  {
    id: 2,
    title: "Plant Care Tracker",
    image: plantCareImage,
    description: "Plant management web application.",
    overview:
      "A full-featured plant care application where users can add, update, and monitor their plants. Users can also track watering schedules and plant health.",

    challenges: [
      "Implemented CRUD operations.",
      "Integrated Firebase Authentication.",
      "Built responsive layouts using Tailwind CSS.",
      "Managed user-specific plant data.",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Express.js",
    ],

  },
  {
  id: 3,
  title: "E-Commerce Website",
  image: ecommerceImage,
  description: "Modern online shopping platform.",

  overview:
    "A fully responsive e-commerce website where users can browse products, view product details, add items to the cart, and complete purchases through a clean and user-friendly interface.",

  challenges: [
    "Implemented product filtering and searching.",
    "Developed shopping cart functionality.",
    "Created responsive layouts for all devices.",
    "Managed application state efficiently.",
  ],

  technologies: [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Firebase",
  ],
}

];














