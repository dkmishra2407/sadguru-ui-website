import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1725489892948-9ace0d73f9ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1725628426929-ce12123c03db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const maxSlide = images.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === maxSlide - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide - 1 : prev - 1));
  };

  return (
    <div className="home-container">
      <section className="home">
        <div className="carousel-container">
          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {images.map((image, index) => (
              <div className="carousel-slide" key={index}>
                <img className="carousel-img" src={image} alt={`slide-${index}`} />
              </div>
            ))}
          </div>
          <button className="carousel-btn btn-prev" onClick={prevSlide}>
            <MdChevronLeft size={30} />
          </button>
          <button className="carousel-btn btn-next" onClick={nextSlide}>
            <MdChevronRight size={30} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;