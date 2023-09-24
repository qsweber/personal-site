import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import styled from "@emotion/styled";
import { NotFound } from "./pages/NotFound";
import { Resume } from "./pages/Resume";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

const Container = styled.div(() => ({
  maxWidth: 800,
  margin: "0 auto",
  fontFamily: "Work Sans",
}));

const NavBar = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Initials = styled.div(() => ({
  textAlign: "left",
  fontWeight: "800",
  fontSize: 36,
}));

const LinkGroup = styled.nav(() => ({
  margin: "auto 0", // centers it vertically within NavBar
}));

const NavLink = styled(Link)(() => ({
  marginLeft: 20,
  textDecoration: "none",
  color: "inherit",
  fontWeight: "800",
}));

const ContactImg = styled.img(() => ({
  width: 35,
  height: 35,
}));

const Footer = styled.footer(() => ({
  marginTop: 20,
}));

function Layout() {
  return (
    <Container>
      <NavBar>
        <Initials>QSW</Initials>
        <LinkGroup>
          <NavLink to="/">Home</NavLink>
          <NavLink to="https://github.com/qsweber" target="_blank">
            Portfolio
          </NavLink>
        </LinkGroup>
      </NavBar>
      <Outlet />
      <Footer>
        <Link to="mailto:quinn@quinnweber.com">
          <ContactImg src="mail.png" alt="email" />
        </Link>
        <Link to="https://www.linkedin.com/in/quinn-weber-853aa536/">
          <ContactImg src="linkedin.png" alt="linkedin" />
        </Link>
        <Link to="http://github.com/qsweber/">
          <ContactImg src="github.png" alt="github" />
        </Link>
      </Footer>
    </Container>
  );
}
