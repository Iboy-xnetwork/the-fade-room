import { Link } from "react-router-dom";

const values = [
  {
    number: "01",
    title: "Precision",
    description:
      "Every cut is finished with attention to detail, from the first trim to the final line-up.",
  },
  {
    number: "02",
    title: "Style",
    description:
      "We combine classic barbering techniques with modern styles that fit your personality.",
  },
  {
    number: "03",
    title: "Experience",
    description:
      "A great haircut is only part of the experience. We want every visit to feel comfortable and professional.",
  },
  {
    number: "04",
    title: "Consistency",
    description:
      "Whether it is your first visit or your fiftieth, you should leave looking and feeling your best.",
  },
];

function About() {
  return (
    <div className="about-page">

      {/* PAGE HERO */}

      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <p className="eyebrow">THE FADE ROOM</p>

          <h1>
            MORE THAN
            <br />
            <span>A HAIRCUT.</span>
          </h1>

          <p>
            A modern barbering experience built around confidence,
            craftsmanship and personal style.
          </p>
        </div>
      </section>

      {/* OUR STORY */}

      <section className="about-story section">
        <div className="section-container about-story-grid">

          <div className="about-story-heading">
            <p className="eyebrow">OUR STORY</p>

            <h2>
              BUILT FOR
              <br />
              <span>YOUR STYLE.</span>
            </h2>
          </div>

          <div className="about-story-text">
            <p>
              The Fade Room was created with one simple goal — to give
              people a barbering experience where quality, style and
              attention to detail come first.
            </p>

            <p>
              From clean fades and classic cuts to beard grooming, our
              barbers take pride in creating looks that suit each client.
              We believe a good haircut should not only look good, but
              make you feel confident when you walk out the door.
            </p>

            <p>
              Our approach combines traditional barbering with modern
              techniques, creating a relaxed environment where every
              appointment is focused on you.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE + MESSAGE */}

      <section className="about-feature section">
        <div className="section-container about-feature-grid">

          <div className="about-feature-image">
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85"
              alt="Barber giving a professional haircut"
            />
          </div>

          <div className="about-feature-content">
            <p className="eyebrow">THE EXPERIENCE</p>

            <h2>
              LOOK GOOD.
              <br />
              <span>FEEL GOOD.</span>
            </h2>

            <p>
              We believe your time in the barber chair should be more
              than just another appointment.
            </p>

            <p>
              From the atmosphere in the shop to the final details of
              your cut, everything is designed to give you a clean,
              comfortable and professional experience.
            </p>

            <Link to="/booking" className="primary-button">
              Book Your Appointment
            </Link>
          </div>

        </div>
      </section>

      {/* VALUES */}

      <section className="about-values section">
        <div className="section-container">

          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE STAND FOR</p>

              <h2>
                OUR <span>VALUES</span>
              </h2>
            </div>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span className="value-number">{value.number}</span>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* LOCATION */}

      <section className="about-location">
        <div className="about-location-overlay"></div>

        <div className="about-location-content">
          <p className="eyebrow">COME VISIT US</p>

          <h2>
            PRETORIA.
            <br />
            <span>YOUR CHAIR AWAITS.</span>
          </h2>

          <p>
            Find us in Pretoria, South Africa and experience
            The Fade Room for yourself.
          </p>

          <Link to="/contact" className="secondary-button">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;