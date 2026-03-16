import React, { useState, useEffect } from "react";
import "../pages/Frontpg.css";
import Front2pg from "../components/Front2pg/Front2pg";
import Front3pg from "../components/Front3pg/Front3pg";
import Front4pg from "../components/Front4pg/Front4pg";

const slides = [
  {
    title: "Voice For the Voiceless",
    text:
      "Our Organization works for stray animal rescue, and an awareness organization, working to help animals heal and be heard",
    image: "/DogImages/dog1.jpg",
    showDonate: true,
    // joinLink: "https://forms.gle/i8bUskB95Knn1mGeA",
    theme: "orange"
  },
  {
    title: "Education & Awareness",
    text:
      "We believe that there must be constant interplay between the shelter and our society & community.",
    image: "/DogImages/dog2.jpg",
    showDonate: false,
    learnLink:
      "https://animalfoundation.com/whats-going-on/blog/basic-necessities-proper-pet-care",
    theme: "blue"
  }
];

const Frontpg = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  const changeSlide = (direction) => {
    setAnimate(false);
    setTimeout(() => {
      setCurrent((prev) => {
        if (direction === "next") {
          return (prev + 1) % slides.length;
        } else {
          return prev === 0 ? slides.length - 1 : prev - 1;
        }
      });
      setAnimate(true);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide("next");
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <>
    <div className={`banner ${slide.theme}`}>
      <div className={`banner-content ${animate ? "fade-in" : "fade-out"}`}>
        <div className="banner-text">
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>

          <div className="banner-buttons">
            {slide.showDonate && (
              <a href="/donate" className="btn donate">Donate</a>
            )}
            <a
              href={slide.joinLink || slide.learnLink}
              target="_blank"
              rel="noreferrer"
              className="btn join"
            >
              {slide.showDonate ? "Join Us" : "Learn"}
            </a>
          </div>
        </div>

        <div className="banner-image">
          <img src={slide.image} alt={slide.title} />
        </div>
      </div>

      {/* SLIDER CONTROLS */}
      <button
        className="arrow left"
        onClick={() => changeSlide("prev")}
      >
        ❮
      </button>

      <button
        className="arrow right"
        onClick={() => changeSlide("next")}
      >
        ❯
      </button>
    </div>
    <div>
      <Front2pg/>
    </div>
    <div>
      <Front3pg/>
    </div>
    <div>
      <Front4pg/>
    </div>
    </>
  );
};


export default Frontpg;
