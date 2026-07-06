import React, { useState } from "react";
import Footer from "../components/Footer";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/img/gallery/1.jpg" },
    { src: "/img/gallery/2.jpeg" },
    { src: "/img/gallery/4.jpg" },
    { src: "/img/gallery/5.jpg" },
    { src: "/img/gallery/6.jpg" },
    { src: "/img/gallery/3.jpg" },
    { src: "/img/gallery/7.png" },
  ];

  // Handle image click to open the modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="dark:bg-dark">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#FF9D1A] mb-12">
          Gallery
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-transform duration-300 ease-in-out transform rounded-lg shadow-lg group hover:scale-105"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                <span className="text-xl font-semibold text-white">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={closeModal}
          >
            <div
              className="relative p-4 bg-white rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-3 top-1 text-white bg-[#FF9D1A] rounded-full w-12 h-12 flex items-center justify-center text-2xl"
                onClick={closeModal}
              >
                X
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
        <a
          href="/"
          className="px-8 py-3 bg-[#FF9D1A] text-white rounded-lg text-sm font-semibold shadow-lg hover:bg-[#FF7F0D] focus:outline-none focus:ring-4 focus:ring-[#FF9D1A] focus:ring-opacity-50 transition duration-300 mt-6 inline-block"
        >
          Back to Home
        </a>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Gallery;
