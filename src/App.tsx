import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Resume } from "./pages/Resume";
import { Layout } from "./components/Layout";
import { RESUME } from "./lib/resume";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/resume" element={<Resume resume={RESUME} />} />
      </Routes>
    </div>
  );
}
