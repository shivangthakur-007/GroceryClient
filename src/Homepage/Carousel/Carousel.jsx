import React, { useState } from "react";

function Carousel() {
  const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
    "https://via.placeholder.com/800x400?text=Slide+4",
  ];
  // Array of images (you can replace the URLs with your own images)

  // State to keep track of the active index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Render the current slide */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-96 object-cover"
        />
      </div>
      <div>
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 z-10 p-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full focus:outline-none"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 z-10 p-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full focus:outline-none"
        >
          ❯
        </button>
      </div>
      {/* Dots for navigation (optional) */}
      {/* <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Carousel;
