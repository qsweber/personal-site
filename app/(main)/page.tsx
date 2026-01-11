"use client";

import styled from "@emotion/styled";

import { Section } from "../components/Section";

const BackgroundImg = styled.img(() => ({
  maxWidth: "100%",
  borderRadius: 10,
}));

export default function Home() {
  return (
    <div>
      <BackgroundImg src="background.jpg" alt="background" />
      <Section>
        Hello! Check out my portfolio of work or contact me at one of the links
        below test.
      </Section>
    </div>
  );
}
