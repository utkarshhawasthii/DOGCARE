import React from "react";
import './Adoption.css';
import DogCard from '../../components/DogCard.jsx';



const dogs = [
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



const Adoption = () => {
  return (

       <div className="adoption-page">
 <video autoPlay muted loop className="bg-video">
        <source src="DogImages/bg-video.mp4" type="video/mp4"/>
      </video>

    <div className="adoption-list" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {dogs.map((dog, index) => (
        <DogCard key={index} dog={dog} />
      ))}
    </div>
    </div>
//  <div className="adoption-page">

//       {/* Background Video */}
//       <video autoPlay muted loop className="bg-video">
//         <source src="DogImages/bg-video.mp4" type="video/mp4"/>
//       </video>

//       <div className="adoption-list">
//         {dogs.map((dog) => (
//           <DogCard key={dog.id} dog={dog} />
//         ))}
//       </div>

//     </div>
  );
};

export default Adoption;
