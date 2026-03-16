import React, { useState } from "react";
import "./Front2pg.css";

const serviceSlides = [
  [
    {
      title: "Book Veterinary Appointment",
      text:
        "From injured street dogs to abandoned cattle, we provide a diverse range of animal cases for veterinarians to treat.",
     icon: "/ServiceIcon/icon1.png",
      link: "https://www.vetlive.in/consult-a-vet-online/",
      btn: "Book Now"
    },
    {
      title: "Animal Shelter for Adoption",
      text:
        "We encourage people to adopt rescued animals instead of buying from breeders.",
      icon: "/ServiceIcon/icon2.png",
      link:
        "https://dogwithblog.in/pune-animal-shelters-and-emergency-helplines/",
      btn: "Adoption"
    },
    {
      title: "CSR Opportunity for Industry",
      text:
        "Companies can engage in meaningful CSR projects that create a positive social footprint.",
      icon: "/ServiceIcon/icon3.png",
      link:
        "https://yourstory.com/socialstory/2023/05/animal-welfare-social-individual-responsibility",
      btn: "Read More"
    }
  ],
  [
    {
      title: "Community Outreach & Events",
      text:
        "We organize events both at shelter premises and outside to build awareness.",
      icon: "/ServiceIcon/icon1.png",
      link:
        "https://petsmartcharities.org/adopt-a-pet/adoption-events",
      btn: "Events Near You"
    },
    {
      title: "Volunteer Opportunities & Training",
      text:
        "Join us in animal care, rescue operations, and community programs.",
      icon: "/ServiceIcon/icon2.png",
      link: "https://forms.gle/i8bUskB95Knn1mGeA",
      btn: "Register"
    },
    {
      title: "Visit Us",
      text:
        "Meet our furry friends and see how our shelter operates.",
      icon: "/ServiceIcon/icon3.png",
      link: "https://maps.app.goo.gl/m5rx8ZC6MTYadBXUA",
      btn: "Maps"
    }
  ]
];

const Front2pg = () => {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % serviceSlides.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? serviceSlides.length - 1 : prev - 1
    );

  return (
    <div className="services-section">
      <div className="services-container">
        {serviceSlides[current].map((service, index) => (
          <div
            key={index}
            className={`service-box ${
              index === 1 ? "active" : ""
            }`}
          >
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>

            <h3>{service.title}</h3>
            <p>{service.text}</p>

            <a
              href={service.link}
              target="_blank"
              rel="noreferrer"
              className="service-btn"
            >
              {service.btn}
            </a>
          </div>
        ))}
      </div>

      {/* CONTROLS */}
      <button className="service-arrow left" onClick={prev}>
        ❮
      </button>
      <button className="service-arrow right" onClick={next}>
        ❯
      </button>
    </div>
  );
};

export default Front2pg;
