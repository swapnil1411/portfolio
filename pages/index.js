import Head from "next/head";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

import ems from "../public/Employee.png";
import drivingTest from "../public/drivingTest.png";
import { Canvas } from "@react-three/fiber";
import Blob from "./components/blob";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Swapnil's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="mb-12 flex justify-between py-10 dark:text-white">
            <h1 className="font-burtons text-xl">Swapnil's Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="text- ml-8 rounded-md border-none bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white"
                  href="https://drive.google.com/file/d/1Tb8yjSkZ6I8ihS1dwqeeYL8IL0KaNlmO/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10 py-10 text-center">
            <h2 className="py-2 text-5xl font-medium text-teal-600 md:text-6xl dark:text-teal-400">
              Swapnil Nanavati
            </h2>
            <h3 className="py-2 text-2xl md:text-3xl dark:text-white">
              Developer .
            </h3>
            <Canvas
              camera={{
                position: [10, 10, 10],
                fov: 20,
              }}
            >
              <Blob />
            </Canvas>
            <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-200">
              Developer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-gray-400">
              <AiFillGithub
                className="cursor-pointer"
                onClick={() => {
                  window.location = "https://github.com/swapnil1411";
                }}
              />
              <AiFillLinkedin
                className="cursor-pointer"
                onClick={() => {
                  window.location =
                    "https://www.linkedin.com/in/swapnil-nanavati-181989199/";
                }}
              />
            </div>
            <div className="relative mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="py-1 text-3xl dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a Software Developer Intern
              and developer, I've done work for
              <span className="text-teal-500"> startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including
              developing,programming and design.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="py-1 text-3xl dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a 
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              and <span className="text-teal-500"> startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1 basis-1/3 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={drivingTest}
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={ems}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
