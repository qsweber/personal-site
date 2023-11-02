import { FunctionComponent } from "react";
import { Resume as IResume } from "../lib/resume";
import styled from "@emotion/styled";

const SINGLE_SPACE = 4;

const Container = styled.div(() => ({
  maxWidth: 670,
  margin: "0 auto",
  fontFamily: "Work Sans",
  fontSize: "12px",
}));

const Line = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: SINGLE_SPACE,
}));

const Header = styled.div(() => ({
  fontWeight: "bold",
  fontSize: "14px",
}));

const Items = styled.div(() => ({
  marginLeft: SINGLE_SPACE * 2,
}));

const Italicized = styled.div(() => ({
  fontStyle: "italic",
}));

/**
 * Puts wrapped component on the bottom of the parent div
 */
const BottomWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
}));

const SpacedSection = styled.div(() => ({
  marginTop: SINGLE_SPACE,
}));

const DoubleSpacedSection = styled.div(() => ({
  marginTop: SINGLE_SPACE * 2,
}));

const BulletWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
}));

const BulletContent = styled.div(() => ({
  marginLeft: SINGLE_SPACE,
}));

export const Resume: FunctionComponent<{ resume: IResume }> = ({ resume }) => (
  <Container>
    <Line style={{ justifyContent: "center" }}>
      <Header>{resume.name}</Header>
    </Line>
    <Line style={{ justifyContent: "center" }}>{resume.description}</Line>
    <hr />
    {resume.sections.map(({ header, entities }) => (
      <DoubleSpacedSection>
        <Header>{header}</Header>
        <Items>
          {entities.map(({ entityName, location, subSections }) => (
            <DoubleSpacedSection>
              <Line>
                <Header>{entityName}</Header>
                <BottomWrapper>
                  <div>{location}</div>
                </BottomWrapper>
              </Line>
              {subSections.map((subSection) => (
                <DoubleSpacedSection>
                  <Line>
                    <Italicized>{subSection.description}</Italicized>
                    <Italicized>{subSection.dateRange}</Italicized>
                  </Line>
                  <SpacedSection>
                    {subSection.accomplishments.map((accomplishment) => (
                      <BulletWrapper>
                        <BulletContent>{"•"}</BulletContent>
                        <BulletContent>{accomplishment}</BulletContent>
                      </BulletWrapper>
                    ))}
                  </SpacedSection>
                </DoubleSpacedSection>
              ))}
            </DoubleSpacedSection>
          ))}
        </Items>
      </DoubleSpacedSection>
    ))}
  </Container>
);
