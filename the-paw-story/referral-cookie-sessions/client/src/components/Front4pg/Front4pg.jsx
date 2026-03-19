import React from "react";
import "./Front4pg.css";

const Front4pg = () => {
  return (
    <div className="help-section">
      {/* HOW YOU CAN HELP */}
      <div className="help-container">
        <h2 className="help-title">How You Can Help</h2>

        <p className="help-intro">
          At <strong>The Paw Story</strong>, we believe that the life of a street
          dog doesn’t have to be a struggle. Small acts of kindness can create a
          ripple of change.
        </p>

        <p className="help-sub">
          Here’s how you can be a part of their story:
        </p>

        <ul className="help-list">
          <li>
            <span>1.</span>
            <strong> Leave Out Fresh Food & Water</strong>
            <p>
              A bowl of water or a little food outside your home—especially
              during hot days—can save lives.
            </p>
          </li>

          <li>
            <span>2.</span>
            <strong> Support Local Animal Welfare Groups</strong>
            <p>
              Donate, volunteer, or even share their work. Every bit of support
              helps them rescue and care for more lives.
            </p>
          </li>

          <li>
            <span>3.</span>
            <strong> Report Injured or Sick Dogs</strong>
            <p>
              If you see a dog in need, contact nearby animal rescues or
              veterinarians for immediate assistance.
            </p>
          </li>

          <li>
            <span>4.</span>
            <strong> Adopt, Don’t Shop</strong>
            <p>
              Give a street dog a forever home instead of buying from breeders.
              Adoption changes two lives—their’s and yours.
            </p>
          </li>

          <li>
            <span>5.</span>
            <strong> Educate & Spread Awareness</strong>
            <p>
              Encourage humane treatment of strays and promote responsible pet
              parenting in your community.
            </p>
          </li>
        </ul>

        <p className="help-quote">
          Every street dog carries a heart full of resilience and courage.  
          All they need is a chance—to be seen, loved, and cared for.
        </p>
      </div>

      {/* BRAND STORY */}
      <div className="story-container">
        <h2 className="story-title">The Paw Story</h2>
        <p className="story-tagline">A Safe Space for Every Paw 🐾</p>

        <p>
          The Paw Story is built on love, care, and compassion for animals. We
          are proud to be one of India’s growing pet-centric communities,
          created by pet parents, for pet parents.
        </p>

        <p>
          We’re not just a service provider—we’re storytellers of love, trust,
          and companionship. Every service we offer is driven by a deep respect
          for animals and their well-being.
        </p>

        <h3 className="why-title">Why Choose The Paw Story?</h3>

        <ul className="why-list">
          <li>✔ On-Demand Services, anytime, anywhere</li>
          <li>✔ Verified & Trusted Caregivers with a strict 5-point background check</li>
          <li>✔ Peace of Mind with regular updates through chats, photos, and videos</li>
        </ul>

        <p className="story-end">
          At The Paw Story, every pet matters, every life has a story—and we’re
          here to make it a happy one.
        </p>
      </div>
    </div>
  );
};

export default Front4pg;
