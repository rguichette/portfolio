import { InfoCardArgs } from "./state";

const summeries: { [key in "Involvement" | "skills"]: InfoCardArgs } = {
  Involvement: {
    title: "involvement",
    summary: "...getting involved...",
    learnMore: false,
  },
  skills: {
    title: "skills",
    summary: "... skills ",
    learnMore: true,
  },
};

export default summeries;
