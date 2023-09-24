import styled from "@emotion/styled";

const BackgroundImg = styled.img(() => ({
  maxWidth: "100%",
  borderRadius: 10,
  marginTop: 20,
}));

const Paragraph = styled.div(() => ({
  marginTop: 20,
}));

export const Home = () => (
  <div>
    <BackgroundImg src="background.jpg" alt="background" />
    <Paragraph>Hello!</Paragraph>
  </div>
);
