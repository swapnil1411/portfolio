"use client";

import react from "react";
import ems from "../../../public/Employee.png";
import drivingTest from "../../../public/drivingTest.png";
import Image from "next/image";
export const Projects = () => {
  return (
    <>
      <h3 className="py-1 text-3xl dark:text-white ">Projects</h3>
      <div className="flex flex-col gap-10 py-10  lg:flex-wrap">
        <div className=" flex gap-2 ">
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
          </div>
        </div>
        <div className="flex gap-2">
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
              An Employee Management System was created using React.js, GraphQL,
              and MongoDB, with features such as employee addition, update,
              deletion, search, and filtering, to enhance HR productivity.
              Tailwind CSS was utilized for a responsive UI, while GraphQL
              optimized data retrieval and updates, streamlining the employee
              management process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
