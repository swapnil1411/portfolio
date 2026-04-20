import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Experience from "./components/internships";
import Projects from "./components/project";
import HireMe from "./components/hireme";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-[#0a0f1e] min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <HireMe />
      <Contact />
      <Footer />
    </main>
  );
}
