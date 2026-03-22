import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Works from "./pages/Works";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:slug" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
