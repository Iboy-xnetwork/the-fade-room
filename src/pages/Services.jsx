import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServices } from "../services/api";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices();

        if (data.success) {
          setServices(data.services);
        } else {
          setError(data.message || "Failed to load services.");
        }
      } catch (err) {
        setError(err.message || "Failed to load services.");
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <div className="services-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">
          <p className="eyebrow">THE FADE ROOM</p>

          <h1>
            OUR
            <br />
            <span>SERVICES.</span>
          </h1>

          <p>
            Precision cuts, clean fades and professional grooming designed
            around your style.
          </p>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="services-intro section">
        <div className="section-container services-intro-grid">
          <div>
            <p className="eyebrow">WHAT WE OFFER</p>

            <h2>
              FIND YOUR
              <br />
              <span>STYLE.</span>
            </h2>
          </div>

          <div className="services-intro-text">
            <p>
              Whether you want a classic cut, a fresh fade or a complete
              grooming experience, our barbers take the time to get every detail
              right.
            </p>

            <p>
              Choose your service below and book an appointment with one of our
              professional barbers.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="services-list section">
        <div className="section-container">
          <div className="services-list-heading">
            <div>
              <p className="eyebrow">PRICING & SERVICES</p>

              <h2>
                CHOOSE YOUR <span>SERVICE</span>
              </h2>
            </div>
          </div>

          <div className="services-page-grid">
            {loading ? (
              <p>Loading services...</p>
            ) : error ? (
              <p>{error}</p>
            ) : services.length === 0 ? (
              <p>No services are currently available.</p>
            ) : (
              services.map((service, index) => (
                <article className="service-page-card" key={service.id}>
                  <div className="service-page-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{service.duration_minutes} MIN</span>
                  </div>

                  <h3>{service.name}</h3>

                  <p>{service.description}</p>

                  <div className="service-page-bottom">
                    <strong>R{Number(service.price).toFixed(0)}</strong>

                    <Link to="/booking">Book Now →</Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-cta-overlay"></div>

        <div className="services-cta-content">
          <p className="eyebrow">READY FOR YOUR NEXT CUT?</p>

          <h2>
            BOOK YOUR
            <br />
            <span>APPOINTMENT.</span>
          </h2>

          <p>
            Select your service, choose your barber and pick a time that works
            for you.
          </p>

          <Link className="primary-button" to="/booking">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;