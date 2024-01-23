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
        "React React dolor sit amet consectetur adipisicing elit. Fugit, earum aut! React quo nemo hic numquam itaque quibusdam modi. Aperiam odio quibusdam perspiciatis aut illo et a quos numquam ipsum.",
    },
  ],
  backend: [
    {
      technology: "NodeJs",
      summary:
        "NodeJs ipsum NodeJs sit NodeJs consectetur adipisicing elit. Fugit, earum aut! Doloremque NodeJs nemo hic numquam itaque quibusdam modi. Aperiam odio quibusdam perspiciatis aut illo et a quos numquam ipsum.",
    },

    {
      technology: "MongoDB",
      summary:
        "Lorem, MongoDB dolor sit MongoDB consectetur adipisicing elit. Eligendi nisi MongoDB doloribus, odit officia architecto, sed itaque minima velit, dolor placeat sit repellendus quam fuga a qui minus voluptates ea.",
    },
    {
      technology: "Docker",
      summary:
        "<strong class='font-bold '>Docker</strong>  ipsum dolor sit amet Docker adipisicing elit. Perferendis fugiat alias id. Animi labore ratione Docker. Qui id nam veritatis eum dolor deserunt, minus itaque vero et, vitae perferendis hic!",
    },
    {
      technology: "kubernetes",
      summary:
        "Kube ipsum dolor sit amet, consectetur adipisicing elit. Quo quibusdam velit odio quis illo optio esse aliquam maiores, odit eos fugiat! Debitis laborum asperiores quaerat cum laudantium nobis. Consequuntur, ratione!",
    },
  ],
  mobile: [
    {
      technology: "React Native",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, incidunt doloribus mollitia ipsam, a quod magni dignissimos dolore recusandae ratione commodi iste eveniet, at quidem illo. Odio officia illum temporibus!",
    },
  ],
  data: [
    {
      technology: "Selenium",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sint reprehenderit aliquid quia maiores animi soluta veniam, commodi obcaecati suscipit labore at magni atque deserunt eius quis dolorem dolores harum.",
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
