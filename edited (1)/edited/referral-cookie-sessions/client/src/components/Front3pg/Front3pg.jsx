import React, { useState } from "react";
import "./Front3pg.css";

const thoughts = [
  {
    name: "Minal",
    text:
      "Stray dogs deserve love and compassion just like any other pet. A small act of kindness, like feeding a stray, can make a big difference in their lives."
  },
  {
    name: "Manthan",
    text:
      "Stray dogs are incredibly loyal and grateful to those who show them kindness. Providing shelter and care makes the world a better place."
  },
  {
    name: "Mohit",
    text:
      "Every stray deserves a safe home and a warm meal. Helping stray dogs teaches us empathy and kindness towards all living beings."
  },
  {
    name: "Mrunal",
    text:
      "Stray dogs are souls longing for love. Giving them care and protection creates a kinder society for everyone."
  },
  {
    name: "Nandini",
    text:
      "A rescued stray dog will always remember the kindness shown to them. Spreading awareness about adoption can save many lives."
  }
];

const Front3pg = () => {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % thoughts.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? thoughts.length - 1 : prev - 1
    );

  const item = thoughts[current];

  return (
    <div className="thought-section">
      <h2 className="thought-title">Our Team Members Thoughts</h2>

      <div className="thought-box">
        <h3 className="thought-name">{item.name}</h3>
        <p className="thought-text">“{item.text}”</p>
      </div>

      <div className="thought-controls">
        <button onClick={prev}>❮</button>
        <button onClick={next}>❯</button>
      </div>
    </div>
  );
};

export default Front3pg;
