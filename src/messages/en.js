import { flattenMessages } from "./utils";

const messages = {
  app: { title: "find your perfect job!" },
  jobDetails: {
    company: "Company",
    title: "Title",
    salary: "Salary",
    description: "Description",
    type: "Employment type",
    location: "Location",
    partTime: "Part Time",
    fullTime: "Full Time"
  }
};

export default flattenMessages(messages);
