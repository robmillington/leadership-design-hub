import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { PageTransition } from "./components/PageTransition";
import { Header } from "./components/Header";
import { ThemeToggle } from "./components/ThemeToggle";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Writing from "./pages/Writing";
import WritingDetail from "./pages/WritingDetail";
import Leadership from "./pages/Leadership";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
        <Route path="/case-studies/:slug" element={<PageTransition><CaseStudyDetail /></PageTransition>} />
        <Route path="/writing" element={<PageTransition><Writing /></PageTransition>} />
        <Route path="/writing/:slug" element={<PageTransition><WritingDetail /></PageTransition>} />
        <Route path="/leadership" element={<PageTransition><Leadership /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <>
    <AnimatedBackground />
    <ThemeToggle />
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
    </BrowserRouter>
  </>
);

export default App;


