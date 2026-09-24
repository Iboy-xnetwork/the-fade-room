import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBarbers } from "../services/api";

function Barbers() {
  const [barbers, setBarbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBarbers = async () => {
      try {
        const data = await getBarbers();

        if (data.success) {
          setBarbers(data.barbers);
        } else {
          setError(data.message || "Failed to load barbers.");
        }
      } catch (err) {
        setError(err.message || "Failed to load barbers.");
      } finally {
        setLoading(false);
      }
    };

    loadBarbers();
  }, []);

  return (
    <div className="barbers-page">
      {/* HERO */}
      <section className="barbers-hero">
        <div className="barbers-hero-overlay"></div>

        <div className="barbers-hero-content">
          <p className="eyebrow">THE FADE ROOM TEAM</p>

          <h1>
            MEET OUR
            <br />
            <span>BARBERS.</span>
          </h1>

          <p>
            Experienced professionals dedicated to giving you a clean cut and a
            great experience every time.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="barbers-intro section">
        <div className="section-container barbers-intro-grid">
          <div>
            <p className="eyebrow">THE TEAM</p>

            <h2>
              CRAFTED BY
              <br />
              <span>PROFESSIONALS.</span>
            </h2>
          </div>

          <div className="barbers-intro-text">
            <p>
              Our barbers bring different skills, styles and experience to the
              chair, but they all share the same focus — quality.
            </p>

            <p>
              Whether you want a sharp fade, a classic cut or a detailed beard
              trim, our team is ready to help you find a style that works for
              you.
            </p>
          </div>
        </div>
      </section>

      {/* BARBERS */}
      <section className="barbers-list section">
        <div className="section-container">
          <div className="barbers-list-heading">
            <p className="eyebrow">OUR TEAM</p>

            <h2>
              THE <span>BARBERS</span>
            </h2>
          </div>

          <div className="barbers-page-grid">
            {loading ? (
              <p>Loading barbers...</p>
            ) : error ? (
              <p>{error}</p>
            ) : barbers.length === 0 ? (
              <p>No barbers are currently available.</p>
            ) : (
              barbers.map((barber, index) => (
                <article className="barber-page-card" key={barber.id}>
                  <div className="barber-page-image">
                    <img
                      src={
                        barber.image ||
                        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=85"
                      }
                      alt={barber.name}
                    />

                    <span className="barber-page-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="barber-page-info">
                    <div>
                      <h3>{barber.name}</h3>

                      <p className="barber-role">{barber.role}</p>
                    </div>

                    <div className="barber-details">
                      <p>{barber.experience}</p>
                      <p>{barber.specialty}</p>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="barbers-cta">
        <div className="barbers-cta-overlay"></div>

        <div className="barbers-cta-content">
          <p className="eyebrow">FIND YOUR BARBER</p>

          <h2>
            READY FOR A
            <br />
            <span>FRESH CUT?</span>
          </h2>

          <p>
            Choose your service, select your preferred barber and book your
            appointment.
          </p>

          <Link to="/booking" className="primary-button">
            Book An Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Barbers;