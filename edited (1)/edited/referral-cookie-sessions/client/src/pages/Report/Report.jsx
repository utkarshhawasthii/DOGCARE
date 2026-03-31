import React from "react";
import "./Report.css";

const Report = () => {
  return (
    <div className="report-container">

      <h1>Dog Accident Report & Emergency Care 🚨</h1>

      <p>
        Every year many street dogs and pet dogs are injured in road accidents or
        other unfortunate incidents. Immediate help and medical attention can
        save their lives. This page allows people to report dog accidents so that
        nearby rescue teams, volunteers, or animal welfare organizations can
        provide quick assistance.
      </p>

      <p>
        If you see a dog injured in an accident, you can report the incident by
        providing important details such as the location, condition of the dog,
        and time of the accident. Accurate information helps rescue teams reach
        the dog faster and provide necessary medical care.
      </p>

      <p>
        While helping an injured dog, always stay calm and avoid actions that may
        frighten the animal. Injured dogs may feel scared or be in pain and might
        behave unpredictably. If the dog appears aggressive or severely injured,
        contact a rescue organization or veterinarian immediately.
      </p>

      <h2>What To Do If You See an Injured Dog 🐕</h2>

      <ul>
        <li>Stay calm and observe the dog from a safe distance.</li>
        <li>Check if the dog is conscious and breathing properly.</li>
        <li>Move the dog away from traffic if it is safe to do so.</li>
        <li>Avoid lifting the dog if it has serious injuries.</li>
        <li>Offer clean water if the dog is conscious and calm.</li>
        <li>Contact a rescue organization or veterinarian immediately.</li>
      </ul>

      <h2>Report a Dog Accident 📋</h2>

      <p>
        If you have witnessed a dog accident or found an injured dog, please
        report the incident by providing details such as:
      </p>

      <ul>
        <li>Exact location of the accident</li>
        <li>Time when the accident occurred</li>
        <li>Condition of the dog (injured, unconscious, bleeding, etc.)</li>
        <li>Any nearby landmarks to help rescuers find the dog</li>
      </ul>

      <p>
        Providing accurate information helps rescue teams understand the
        situation and reach the dog as quickly as possible.
      </p>

      <h2>Emergency Animal Rescue Contacts 📞</h2>

      <div className="emergency-box">
        <p>SCAN Foundation Animal Helpline – +91 9487487000</p>
        <p>Animal Rehabilitation & Protection Front (ARPF India) – +91 9912034135</p>
        <p>Dhyan Foundation Animal Helpline – +91 9999099423</p>
        <p>Nagpur Municipal Corporation Stray Dog Helpline – 9175414524</p>
        <p>Animal Emergency Ambulance – 108</p>
        <p>Network for Animal Welfare Helpline – 9987013144</p>
        <p>Bhumi Jeevdaya Animal Rescue – 9022390970</p>
      </div>

    </div>
  );
};

export default Report;