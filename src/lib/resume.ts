export interface Job {
  company: string;
  location: string;
  roles: {
    title: string;
    dateRange: string;
    accomplishments: string[];
  }[];
}

export interface Resume {
  sections: {
    header: string;
    items: Job[];
  }[];
}

export const RESUME: Resume = {
  sections: [
    {
      header: "PROFRESSIONAL EXPERIENCE",
      items: [
        {
          company: "Convoy",
          location: "Seattle, WA",
          roles: [
            {
              dateRange: "March 2020 - Present",
              title: "Senior Software Engineer, Contract Pricing Team, Go Team",
              accomplishments: [
                "Tech lead for a 3 month project involving multiple engineers to build an industry leading trailer inspection workflow in our mobile app, which resulted in a signifact increase in the quality of data on the condition of our fleet of trailers",
                "Designed and lead a 6 month project to build a pricing workflow tool to automatically price and bid on contracts, which resulted in a 20% reduction in manual effort in pricing",
                "Technologies: React Native",
              ],
            },
            {
              dateRange: "September 2017 - March 2020",
              title: "Software Engineer, Shipper Team",
              accomplishments: [
                "Built a platform to send and receive EDI messages and outsourced the development work to an offshore engineering team, which allowed for rapid scaling",
                "Built a thing",
                "Technologies: Typescript, React, AWS, GraphQL, Postgres",
              ],
            },
          ],
        },
        {
          company: "EnergySavvy",
          location: "Seattle, WA",
          roles: [
            {
              title: "Software Engineer, Client Solutions Team",
              dateRange: "July 2015 - September 2017",
              accomplishments: [
                "Lead a new engineering initiative responsible for building the ETL infrastructure that powered client facing analytics dashboard",
                "Built a Django site for automating the workflow of contractors performing thousands of energy­efficiency retrofits of low­income homes. A recent survey showed a 90% satisfaction rate among users of the product",
                "Championed an initiative to improve budget estimation for new client work using historical time­tracking and ticket data; used a machine learning clustering algorithm for surfacing similar work during estimation",
                "Technologies: Python, Django, React",
              ],
            },
          ],
        },
        {
          company: "DC Energy",
          location: "Tyson's Corner, VA",
          roles: [
            {
              title: "Software Engineer, Infrastructure Team",
              dateRange: "September 2012 - July 2015",
              accomplishments: [
                "Senior developer of the firm's proprietary job scheduling software, which handled a graph of 7000+ job",
                "Implemented MySQL monitoring tools (Percona, VividCortex, Zabbix) to maximize uptime for 4TB of data",
                "Created ETL processes for mapping data from 30+ disparate sources into one cohesive, up­to­date view of the electric grid, which was a primary input for our long­term trading decisions",
              ],
            },
          ],
        },
      ],
    },
    {
      header: "EDUCATION",
      items: [
        {
          company: "University of Virginia",
          location: "Charlottesville, VA",
          roles: [
            {
              title:
                "Bachelor of Science in Mechanical Engineering, Bachelor of Science in Economics",
              dateRange: "August 2008 - May 2012",
              accomplishments: [
                "GPA: 3.61 / 4.0, Honors with High Distinction, Dean’s List every semester",
                "Senior thesis on home automation published in undergraduate research journal",
                "Lawn Resident: honor awarded to 54 senior students in recognition of achievement in academics, leadership, and service",
              ],
            },
          ],
        },
      ],
    },
  ],
};
