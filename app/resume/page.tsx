"use client";

import { RESUME } from "../lib/resume";
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

const LeftSpacedSection = styled.div(() => ({
  marginLeft: SINGLE_SPACE,
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

const TopSpacedSection = styled.div(() => ({
  marginTop: SINGLE_SPACE,
}));

const DoubleTopSpacedSection = styled.div(() => ({
  marginTop: SINGLE_SPACE * 2,
}));

const BulletWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
}));

export default function Resume() {
  return (
    <Container>
      <Line style={{ justifyContent: "center" }}>
        <Header>{RESUME.name}</Header>
      </Line>
      <Line style={{ justifyContent: "center" }}>{RESUME.description}</Line>
      <hr />
      {RESUME.sections.map(({ header, entities }) => (
        <DoubleTopSpacedSection key={header}>
          <Header>{header}</Header>
          <LeftSpacedSection>
            {entities.map(
              ({ entityName, location, subSections }, entityIndex) => (
                <DoubleTopSpacedSection key={entityName || entityIndex}>
                  {entityName && location && (
                    <Line>
                      <Header>{entityName}</Header>
                      <BottomWrapper>
                        <div>{location}</div>
                      </BottomWrapper>
                    </Line>
                  )}
                  {subSections.map((subSection, subSectionIndex) => (
                    <DoubleTopSpacedSection key={subSectionIndex}>
                      <Line>
                        {subSection.description && (
                          <Italicized>{subSection.description}</Italicized>
                        )}
                        {subSection.dateRange && (
                          <Italicized>{subSection.dateRange}</Italicized>
                        )}
                      </Line>
                      <TopSpacedSection>
                        {subSection.accomplishments.map(
                          (accomplishment, accomplishmentIndex) => (
                            <BulletWrapper key={accomplishmentIndex}>
                              <LeftSpacedSection>{"•"}</LeftSpacedSection>
                              <LeftSpacedSection>
                                {accomplishment}
                              </LeftSpacedSection>
                            </BulletWrapper>
                          ),
                        )}
                      </TopSpacedSection>
                    </DoubleTopSpacedSection>
                  ))}
                </DoubleTopSpacedSection>
              ),
            )}
          </LeftSpacedSection>
        </DoubleTopSpacedSection>
      ))}
    </Container>
  );
}
