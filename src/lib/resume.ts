export interface Job {
  dateRange: string;
  title: string;
  company: string;
  accomplishments: string[];
}

export const RESUME: Job[] = [
  {
    dateRange: "2019 - Present",
    title: "Software Engineer",
    company: "Google",
    accomplishments: [
      "Built a thing",
      "Built another thing",
      "Built a third thing",
    ],
  },
  {
    dateRange: "2017 - 2019",
    title: "Software Engineer",
    company: "Facebook",
    accomplishments: [
      "Built a thing",
      "Built another thing",
      "Built a third thing",
    ],
  },
  {
    dateRange: "2015 - 2017",
    title: "Software Engineer",
    company: "Microsoft",
    accomplishments: [
      "Built a thing",
      "Built another thing",
      "Built a third thing",
    ],
  },
];
