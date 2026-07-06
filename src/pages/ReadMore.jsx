import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReadMore = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL
  const [portfolioItem, setPortfolioItem] = useState(null);

  useEffect(() => {
    // Data portofolio
    const portfolioItems = [
      {
        id: 1,
        title: "Trusted News AI",
        description:
          "Trusted News AI is an AI-powered web application designed to analyze the credibility of online news headlines. The application integrates AI analysis with trusted news recommendations to help users identify misinformation. Built using React.js, Tailwind CSS, Express.js, and REST API integration.",
        image: "/img/portfolio/trustednewsai.png",
        technologi:
          "- React.js, - Tailwind CSS, - Express.js, - REST API, - Axios",
        features:
          "- AI News Analysis, - Confidence Score, - Trusted News Recommendation, - Responsive UI, - REST API Integration",
        github: "https://github.com/Yayan45/trusted-news-ai",
      },
      {
        id: 2,
        title: "Complaints from the People of Pemalang District",
        description:
          "The Pemalang Regency Community Complaints Website is a digital platform that allows the public to report various incidents that occur in the area. Built using the programming languages PHP, JavaScript, HTML, CSS, and utilizing the responsive design advantages of Bootstrap, this site provides an effective means for monitoring and reporting important events.",
        image: "/img/portfolio/pengaduan.png",
        technologi: "- HTML, - CSS, - JS, - PHP, - Bootstrap",
        features:
          " -User-friendly Interface, -Easy Reporting, -Efficient Monitoring, -Admin Dashboard",
        github: "",
      },
      {
        id: 3,
        title: "The Tank Museum",
        description:
          "The Tank Museum website, built according to the client's wishes, is a digital platform that provides a holistic experience regarding the history and technical specifications of tanks. Using HTML, CSS, JavaScript, and Bootstrap, the site allows visitors to explore an impressive collection of tanks with intuitive navigation.",
        image: "/img/portfolio/1.png",
        technologi: "- HTML, - CSS, - JS, - Bootstrap",
        features:
          " -  User-friendly Interface, - Responsive Design, - Detailed Tank History, - Tank Specifications ",
        github: "https://github.com/Yayan45/tank-museum",
      },
      {
        id: 4,
        title: "Cashier Application",
        description:
          "I created the cashier website when I took the LSP-P1 vocational exam. This website uses PHP, JavaScript, HTML, CSS, and the experience. With features such as sales management, inventory, transactions, customers, and user management, this website ensures operational efficiency and improves customer service.",
        image: "/img/portfolio/resto.png",
        technologi: " - HTML, - CSS, - JS, - PHP, - Bootstrap",
        features:
          " - Data Management, - Product Management, - Customer Management Inventory Management, - Responsive Design",
        github: "https://github.com/Yayan45/Aplikasi-Kasir-2",
      },
      {
        id: 5,
        title: "Wedding App",
        description:
          "As the first step of my digital startup, I designed and launched an innovative digital invitation website. The platform offers an easy-to-use interface and advanced features to make creating and managing event invitations easy. This project reflects my commitment to innovation and quality in every project I work on.",
        image: "/img/portfolio/weddingApp.png",
        technologi: " - HTML, - CSS, - JS, - Bootstrap",
        features:
          " - RSVP Management, - Gift Donation, - Guest List Management, - Event Timeline, - Event - Location, - Responsive Design, - Photo Gallery, - Interactive Features",
        github: "https://github.com/Yayan45/haris-andhini-wedding",
      },
      {
        id: 6,
        title: "Kost Management Website",
        description:
          "In this project, I developed a comprehensive web platform to streamline the management of boarding houses. The website offers various features to assist property owners in managing rooms, tenants, and finances. The room management feature allows owners to easily update the status of rooms. The tenant management feature helps owners register new tenants and monitor existing tenant data. Additionally, the platform provides detailed income reports and financial statements, allowing property owners to track their earnings, expenses, and other financial details. This project is designed to provide property owners with an efficient and organized way to manage the daily operations of their boarding houses.",
        image: "/img/portfolio/kost.png",
        technologi: " - HTML, - CSS, - JS, - Bootstrap",
        features:
          "- Room Management, - Tenant Registration and Profile Management, - Tenant Dashboard, - Admin Dashboard, - Income and Expense Tracking, - Financial Reports, - Easy Data Management",
        github: "https://github.com/Yayan45/kostManApk",
      },
    ];

    // Filter item berdasarkan id
    const item = portfolioItems.find((p) => p.id === parseInt(id));
    setPortfolioItem(item);
  }, [id]);

  if (!portfolioItem) {
    return <p>Loading...</p>; // Tampilkan loading jika data belum diambil
  }

  return (
    <div className="dark:bg-dark">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#FF9D1A] mb-12 tracking-wide">
          Detail Projek
        </h1>
        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="relative">
            <img
              className="object-cover w-full h-full"
              src={portfolioItem.image}
              alt={portfolioItem.title}
            />
            <div className="absolute inset-0 opacity-75 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <p className="text-sm text-gray-300">
                ======================================
              </p>
              <h2 className="text-2xl font-bold text-[#FF9D1A]">
                {portfolioItem.title}
              </h2>
              <p className="text-sm text-gray-300">
                ======================================
              </p>
            </div>
          </div>
          <div className="p-6 dark:bg-slate-100">
            <h3 className="text-xl font-semibold text-gray-800">
              About the Project
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {portfolioItem.description}
            </p>
            <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h4 className="font-medium text-gray-700">Technologies Used</h4>
                <ul className="mt-2 text-sm text-gray-600">
                  {portfolioItem.technologi &&
                    portfolioItem.technologi.split(",").map((tech, index) => (
                      <li key={index}>{tech.trim()}</li> // trim untuk menghapus spasi yang tidak perlu
                    ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h4 className="font-medium text-gray-700">Key Features</h4>
                <ul className="mt-2 text-sm text-gray-600">
                  {portfolioItem.features &&
                    portfolioItem.features.split(",").map((tech, index) => (
                      <li key={index}>{tech.trim()}</li> // trim untuk menghapus spasi yang tidak perlu
                    ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={portfolioItem.github}
                target="_blank"
                className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none"
              >
                Github Repository
              </a>
              <a
                href="/"
                className="px-6 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none"
              >
                Back to Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default ReadMore;
