// App.jsx
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className={`min-h-screen`}>
      <Header />
      <main className="p-4 max-w-6xl mx-auto">
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
