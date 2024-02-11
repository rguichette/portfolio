export type SkillCategory = "frontEnd" | "backend" | "mobile" | "data";

export type SkillDetails = {
  technology: string;
  summary: string;
};

export type SkillDetailsList = {
  [category in SkillCategory]: SkillDetails[];
};

export let skillsDetailsList: SkillDetailsList = {
  frontEnd: [
    {
      technology: "React",
      summary:
        "React development is a joy; the speed at which I can craft a fully-featured page without repetitive component rewriting not only unleashes my creativity but also lets me do so without feeling overwhelmed. It's a dynamic blend of efficiency and creative freedom.",
    },
  ],
  backend: [
    {
      technology: "NodeJs",
      summary:
        "Node.js transformed JavaScript into a coherent powerhouse for me. Navigating the Stripe API, communicating with MongoDB and Redis for data, and ensuring speed, efficiency, and security can swiftly become chaotic without tapping into the prowess of promises and asynchronous techniques. ",
    },

    {
      technology: "MongoDB",
      summary:
        "In today's landscape, data fuels everything we interact with. Mastering the art of storing, updating, and retrieving data marked a pivotal stride in my Node.js learning journey.",
    },
    {
      technology: "Docker",
      summary:
        "Unlocking the potential of this technology hit me when I started using it firsthand. It's like having individual bubbles for each project, where they only share secrets when I say so. This feature proves gold when diving into massive projects, giving the freedom to scale without sweating over hardware details from the get-go. I'm all about building big and complex, making this tech a game-changer in my toolkit.",
    },
    {
      technology: "kubernetes",
      summary:
        "Harnessing pods to dynamically scale based on user demand is a game-changer. While I currently utilize this technology, there's room for improvement to fully unleash its flexibility. I'm actively working on refining its capabilities to align seamlessly with my vision for maximum adaptability.",
    },
  ],
  mobile: [
    {
      technology: "React Native",
      summary:
        "The dynamic evolution of mobile apps demands versatile tools, and having React Native in my arsenal not only instills confidence for my own projects but also empowers me to guide others on their development journey. By leveraging React, I can demonstrate that anyone has the potential to build what they desire, fostering a collaborative and empowering approach to mobile app development.",
    },
  ],
  data: [
    {
      technology: "Selenium",
      summary:
        "I excel in using this tool for data extraction and repetitive tasks, demonstrating my ability to streamline processes efficiently. By automating these tasks, I significantly reduce the risk of errors, showcasing my commitment to precision and efficiency, making me a valuable candidate for optimizing workflows and ensuring accuracy",
    },
  ],
};

//   {
//     technology: "React",
//     summary:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, earum aut! Doloremque quo nemo hic numquam itaque quibusdam modi. Aperiam odio quibusdam perspiciatis aut illo et a quos numquam ipsum.",
//   },
//   {
//     technology: "React",
//     summary:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, earum aut! Doloremque quo nemo hic numquam itaque quibusdam modi. Aperiam odio quibusdam perspiciatis aut illo et a quos numquam ipsum.",
//   },
// ];
