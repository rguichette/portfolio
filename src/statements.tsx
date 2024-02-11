import { InfoCardArgs } from "./state";

type Involvement = { [key in "globe" | "table" | "board"]: InfoCardArgs };
type Skills = { [key in "gopher" | "python" | "overview"]: InfoCardArgs };
type Data = { [key in "data_overview" | "graph"]: InfoCardArgs };
type Projects = {
  [key in
    | "ridPost"
    | "ridAccount"
    | "dashboard"
    | "kelescope"
    | "overview"]: InfoCardArgs;
};

type Summaries = {
  involvement: Involvement;
  skills: Skills;
  data: Data;
  projects: Projects;
};

let summaries: Summaries = {
  involvement: {
    globe: {
      title: "Joyful Impact",
      display: true,
      learnMore: false,
      summary:
        "For over eight years, I have volunteered at the library, collaborating with people from around the world. I've discovered the joy of witnessing people's growth in  mathematics, English, and programming. I've been privileged to assist individuals on various subjects.",
    },
    table: {
      title: "teaching",
      display: true,
      learnMore: false,
      summary: "class is in session",
    },
    board: {
      title: "board",
      display: true,
      learnMore: false,
      summary: "lesson plan",
    },
  },
  skills: {
    gopher: {
      title: "Gopher",
      display: true,
      learnMore: false,
      summary:
        "Worked on various projects, learning how much golang shines when it comes to cuncurrency ",
    },
    python: {
      title: "Productivity",
      display: true,
      learnMore: false,
      summary:
        "Optimize time management by harnessing Python libraries to automate repetitive tasks, thereby enhancing efficiency.",
    },
    overview: {
      title: "Quest",
      display: true,
      learnMore: false,
      summary: "Data, visuals, automation to tell a story.",
    },
  },
  data: {
    data_overview: {
      title: "Analytics",
      display: true,
      learnMore: false,
      summary:
        "Scrapy and Selenium to scrape data, then using Pandas alongside other tools to understand what the data is saying.",
    },
    graph: {
      title: "Insights",
      display: true,
      learnMore: false,
      summary:
        "Proficient in utilizing scraping tools followed by data manipulation with Pandas and visualization with Seaborn to craft compelling visual narratives employing diverse filtering methodologies.",
    },
  },
  projects: {
    overview: {
      title: "Harmony",
      display: true,
      learnMore: false,
      summary:
        "Skilled in facilitating effective communication, coordinating efforts, and promoting synergy among team members to achieve shared goals efficiently and with excellence. ",
    },

    dashboard: {
      title: "Dashboard",
      display: true,
      learnMore: false,
      summary: "A dashboard built using React. Able to view on linkedIn",
    },
    ridPost: {
      title: "Rid Post",
      display: true,
      learnMore: false,
      summary:
        "Part of a React-Native journey I decided to take in order to build mobile apps.",
    },
    ridAccount: {
      title: "Rid Account",
      display: true,
      learnMore: false,
      summary:
        "Learned about securing data when sending sensitve data through the web",
    },
    kelescope: {
      title: "Kelescope",
      display: true,
      learnMore: false,
      summary:
        "Kelescope project made in glsl for graphics programming. Needed to understand this in order to know which direction to take this current project. I still have a lot to learn, and I'm aiming to understand this technology more. ",
    },
  },
};

export default summaries;
