import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "@/pages/Root";
import NotFound from "@/pages/NotFound";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Contact } from "lucide-react";
import Skills from "./pages/Skills";
import CaseStudy from "./pages/CaseStudy";
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
            <Route path="/about" element={<About />} />
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
