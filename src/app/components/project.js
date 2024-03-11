"use client";

import react from "react";
import ems from "../../../public/Employee.png";
import drivingTest from "../../../public/drivingTest.png";
import Image from "next/image";

export const Projects = () => {
  return (
    <>
      <h3 className="py-1 text-3xl dark:text-white text-center">Projects</h3>

      <div className="flex flex-col gap-2 py-10  lg:flex-wrap ">
        <div class=" p-6 gap-4 md:flex lg:flex xl:flex  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex-1 mb-3">
            <Image
              className="rounded-lg object-fit "
              layout="responsive"
              src={drivingTest}
            />
          </div>
          <div className="flex-1 mb-3 md:mb-0 lg:mb-0 xl:mb-0 dark:text-white">
            <h1 className="font-bold mb-3  md:mb-0 lg:mb-0 xl:mb-0">Driving Test</h1>
            <ul>
              <li>Multi-account web application built on the MVC pattern</li>
              <li>Distinct functionalities for Admin, Driver, and Examiner roles</li>
              <li>Over 15 API endpoints to support different functionalities</li>
              <li>Admins manage appointment dates</li>
              <li>Examiners oversee tests</li>
              <li>Powered by Node.js and Express.js for backend development</li>
              <li>EJS templating used for rendering dynamic content on the frontend</li>
              <li>MongoDB employed as the database for efficient data management</li>
              <li>Focus on streamlining the driving test appointment process</li>
            </ul>
            <a href="https://github.com/swapnil1411/DrivingTest" className="inline-flex items-center px-3 py-2 text-sm mt-3 mr-3 font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800">
              Github
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            <a href="https://driving-test-iodx.onrender.com" className="inline-flex items-center px-3 py-2 text-sm mt-3 mr-3 font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800">
              Demo
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-10 py-10  lg:flex-wrap">
          <div class=" p-6 md:flex lg:flex xl:flex gap-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-1 mb-3">
              <Image
                className="rounded-lg object-fit "
                layout="responsive"
                src={ems}
              />
            </div>
            <div className="flex-1 mb-3 md:mb-0 lg:mb-0 xl:mb-0 dark:text-white">
              <h1 className="font-bold mb-3 md:mb-0 lg:mb-0 xl:mb-0">Employee Management System</h1>
              <ul>
  <li>An Employee Management System was created using React.js, GraphQL, and MongoDB</li>
  <li>Features include:
    <ul>
      <li>Employee addition</li>
      <li>Update</li>
      <li>Deletion</li>
      <li>Search</li>
      <li>Filtering</li>
    </ul>
  </li>
  <li>Aimed at enhancing HR productivity</li>
  <li>Tailwind CSS utilized for a responsive UI</li>
  <li>GraphQL optimized data retrieval and updates, streamlining the employee management process</li>
</ul>

              <a href="https://github.com/swapnil1411/Employee-Management-System" className="inline-flex items-center px-3 py-2 text-sm mt-3 mr-3 font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800">
                Github
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>

              <a href="https://emsfrontend-one.vercel.app/" className="inline-flex items-center px-3 py-2 text-sm mt-3 mr-3 font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800">
                Demo
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
