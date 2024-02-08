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
      title: "Globe title",
      display: true,
      learnMore: false,
      summary: "the globe will be the globe",
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
      title: "gopher",
      display: true,
      learnMore: false,
      summary: "let's go!",
    },
    python: {
      title: "AUTOMATE everythng",
      display: true,
      learnMore: false,
      summary: "using python for automation",
    },
    overview: {
      title: "overview",
      display: true,
      learnMore: false,
      summary: "data, visuals, automation to tell any stoy you'd like",
    },
  },
  data: {
    data_overview: {
      title: "Data tools",
      display: true,
      learnMore: false,
      summary: "data is beautiful, isn't it...",
    },
    graph: {
      title: "graph",
      display: true,
      learnMore: false,
      summary: "data speaks",
    },
  },
  projects: {
    overview: {
      title: "Success",
      display: true,
      learnMore: false,
      summary:
        "Working with others and exchanging knowledge usually speeds up bother the learning and the project development process; and that ",
    },

    dashboard: {
      title: "Dashboard",
      display: true,
      learnMore: false,
      summary: "dashboard explained",
    },
    ridPost: {
      title: "ridPos",
      display: true,
      learnMore: false,
      summary: "posting explained",
    },
    ridAccount: {
      title: "ridAccount",
      display: true,
      learnMore: false,
      summary: "ridAccount",
    },
    kelescope: {
      title: "Kelescope",
      display: true,
      learnMore: false,
      summary:
        "Kelescope project made in glsl for graphics programming. Needed to understand this in order to know which direction to take this current project. Everyone say glsl(shaders) are advanced and now I see why.",
    },
  },
};

export default summaries;
