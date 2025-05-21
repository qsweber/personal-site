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
      Hello! Check out my portfolio of work or contact me at one of the links
      below.
    </Paragraphhhh>
  </div>
);
