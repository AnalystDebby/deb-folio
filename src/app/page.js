"use client";
import { Inter } from "next/font/google";
import { Nav } from "./src/components/Nav";
import { Hero } from "./src/components/Hero";
import { Services } from "./src/components/Services";
import { Portfolio } from "./src/components/Portfolio";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 ">
        <section className=" min-h-screen">
          <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Hero darkMode={darkMode} />
        </section>
        <Services darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
      </div>
    </main>
  );
}
