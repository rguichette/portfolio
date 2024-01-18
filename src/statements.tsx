import { InfoCardArgs } from "./state";

const summeries: { [key in "Involvement" | "skills" | "data"]: InfoCardArgs } =
  {
    Involvement: {
      display: true,
      title: "involvement",
      summary: "...getting involved...",
      learnMore: false,
    },
    skills: {
      display: true,
      title: "skills",
      summary: "... skills ",
      learnMore: true,
    },
    data: {
      display: true,
      title: "data",
      summary: "... data is beutiful ",
      learnMore: true,
    },
  };

export default summeries;
