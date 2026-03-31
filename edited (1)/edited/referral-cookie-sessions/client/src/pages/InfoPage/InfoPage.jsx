import React from "react";
import "./InfoPage.css";

const infoData = [
  {
    category: "Veterinary Hospitals in Nagpur 🏥",
    places: [
      {
        name: "Nagpur Government Veterinary Hospital",
        address: "Civil Lines, Nagpur, Maharashtra 440001",
        contact: "Not Available",
        services: "Dog treatment, vaccination, surgery, emergency veterinary care"
      },
      {
        name: "Veterinary Clinical Complex",
        address: "N Ambazari Road, Opposite Central Mall, Nagpur 440010",
        contact: "Not Available",
        services: "Veterinary treatment, diagnostics, vaccination, animal healthcare"
      },
      {
        name: "Dr. Amol Salankar’s Premier Pet Clinic",
        address: "Mankapur Ring Road, Narendra Nagar, Nagpur 440015",
        contact: "+91 9226858587",
        services: "Pet treatment, dog surgery, vaccination, health checkups"
      },
      {
        name: "Precise Pet Clinic And Accessories",
        address: "Vidya Vihar Road, Pratap Nagar Square, Nagpur 440022",
        contact: "+91 9561611115",
        services: "Veterinary consultation, pet treatment, dog health services"
      },
      {
        name: "Royal Pet Clinic",
        address: "194, Chhatrapati Nagar, Nagpur 440015",
        contact: "+91 9404951268",
        services: "Veterinary care, pet treatment, routine checkups"
      },
      {
        name: "Animal Health Care Center",
        address: "Central Avenue, Mangalwari, Nagpur 440008",
        contact: "Not Available",
        services: "Veterinary care, dog treatment, pet products"
      },
      {
        name: "Vet on Call Dr Himanshu",
        address: "Manewada, Nagpur 440034",
        contact: "+91 8421464739",
        services: "Veterinary consultation and emergency pet care"
      },
      {
        name: "Nagpur Veterinary College",
        address: "Seminary Hills, Nagpur 440006",
        contact: "+91 7122510883",
        services: "Veterinary hospital, research centre, dog treatment and vaccination"
      }
    ]
  },

  {
    category: "Dog Adoption Centres in Nagpur 🐶",
    places: [
      {
        name: "Nagpur SPCA",
        address: "Katol Road, Gittikhadan, Nagpur",
        contact: "0712-2521035",
        services: "Dog rescue, adoption, sterilization, animal welfare programs"
      },
      {
        name: "Save Speechless Organization",
        address: "Nagpur, Maharashtra",
        contact: "Not Available",
        services: "Dog rescue, rehabilitation, adoption services"
      },
      {
        name: "Rise For Tails",
        address: "Nagpur, Maharashtra",
        contact: "Not Available",
        services: "Rescue of injured dogs and adoption support"
      },
      {
        name: "The Bark Club Nagpur",
        address: "Nagpur, Maharashtra",
        contact: "Not Available",
        services: "Dog adoption awareness and rescue support"
      }
    ]
  },

  {
    category: "24/7 Animal Emergency Helplines 🚑",
    places: [
      {
        name: "Animal Emergency Ambulance",
        address: "India",
        contact: "108",
        services: "Animal emergency ambulance service"
      },
      {
        name: "Nagpur Municipal Corporation Animal Helpline",
        address: "Nagpur",
        contact: "9175414524",
        services: "Stray animal rescue"
      },
      {
        name: "SCAN Foundation Animal Helpline",
        address: "India",
        contact: "+91 9487487000",
        services: "Animal rescue and treatment"
      },
      {
        name: "Network for Animal Welfare",
        address: "India",
        contact: "+91 9987013144",
        services: "Animal welfare support and rescue"
      }
    ]
  }
];

const InfoPage = () => {
  return (
    <div className="info-container">

      <h1>Dog Services in Nagpur 🐕</h1>

      {infoData.map((section, index) => (
        <div key={index} className="category-section">

          <h2>{section.category}</h2>

          <div className="card-grid">

            {section.places.map((place, i) => (
              <div key={i} className="info-card">

                <h3>{place.name}</h3>

                <p><strong>📍 Address:</strong> {place.address}</p>

                <p><strong>📞 Contact:</strong> {place.contact}</p>

                <p><strong>🩺 Services:</strong> {place.services}</p>

              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  );
};

export default InfoPage;