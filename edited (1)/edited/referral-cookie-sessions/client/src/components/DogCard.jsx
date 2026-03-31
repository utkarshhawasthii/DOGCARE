import React from "react";
import "./DogCard.css";
import { useNavigate } from "react-router-dom";

const DogCard = ({ dog }) => {
    const navigate = useNavigate();
  return (
    <div className="dog-card">
      <img
        src={dog.image}
        alt={dog.name}
        className="dog-image"
      />

      <div className="dog-info">
        <h3>{dog.name}</h3>
        <p className="breed">{dog.breed}</p>

        <div className="btn-group">
           <button
            className="btn view"
            onClick={() => navigate(`/dog/${dog.id}`)}
          >
            View More
          </button>
          <button className="btn buy">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
