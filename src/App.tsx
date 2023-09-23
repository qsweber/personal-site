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
}));

const NavBar = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Initials = styled.div(() => ({
  textAlign: "left",
  fontWeight: "bold",
  fontSize: 36,
}));

const LinkGroup = styled.nav(() => ({
  margin: "auto 0", // centers it vertically within NavBar
}));

const NavLink = styled(Link)(() => ({
  marginLeft: 20,
}));

function Layout() {
  return (
    <Container>
      <NavBar>
        <Initials>QSW</Initials>
        <LinkGroup>
          <NavLink to="/">Home</NavLink>
          <NavLink to="https://github.com/qsweber">Portfolio</NavLink>
        </LinkGroup>
      </NavBar>
      <hr />
      <Outlet />
    </Container>
  );
}
