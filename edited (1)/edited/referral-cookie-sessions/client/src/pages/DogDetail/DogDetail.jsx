import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DogDetail.css";

const dogData = [
  {
    id: "bruno",
    name: "Bruno",
    breed: "Labrador",
    age: "2 Years",
    image: "/DogImages/dog1.jpg",
    description: "Friendly and playful Labrador."
  },
  {
    id: "rocky",
    name: "Rocky",
    breed: "German Shepherd",
    age: "3 Years",
    image: "/DogImages/dog2.jpg",
    description: "Brave and loyal guard dog."
  },
  {
    id: "milo",
    name: "Milo",
    breed: "Indie",
    age: "1 Year",
    image: "/DogImages/dog3.jpg",
    description: "Cute indie puppy rescued from street."
  }
];

const DogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dog = dogData.find(d => d.id === id);

  if (!dog) return <h2>Dog not found</h2>;

  return (
    <div className="dog-detail">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <img src={dog.image} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p><strong>Breed:</strong> {dog.breed}</p>
      <p><strong>Age:</strong> {dog.age}</p>
      <p>{dog.description}</p>

      <button className="adopt-btn">Adopt Me</button>
    </div>
  );
};

export default DogDetail;
