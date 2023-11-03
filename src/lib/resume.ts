export interface Entity {
  entityName?: string;
  location?: string;
  subSections: {
    description?: string;
    dateRange?: string;
    accomplishments: string[];
  }[];
}

export interface Resume {
  name: string;
  description: string;
  sections: {
    header: string;
    entities: Entity[];
  }[];
}

export const RESUME: Resume = {
  name: "Quinn Weber",
  description: "Senior Software Engineer • Seattle, WA • quinn@quinnweber.com",
  sections: [
    {
      header: "PROFESSIONAL EXPERIENCE",
      entities: [
        {
          entityName: "Convoy",
          location: "Seattle, WA",
          subSections: [
            {
              dateRange: "March 2020 - Present",
              description: "Senior Software Engineer, Contract Pricing Team",
              accomplishments: [
                "Tech lead for a 3-month project involving multiple engineers to build an industry leading trailer inspection workflow in our mobile app, which enabled faster damage detection of our fleet",
                "Designed and lead a 6-month project to build a pricing workflow tool to automatically price and bid on RFPs through multiple rounds of negotiation, which helped us more accurately and promptly submit bids to customers",
                "Advocated for and implemented a new workflow orchestrator (AWS Step Functions), which was used to automate the tasks of our pricing team, tripling the usage of the program while reducing ops costs by 75%",
                "Conducted hundreds of interviews for candidates, which scaled the team from 20 to 200 engineers",
                "Technologies: NodeJS, React, React Native",
              ],
            },
            {
              dateRange: "September 2017 - March 2020",
              description: "Software Engineer, Shipper Team",
              accomplishments: [
                "Designed a platform to send and receive EDI messages and outsourced the development work to an offshore engineering team, which allowed for rapid onboarding of hundreds of customers",
                "Managed an intern and helped them build a feature that automatically parsed emails from shippers and automatically created shipments based on the contents",
                "Technologies: Typescript, React, AWS, GraphQL, Postgres",
              ],
            },
          ],
        },
        {
          entityName: "EnergySavvy",
          location: "Seattle, WA",
          subSections: [
            {
              description: "Software Engineer, Client Solutions Team",
              dateRange: "July 2015 - September 2017",
              accomplishments: [
                "Lead a new engineering initiative responsible for building the ETL infrastructure that powered a client facing analytics dashboard",
                "Built a Django site for automating the workflow of contractors performing thousands of energy efficiency retrofits of low-income homes, which resulted in a 90% satisfaction rate among product users",
                "Championed an initiative to improve budget estimation for new client work using historical time-tracking and ticket data; used a machine learning clustering algorithm for surfacing similar work during estimation",
                "Technologies: Python, Django, React",
              ],
            },
          ],
        },
        {
          entityName: "DC Energy",
          location: "Tyson's Corner, VA",
          subSections: [
            {
              description: "Senior Analyst, Infrastructure Team",
              dateRange: "March 2014 - July 2015",
              accomplishments: [
                "Senior developer of the firm's proprietary job scheduling software, which handled a graph of 7000+ jobs",
                "Implemented MySQL monitoring tools (Percona, VividCortex, Zabbix) to maximize uptime for 4TB of data",
                "Created ETL processes for mapping data from 30+ disparate sources into a cohesive view of the electric grid, which was a primary input for our long-term trading decisions",
              ],
            },
            {
              description: "Analyst, Electricity Futures Trading Team",
              dateRange: "September 2012 - March 2014",
              accomplishments: [
                "Developed an automated electricity price model using R and MySQL, which combined weather, supply, and demand forecasts with a model of historical errors to generate robust distributions that were used for daily trading decisions",
                "Leveraged predictive ability of model to develop profitable trading strategies in both short and long-term markets, which contributed to the team's annual profits of $10M on $20M in capital",
              ],
            },
          ],
        },
      ],
    },
    {
      header: "EDUCATION",
      entities: [
        {
          entityName: "University of Virginia",
          location: "Charlottesville, VA",
          subSections: [
            {
              description:
                "Bachelor of Science in Mechanical Engineering, Bachelor of Science in Economics",
              dateRange: "August 2008 - May 2012",
              accomplishments: [
                "GPA: 3.61 / 4.0, Honors with High Distinction, Dean's List every semester",
                "Senior thesis on home automation published in undergraduate research journal",
                "Lawn Resident: honor awarded to 54 senior students in recognition of achievement in academics, leadership, and service",
              ],
            },
          ],
        },
      ],
    },
    {
      header: "PERSONAL",
      entities: [
        {
          subSections: [
            {
              accomplishments: [
                "Rode my bike from Canada to Mexico along the PCH",
                "Captain of the rowing team in college, and still row weekly in Lake Union",
                "Converted my backyard shed into an office, complete with permitted electrical",
                "Have been competing in triathlons since age 9",
              ],
            },
          ],
        },
      ],
    },
  ],
};
