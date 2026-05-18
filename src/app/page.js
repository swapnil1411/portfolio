import dynamic from "next/dynamic";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Experience from "./components/internships";
import Projects from "./components/project";
import HireMe from "./components/hireme";
import Contact from "./components/contact";
import Footer from "./components/footer";

const MountainBackground = dynamic(
  () => import("./components/MountainBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed 3-D mountain — always behind everything */}
      <MountainBackground />

      {/* Page content sits above the canvas */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <HireMe />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
