import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <p className="eyebrow">THE FADE ROOM</p>

          <h1>
            GET IN
            <br />
            <span>TOUCH.</span>
          </h1>

          <p>
            Have a question, need help with a booking or simply want
            to know more? We're here to help.
          </p>
        </div>
      </section>

      {/* CONTACT AREA */}

      <section className="contact-section section">
        <div className="section-container contact-grid">

          {/* CONTACT DETAILS */}

          <div className="contact-details">

            <p className="eyebrow">CONTACT US</p>

            <h2>
              LET'S TALK
              <br />
              <span>BARBERING.</span>
            </h2>

            <p className="contact-intro">
              Whether you're looking to book an appointment or have
              a question about our services, get in touch with
              The Fade Room.
            </p>

            <div className="contact-info-list">

              <div className="contact-info-item">
                <span>PHONE</span>

                <a href="tel:+27123456789">
                  012 345 6789
                </a>
              </div>

              <div className="contact-info-item">
                <span>EMAIL</span>

                <a href="mailto:hello@thefadroom.co.za">
                  hello@thefadroom.co.za
                </a>
              </div>

              <div className="contact-info-item">
                <span>LOCATION</span>

                <p>
                  Pretoria, South Africa
                </p>
              </div>

              <div className="contact-info-item">
                <span>OPENING HOURS</span>

                <p>
                  Monday - Friday: 09:00 - 18:00
                  <br />
                  Saturday: 08:00 - 16:00
                  <br />
                  Sunday: 10:00 - 15:00
                </p>
              </div>

            </div>

          </div>

          {/* FORM */}

          <div className="contact-form-wrapper">

            {!submitted ? (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-heading">
                  <p className="eyebrow">SEND A MESSAGE</p>

                  <h3>
                    HOW CAN WE
                    <br />
                    <span>HELP?</span>
                  </h3>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-name">
                    FULL NAME
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="contact-email">
                      EMAIL
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">
                      PHONE
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Your phone number"
                    />
                  </div>

                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">
                    SUBJECT
                  </label>

                  <select id="contact-subject" required>
                    <option value="">
                      Select a subject
                    </option>

                    <option value="booking">
                      Booking Question
                    </option>

                    <option value="services">
                      Services
                    </option>

                    <option value="general">
                      General Enquiry
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">
                    MESSAGE
                  </label>

                  <textarea
                    id="contact-message"
                    rows="6"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="primary-button contact-submit"
                >
                  Send Message
                </button>

              </form>
            ) : (
              <div className="contact-success">

                <span className="contact-success-icon">
                  ✓
                </span>

                <p className="eyebrow">MESSAGE SENT</p>

                <h3>
                  THANK
                  <br />
                  <span>YOU.</span>
                </h3>

                <p>
                  Thanks for contacting The Fade Room. We'll get
                  back to you as soon as possible.
                </p>

                <button
                  className="secondary-button"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* LOCATION */}

      <section className="contact-location">

        <div className="contact-location-map">
          <div className="map-placeholder">
            <span>THE FADE ROOM</span>
            <p>Pretoria, South Africa</p>
          </div>
        </div>

        <div className="contact-location-content">

          <p className="eyebrow">COME VISIT US</p>

          <h2>
            YOUR CHAIR
            <br />
            <span>AWAITS.</span>
          </h2>

          <p>
            Visit The Fade Room for a fresh cut, clean fade and
            professional grooming experience.
          </p>

          <Link to="/booking" className="primary-button">
            Book An Appointment
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Contact;