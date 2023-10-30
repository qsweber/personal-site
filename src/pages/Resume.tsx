import { RESUME } from "../lib/resume";
import styled from "@emotion/styled";

const SINGLE_SPACE = 4;

const Container = styled.div(() => ({
  paddingTop: SINGLE_SPACE * 4,
  maxWidth: 670,
  margin: "0 auto",
  fontFamily: "Work Sans",
  fontSize: "12px",
}));

const Line = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: SINGLE_SPACE,
}));

const Header = styled.div(() => ({
  fontWeight: "bold",
  fontSize: "14px",
}));

const Section = styled.div(() => ({
  marginTop: SINGLE_SPACE * 2,
  marginLeft: SINGLE_SPACE * 2,
}));

const Location = styled.div(() => ({}));

const Italicized = styled.div(() => ({
  fontStyle: "italic",
}));

const Accomplishment = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
}));

/**
 * Puts wrapped component on the bottom of the parent div
 */
const BottomWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
}));

export const Resume = () => (
  <Container>
    <Line style={{ justifyContent: "center" }}>
      <Header>Quinn Weber</Header>
    </Line>
    <Line style={{ justifyContent: "center" }}>
      Senior Software Enginer - Seattle, WA - quinn@quinnweber.com
    </Line>
    <hr />
    {RESUME.sections.map((section, sectionIndex) => (
      <div
        style={{
          marginBottom:
            sectionIndex < RESUME.sections.length - 1 ? SINGLE_SPACE * 2 : 0,
        }}
      >
        <Header>{section.header}</Header>
        <Section>
          {section.items.map((job, index) => (
            <div
              style={{
                marginBottom:
                  index < section.items.length - 1 ? SINGLE_SPACE * 2 : 0,
              }}
            >
              <Line>
                <Header>{job.company}</Header>
                <BottomWrapper>
                  <Location>{job.location}</Location>
                </BottomWrapper>
              </Line>
              {job.roles.map((role, roleIndex) => (
                <div
                  style={{
                    marginBottom:
                      roleIndex < job.roles.length - 1 ? SINGLE_SPACE : 0,
                  }}
                >
                  <Line>
                    <Italicized>{role.title}</Italicized>
                    <Italicized>{role.dateRange}</Italicized>
                  </Line>
                  <div>
                    {role.accomplishments.map((accomplishment) => (
                      <Accomplishment>
                        <div style={{ paddingRight: SINGLE_SPACE }}>{"•"}</div>
                        <div>{accomplishment}</div>
                      </Accomplishment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Section>
      </div>
    ))}
  </Container>
);
