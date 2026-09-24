import { Link } from "react-router-dom";

const services = [
  {
    name: "Classic Cut",
    description: "A clean, timeless haircut finished to your style.",
    price: "R180",
  },
  {
    name: "Skin Fade",
    description: "A sharp skin fade with a detailed finish.",
    price: "R220",
  },
  {
    name: "Beard Trim",
    description: "Shape, trim and line-up for a clean beard.",
    price: "R120",
  },
];

const barbers = [
  {
    name: "Thabo Mokoena",
    role: "Senior Barber",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Lwazi Ndlovu",
    role: "Fade Specialist",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Kagiso Molefe",
    role: "Barber",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=80",
  },
];

function Home() {
  return (
    <div className="home">
      {/* HERO */}

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">PREMIUM BARBERING • PRETORIA</p>

          <h1>
            SHARP CUTS.
            <br />
            <span>CLEAN FADES.</span>
          </h1>

          <p className="hero-description">
            Modern barbering for people who care about their style.
            Walk in confident. Walk out sharper.
          </p>

          <div className="hero-buttons">
            <Link to="/booking" className="primary-button">
              Book Your Cut
            </Link>

            <Link to="/services" className="secondary-button">
              View Services
            </Link>
          </div>
        </div>

        <div className="hero-bottom">
          <span>EST. 2020</span>
          <span>PRETORIA, SOUTH AFRICA</span>
        </div>
      </section>

      {/* INTRO */}

      <section className="intro section">
        <div className="section-container intro-grid">
          <div>
            <p className="eyebrow">THE FADE ROOM</p>

            <h2>
              YOUR STYLE.
              <br />
              <span>OUR CRAFT.</span>
            </h2>
          </div>

          <div className="intro-text">
            <p>
              The Fade Room is a modern barber shop built around one
              simple idea — every client deserves a cut that makes
              them feel confident.
            </p>

            <p>
              From precision fades to classic cuts and beard grooming,
              our barbers focus on detail, consistency and a great
              experience every time.
            </p>

            <Link to="/about" className="text-link">
              Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="stats">
        <div className="section-container stats-grid">
          <div className="stat">
            <strong>5+</strong>
            <span>Years Experience</span>
          </div>

          <div className="stat">
            <strong>10K+</strong>
            <span>Happy Clients</span>
          </div>

          <div className="stat">
            <strong>4</strong>
            <span>Professional Barbers</span>
          </div>

          <div className="stat">
            <strong>6</strong>
            <span>Days A Week</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services-preview section">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>

              <h2>
                OUR <span>SERVICES</span>
              </h2>
            </div>

            <Link to="/services" className="text-link">
              View All Services →
            </Link>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.name}>
                <div className="service-number">
  {String(index + 1).padStart(2, "0")}
</div>

                <h3>{service.name}</h3>

                <p>{service.description}</p>

                <div className="service-bottom">
                  <strong>{service.price}</strong>
                  <span>45 MIN</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}

      <section className="why-us section">
        <div className="section-container why-grid">
          <div className="why-image">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85"
              alt="Barber working in The Fade Room"
            />
          </div>

          <div className="why-content">
            <p className="eyebrow">WHY THE FADE ROOM</p>

            <h2>
              MORE THAN
              <br />
              <span>A HAIRCUT.</span>
            </h2>

            <p>
              We combine traditional barbering with modern style.
              Every appointment is about precision, comfort and
              leaving you looking your best.
            </p>

            <div className="features">
              <div>
                <strong>01</strong>
                <div>
                  <h3>Precision</h3>
                  <p>Attention to every detail.</p>
                </div>
              </div>

              <div>
                <strong>02</strong>
                <div>
                  <h3>Experience</h3>
                  <p>Professional barbers who know their craft.</p>
                </div>
              </div>

              <div>
                <strong>03</strong>
                <div>
                  <h3>Consistency</h3>
                  <p>The same quality every appointment.</p>
                </div>
              </div>
            </div>

            <Link to="/booking" className="primary-button">
              Book An Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* BARBERS */}

      <section className="barbers-preview section">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MEET THE TEAM</p>

              <h2>
                OUR <span>BARBERS</span>
              </h2>
            </div>

            <Link to="/barbers" className="text-link">
              Meet The Team →
            </Link>
          </div>

          <div className="barber-grid">
            {barbers.map((barber) => (
              <article className="barber-card" key={barber.name}>
                <div className="barber-image">
                  <img src={barber.image} alt={barber.name} />
                </div>

                <div className="barber-info">
                  <div>
                    <h3>{barber.name}</h3>
                    <p>{barber.role}</p>
                  </div>

                  <span>→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="home-cta">
        <div className="home-cta-overlay"></div>

        <div className="home-cta-content">
          <p className="eyebrow">READY FOR A FRESH LOOK?</p>

          <h2>
            YOUR NEXT
            <br />
            <span>BEST CUT.</span>
          </h2>

          <p>
            Choose your service, barber and time.
            We'll take care of the rest.
          </p>

          <Link to="/booking" className="primary-button">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;