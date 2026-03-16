import React from "react";
import "./DogHealth.css";

const dogHealthData = [
  {
    id: 1,
    title: "Dog Health & Daily Care 🐶",
    description:
      "Keeping a dog healthy requires proper daily care and attention. Dogs need a balanced diet, clean water, regular exercise, and a safe environment. Owners should ensure their dog eats high-quality food suitable for their age, size, and breed. Daily grooming such as brushing their coat, cleaning ears, and checking their paws helps prevent infections and skin problems. Regular walks and playtime keep dogs physically fit and mentally active. Dogs should also have a comfortable sleeping area and a clean living space. Paying attention to changes in behavior, appetite, or energy levels can help detect health issues early."
  },
  {
    id: 2,
    title: "Vaccination Schedule ",
    description:
      "Vaccinations protect dogs from serious diseases. Puppies usually begin vaccinations at 6–8 weeks. Common schedule: 6–8 weeks Distemper & Parvovirus, 10–12 weeks DHPP, 12–16 weeks Rabies vaccine, 14–16 weeks DHPP booster. Every year dogs should receive rabies boosters and general vaccination checks to stay protected from dangerous diseases."
  },
  {
    id: 3,
    title: "Common Dog Diseases & Symptoms 🩺",
    description:
      "Dogs can suffer from various diseases such as Parvovirus, Distemper, Rabies, skin infections, and flea or tick infestations. Symptoms may include vomiting, diarrhea, weakness, itching, loss of appetite, or unusual behavior. If any serious symptoms appear, dog owners should immediately consult a veterinarian."
  },
  {
    id: 4,
    title: "Nutrition & Exercise for Dogs 🥗🏃",
    description:
      "Dogs require a balanced diet containing proteins, fats, vitamins, and minerals. Avoid feeding harmful foods like chocolate, grapes, onions, and very salty foods. Dogs should also get regular exercise such as daily walks for 30–60 minutes, running, or interactive games like fetch to maintain good physical and mental health."
  },
  {
    id: 5,
    title: "Parasite Prevention (Fleas, Ticks & Worms) 🐜",
    description:
      "Parasites like fleas, ticks, and worms can cause infections, itching, and health issues in dogs. Prevention includes using vet-recommended flea treatments, checking your dog’s coat regularly, keeping bedding clean, and following proper deworming schedules."
  },
  {
    id: 6,
    title: "Regular Vet Checkups & Health Monitoring 🩺",
    description:
      "Regular vet visits help detect diseases early. Puppies should visit the vet every 3–4 weeks until vaccinations are complete. Adult dogs should have yearly checkups, while senior dogs should visit every 6 months. Vets check weight, teeth, heart health, skin condition, and vaccination status."
  }
];

const DogHealth = () => {
  return (
    <div className="health-container">
      <h1>Dog Health Guide</h1>
      <div style={{textAlign: 'center', marginBottom: '2rem'}}>
        <a href="/detect" style={{color: '#4a90e2', fontSize: '1.2em'}}>🔍 AI Skin Disease Detector →</a>
      </div>

      <div className="card-container">
        {dogHealthData.map((item) => (
          <div className="health-card" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogHealth;