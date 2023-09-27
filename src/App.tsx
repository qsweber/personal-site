import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Resume } from "./pages/Resume";
import { Layout } from "./components/Layout";

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
