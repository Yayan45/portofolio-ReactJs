import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section id="about" className="pb-32 pt-36 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div
              className="w-full px-4 mb-10 lg:w-1/2"
              data-aos="fade-up-right"
              data-aos-delay="200"
            >
              <h4 className="mb-3 text-lg font-bold uppercase text-hero">
                About Me
              </h4>
              <p
                className="max-w-xl text-base font-medium text-justify text-secondary lg:text-lg"
                style={{ textAlign: "justify" }}
              >
                I am an Informatics Engineering student at Dian Nuswantoro
                University with a strong interest in web application
                development. I specialize in building responsive and
                user-friendly web applications using modern technologies such as
                React.js, JavaScript, Tailwind CSS, Express.js, REST API, PHP,
                and MySQL. I enjoy learning new technologies, solving real-world
                problems, and continuously improving my technical skills to
                develop efficient and impactful software solutions.
              </p>
            </div>
            <div
              className="w-full px-4 lg:w-1/2"
              data-aos="fade-up-left"
              data-aos-delay="100"
            >
              <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">
                My Experience
              </h3>

              <div className="space-y-4 text-secondary">
                <div className="flex items-start gap-3">
                  <span>💻</span>
                  <p>
                    Completed an Information Technology internship at STIMIK
                    Widya Pratama.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span>💻</span>
                  <p>
                    Completed a Web Development training program at Coding Asyik
                    Telkom Pekalongan.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span>💻</span>
                  <p>
                    Participated in the Full Stack Developer Coding Camp powered
                    by DBS Foundation.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span>💻</span>
                  <p>
                    Earned the LSP-P1 Software Engineering Competency
                    Certification.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span>💻</span>
                  <p>
                    Designed and developed a digital wedding invitation web
                    application as a personal project.
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate("/Gallery")}
                className="mt-4 px-6 py-2 bg-[#FF9D1A] text-white rounded-lg text-sm font-semibold focus:outline-none ml-8 tracking-[0.3em]"
              >
                📖Gallery
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
