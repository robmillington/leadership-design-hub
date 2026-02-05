import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Writing from "./pages/Writing";
import WritingDetail from "./pages/WritingDetail";
import Leadership from "./pages/Leadership";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/writing/:slug" element={<WritingDetail />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
