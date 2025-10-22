import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./components/Root";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Projects from "./components/Projects";
import { Contact } from "lucide-react";
import Skills from "./components/Skills";
import CaseStudy from "./components/CaseStudy";
import { ThemeToggle } from "./components/ThemeToggle";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ThemeToggle />
        <main>
          <Routes>
            <Route index element={<Root />} />
            <Route path="/About" element={<About />} />
            <Route path="/CaseStudy" element={<CaseStudy />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
