import { Routes, Route, Outlet, NavLink, Link } from "react-router-dom";
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
  padding: "20px 0",
}));

const Initials = styled.div(() => ({
  textAlign: "left",
  fontWeight: "600",
  fontSize: 36,
}));

const LinkGroup = styled.nav(() => ({
  margin: "auto 0", // centers it vertically within NavBar
}));

const SpacedNavLink = styled(NavLink)(() => ({
  marginLeft: 20,
  textDecoration: "none",
  color: "inherit",
  fontWeight: "600",
}));

const ContactImg = styled.img(() => ({
  width: 35,
  height: 35,
  paddingRight: 5,
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
          <SpacedNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </SpacedNavLink>
          <SpacedNavLink to="https://github.com/qsweber" target="_blank">
            Portfolio
          </SpacedNavLink>
        </LinkGroup>
      </NavBar>
      <Outlet />
      <Footer>
        <Link to="mailto:quinn@quinnweber.com" target="_blank">
          <ContactImg src="mail.png" alt="email" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/quinn-weber-853aa536/"
          target="_blank"
        >
          <ContactImg src="linkedin.png" alt="linkedin" />
        </Link>
        <Link to="http://github.com/qsweber/" target="_blank">
          <ContactImg src="github.png" alt="github" />
        </Link>
      </Footer>
    </Container>
  );
}
