import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { MdMapsHomeWork } from "react-icons/md";

const Internships = (props) => {
  console.log("🚀 ~ Internships ~ props:", props.darkMode);

  return (
    <>
      <section className="py-10">
        <div>
          <h3 className="py-10 text-3xl dark:text-white text-center mb-3">
            Work
          </h3>
          <VerticalTimeline
            lineColor={`${props.darkMode ? "white" : "rgb(71 85 105)"}`}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2022 - Nov 2022"
              dateClassName={props.darkMode ? "text-slate-50" : "text-slate-800"}
              icon={<MdMapsHomeWork />}
              contentStyle={{
                backgroundColor: "rgb(241 245 249)",
                borderRadius: "5px",
              }}
              position="right"
              visible={true}
              iconStyle={{ background: "rgb(13 148 136)", color: "#fff" }}
            >
              <h3 className="text-lg font-semibold mb-2">
                Front-end Developer
              </h3>
              <h4 className="text-gray-600 mb-2">HuddleUp</h4>
              <p className="text-sm text-gray-700 mb-4    ">
                • Enhanced input data handling to improve application
                performance, addressing concurrency issues and introducing a
                cleanup function, leading to a 50% reduction in load times.
                <br />
                • Implemented pagination across all pages with a scroll-based
                system for timeline pages to enhance user experience.
                <br />
                • Redesigned the user interface using Tailwind CSS for
                consistent responsiveness on diverse devices, which worked on
                70% of devices available in the market.
                <br />
                • Conducted comprehensive testing of the web application with
                Playwright, identifying and resolving multiple issues to enhance
                overall reliability by 30%.
                <br />
                <span className="font-semibold">Tech Stack:</span> Front-end:
                Next.js, React.js, GoLang, Tailwind CSS
              </p>
            </VerticalTimelineElement>

            {/* Jr. Software Developer */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jan 2022 - Apr 2022"
              dateClassName={props.darkMode ? "text-slate-50" : "text-slate-800"}
              icon={<MdMapsHomeWork />}
              position="left"
              contentStyle={{
                backgroundColor: "rgb(241 245 249)",
                borderRadius: "5px",
              }}
              visible={true}
              iconStyle={{ background: "rgb(13 148 136)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title text-lg font-semibold mb-2">
                Jr. Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-600 mb-2">
                Clientjoy
              </h4>
              <p className="text-sm text-gray-700 mb-4">
                • Addressed all React Native issues in the Android/iOS app,
                eliminating crashes and improving the overall client experience.
                <br />
                • Resolved 50% of inquiries by implementing precise bug fixes in
                the React Native app.
                <br />
                • Mitigated over 50+ API call issues resulting from backend data
                flow changes, preventing app crashes due to endpoint mismatches.
                <br />
                • Developed Windows and macOS apps using Electron package
                builder, ensuring compliance with macOS distribution criteria,
                including Notarization, to facilitate seamless and successful
                app deployment, resolving 20% of customer inquiries.
                <br />
                • Designed the UI for the main Vue.js web app, incorporating
                improvements based on Figma feedback and utilizing the Bootstrap
                framework to enhance functionality and provide an exceptional
                user experience.
                <br />
                <span className="font-semibold">Tech Stack:</span> React Native,
                Vue.js, Bootstrap
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default Internships;
