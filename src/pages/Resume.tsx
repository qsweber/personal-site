import { RESUME } from "../lib/resume";
import styled from "@emotion/styled";

const SINGLE_SPACE = 4;

const Container = styled.div(() => ({
  paddingTop: SINGLE_SPACE * 4,
  maxWidth: 670,
  margin: "0 auto",
  fontFamily: "Work Sans",
}));

const Line = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: SINGLE_SPACE,
}));

const Company = styled.div(() => ({
  fontWeight: "bold",
  fontSize: "1.4em",
}));

const Location = styled.div(() => ({}));

const DateRange = styled.div(() => ({
  fontStyle: "italic",
}));

const Title = styled.div(() => ({
  fontStyle: "italic",
}));

const Accomplishments = styled.ul(() => ({
  listStylePosition: "outside",
  paddingLeft: 16,
  marginTop: 0,
  marginBottom: 0,
}));

const Accomplishment = styled.li(() => ({}));

const BottomWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
}));

export const Resume = () => (
  <Container>
    <Line style={{ justifyContent: "center" }}>
      <Company>Quinn Weber</Company>
    </Line>
    <Line style={{ justifyContent: "center" }}>
      Seattle, WA - quinn@quinnweber.com
    </Line>
    {RESUME.map((job, index) => (
      <div
        style={{
          marginBottom: index < RESUME.length - 1 ? SINGLE_SPACE * 2 : 0,
        }}
      >
        <Line>
          <Company>{job.company}</Company>
          <BottomWrapper>
            <Location>{job.location}</Location>
          </BottomWrapper>
        </Line>
        <Line>
          <Title>{job.title}</Title>
          <DateRange>{job.dateRange}</DateRange>
        </Line>
        <Accomplishments>
          {job.accomplishments.map((accomplishment) => (
            <Accomplishment>{accomplishment}</Accomplishment>
          ))}
        </Accomplishments>
      </div>
    ))}
  </Container>
);
