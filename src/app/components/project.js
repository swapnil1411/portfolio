"use client";

import react from "react";
import ems from "../../../public/Employee.png";
import drivingTest from "../../../public/drivingTest.png";
import Image from "next/image";
export const Projects = () => {
  return (
    <>
      <h3 className="py-1 text-3xl dark:text-white ">Projects</h3>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="flex-1 basis-1/3">
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
    </>
  );
};
