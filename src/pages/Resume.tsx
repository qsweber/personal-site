import { FunctionComponent } from "react";
import { Job, RESUME } from "../lib/resume";

export const Jobb: FunctionComponent<{ job: Job }> = ({ job }) => (
  <div>
    <h3>{job.company}</h3>
    <p>{job.title}</p>
    <p>{job.dateRange}</p>
    <ul>
      {job.accomplishments.map((accomplishment) => (
        <li>{accomplishment}</li>
      ))}
    </ul>
  </div>
);

export const Resume = () => (
  <div>
    <h2>Resume</h2>
    {RESUME.map((job) => (
      <Jobb job={job} />
    ))}
  </div>
);
