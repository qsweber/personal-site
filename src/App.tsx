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
}));

const NavUl = styled.div(() => ({
  textAlign: "right",
  marginLeft: "auto",
}));

const NavLi = styled.div(() => ({
  display: "inline-block",
  marginLeft: 20,
}));

function Layout() {
  return (
    <Container>
      <NavBar>
        <Initials>QSW</Initials>
        <nav>
          <NavUl>
            <NavLi>
              <Link to="/">Home</Link>
            </NavLi>
            <NavLi>
              <Link to="https://github.com/qsweber">Portfolio</Link>
            </NavLi>
          </NavUl>
        </nav>
      </NavBar>
      <hr />
      <Outlet />
    </Container>
  );
}
