import react from 'react';
import ems from "../../public/Employee.png";
import drivingTest from "../../public/drivingTest.png";
import Image from "next/image";
const Internships = () => {
    
    return(
        <>
        <section className="py-10">
        <div>
          <h3 className="py-1 text-3xl dark:text-white ">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a developer, I've worked
            remotely for
            <span className="text-teal-500"> agencies </span>
            and <span className="text-teal-500"> startups </span>
            and collaborated with talented people to create digital products
            for both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer a wide range of services, including brand design,
            programming, and teaching.
          </p>
        </div>
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
      </section>
  </>
  
  )
};

export default Internships