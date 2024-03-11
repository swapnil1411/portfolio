"use client";

import react from "react";
import ems from "../../../public/Employee.png";
import drivingTest from "../../../public/drivingTest.png";
import Image from "next/image";
export const Projects = () => {
  return (
    <>
      <h3 className="py-1 text-3xl dark:text-white text-center">Projects</h3>

      <div className="flex flex-col gap-2 py-10  lg:flex-wrap">
        <div class=" p-6 flex gap-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex-1">
            <Image
              className="rounded-lg object-fit "
              layout="responsive"
              src={drivingTest}
            />
          </div>
          <div className="flex-1 dark:text-white">
            <h1 className="font-bold">Driving Test</h1>
            <p>
              A multi-account web application, built on the MVC pattern,
              provided distinct functionalities for Admin, Driver, and Examiner
              roles through over 15 API endpoints. Admins managed appointment
              dates, while Examiners oversaw tests, all powered by Node.js,
              Express.js, EJS templating, and MongoDB for an efficient driving
              test appointment process.{" "}
            </p>
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
          <div class=" p-6 flex gap-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-1">
              <Image
                className="rounded-lg object-fit "
                layout="responsive"
                src={ems}
              />
            </div>
            <div className="flex-1 dark:text-white">
              <h1 className="font-bold">Employee Management System</h1>
              <p>
                An Employee Management System was created using React.js,
                GraphQL, and MongoDB, with features such as employee addition,
                update, deletion, search, and filtering, to enhance HR
                productivity. Tailwind CSS was utilized for a responsive UI,
                while GraphQL optimized data retrieval and updates, streamlining
                the employee management process.
              </p>

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
