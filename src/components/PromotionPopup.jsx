import { useState } from "react";

function PromotionPopup() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className="promotion-overlay">
      <div className="promotion-popup">
        <button
          className="promotion-close"
          onClick={() => setVisible(false)}
          aria-label="Close promotion"
        >
          ×
        </button>

        <p className="promotion-label">FIRST VISIT</p>

        <h2>15% OFF</h2>

        <p>
          Book your first appointment with The Fade Room
          and receive 15% off your service.
        </p>

        <a href="/booking" className="promotion-button">
          Book Now
        </a>
      </div>
    </div>
  );
}

export default PromotionPopup;