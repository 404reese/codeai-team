import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

interface Slide {
  url: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Set up an interval to change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Automatically go to the next slide every 3 seconds
    }, 3000); // 3000ms = 3 seconds

    // Clean up the interval when the component unmounts or if the interval is reset
    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run the effect when `currentIndex` changes

  return (
    <div className="max-w-[1400px]  w-full m-auto py-16 px-4 relative group">
      {/* Only Image element is used here */}
      <div
        className="w-full bg-fuchsia-950 flex justify-center items-center bg-cover bg-no-repeat bg-center duration-500"
      >
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          className="w-4/5 h-auto object-contain"
        />
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Carousel;
