import React from "react";
import { useNavigate } from "react-router-dom";

const Portofolio = () => {
  const navigate = useNavigate();

  // Data portofolio
  const portfolioItems = [
    {
      id: 1,
      title: "Trusted News AI",
      description:
        "Trusted News AI is an AI-powered web application developed to analyze the credibility of online news headlines. Built using React.js, Tailwind CSS, Express.js, and REST API integration, the application provides news credibility analysis, confidence scores, and trusted news recommendations to help users identify misinformation.",
      image: "img/portfolio/trustednewsai.png",
    },
    {
      id: 2,
      title: "Kost Management Website",
      description:
        "A web-based boarding house management system that simplifies room, tenant, and financial management. Developed using PHP, JavaScript, Bootstrap, and MySQL with features including room management, tenant registration, and financial reporting.",
      image: "img/portfolio/kost.png",
    },
    {
      id: 3,
      title: "Cashier Application",
      description:
        "A web-based cashier application developed for the LSP-P1 competency assessment. Built using PHP, JavaScript, HTML, CSS, and MySQL with features for product management, sales transactions, inventory, customers, and reports.",
      image: "img/portfolio/resto.png",
    },
    {
      id: 4,
      title: "Public Complaint Website",
      description:
        "A web platform that allows citizens to submit and monitor public complaints online. Developed using PHP, JavaScript, HTML, CSS, and Bootstrap with a responsive interface.",
      image: "img/portfolio/pengaduan.png",
    },
    {
      id: 5,
      title: "Wedding Invitation Website",
      description:
        "A responsive digital wedding invitation website featuring event information, countdown timer, gallery, RSVP, and location details using React.js and Tailwind CSS.",
      image: "img/portfolio/weddingApp.png",
    },
    {
      id: 6,
      title: "The Tank Museum",
      description:
        "A responsive museum website developed based on client requirements to showcase tank history, collections, and technical specifications. Built using HTML, CSS, JavaScript, and Bootstrap with an intuitive user interface.",
      image: "img/portfolio/1.png",
    },
  ];

  return (
    <>
      <section
        id="portfolio"
        className="pb-16 bg-slate-100 pt-36 dark:bg-slate-800"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold text-hero">
                Portfolio
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Last Projects
              </h2>
            </div>
          </div>

          <div
            className="grid w-full grid-cols-1 gap-6 px-4 sm:grid-cols-2 xl:mx-auto xl:w-10/12"
            data-aos="fade-up"
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,255,200,0.7)]"
              >
                <a>
                  <img
                    className="rounded-t-lg"
                    src={item.image}
                    alt={item.title}
                  />
                </a>
                <div className="p-5">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#FF9D1A] dark:text-p-[]">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                  <a
                    onClick={() => navigate(`/readmore/${item.id}`)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FFA33C] rounded-lg hover:bg-[#FF9D1A] focus:ring-5 focus:outline-none focus:ring-blue-300 dark:bg-[#FF6A00] dark:hover:bg-[#FF9D1A] dark:focus:ring-blue-800 cursor-pointer"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
