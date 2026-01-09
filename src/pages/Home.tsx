import styled from "@emotion/styled";

const BackgroundImg = styled.img(() => ({
  maxWidth: "100%",
  borderRadius: 10,
}));

const Paragraph = styled.div(() => ({
  marginTop: 20,
}));

export const Home = () => (
  <div>
    <BackgroundImg src="background.jpg" alt="background" />
    <Paragraph>
      Hello! Welcome to my personal site. Feel free to explore my portfolio of
      work or reach out via the contact links below. Looking forward to
      connecting in 2025!
    </Paragraph>
  </div>
);
