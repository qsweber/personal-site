import Link from "next/link";
import styled from "@emotion/styled";

const FooterWrapper = styled.footer(() => ({
  marginTop: 20,
}));

const ContactImg = styled.img(() => ({
  width: 35,
  height: 35,
  paddingRight: 5,
}));

export function Footer() {
  return (
    <FooterWrapper>
      <Link href="mailto:quinn@quinnweber.com" target="_blank">
        <ContactImg src="mail.png" alt="email" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/quinn-weber-853aa536/"
        target="_blank"
      >
        <ContactImg src="linkedin.png" alt="linkedin" />
      </Link>
      <Link href="http://github.com/qsweber/" target="_blank">
        <ContactImg src="github.png" alt="github" />
      </Link>
    </FooterWrapper>
  );
}
