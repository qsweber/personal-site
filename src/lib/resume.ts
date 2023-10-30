export interface Job {
  dateRange: string;
  title: string;
  company: string;
  location: string;
  accomplishments: string[];
}

export const RESUME: Job[] = [
  {
    dateRange: "2017 - Present",
    location: "Seattle, WA",
    title: "Senior Software Engineer",
    company: "Convoy",
    accomplishments: [
      "Build a platform to automatically ingest shipments via EDI that grew from 300 -> 8000 shipments/week",
      "Built a thing",
      "Built a third thing",
    ],
  },
  {
    dateRange: "2015 - 2017",
    location: "Seattle, WA",
    title: "Software Engineer",
    company: "EnergySavvy",
    accomplishments: [
      "Lead a new engineering initiative responsible for building the ETL infrastructure that powers our analytics products",
      "Built another thing",
      "Built a third thing",
    ],
  },
  {
    dateRange: "2012 - 2015",
    location: "Tyson's Corner, VA",
    title: "Investment Analyst",
    company: "DC Energy",
    accomplishments: [
      "Built a thing",
      "Built another thing",
      "Built a third thing",
    ],
  },
];
