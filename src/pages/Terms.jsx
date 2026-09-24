import { Link } from "react-router-dom";

function Terms() {
return ( <div className="terms-page"> <section className="terms-hero"> <div className="terms-hero-overlay">

</div>
    <div className="terms-hero-content">
      <p className="eyebrow">THE FADE ROOM</p>

      <h1>
        TERMS &<br />
        <span>CONDITIONS.</span>
      </h1>

      <p>
        Please read the terms below before booking an appointment
        with The Fade Room.
      </p>
    </div>
  </section>

  <section className="terms-section section">
    <div className="section-container terms-layout">
      <aside className="terms-sidebar">
        <p className="eyebrow">IMPORTANT</p>

        <h2>
          KNOW<br />
          <span>THE RULES.</span>
        </h2>

        <p>
          These terms help us keep appointments organised and
          provide a smooth experience for every client.
        </p>

        <Link to="/booking" className="primary-button">
          Book An Appointment
        </Link>
      </aside>

      <div className="terms-content">
        <article className="terms-item">
          <span>01</span>
          <div>
            <h3>Appointments</h3>
            <p>
              Appointments should be booked using the booking form
              provided on our website. Please make sure that the
              information you provide is correct before submitting
              your booking.
            </p>
          </div>
        </article>

        <article className="terms-item">
          <span>02</span>
          <div>
            <h3>Arrival Time</h3>
            <p>
              Please arrive a few minutes before your scheduled
              appointment. Arriving late may reduce the time available
              for your service or may require your appointment to be
              rescheduled.
            </p>
          </div>
        </article>

        <article className="terms-item">
          <span>03</span>
          <div>
            <h3>Cancellations & Rescheduling</h3>
            <p>
              If you are unable to attend your appointment, please
              contact The Fade Room as soon as possible. We may ask
              you to reschedule your appointment depending on
              availability.
            </p>
          </div>
        </article>

        <article className="terms-item">
          <span>04</span>
          <div>
            <h3>Services & Pricing</h3>
            <p>
              Service prices displayed on the website are subject
              to change. The price applicable to your appointment
              will be confirmed before or during your visit.
            </p>
          </div>
        </article>

        <article className="terms-item">
          <span>05</span>
          <div>
            <h3>Customer Information</h3>
            <p>
              Information submitted through our booking and contact
              forms should be accurate. Personal information will only
              be used for purposes related to appointments, enquiries
              and communication with The Fade Room.
            </p>
          </div>
        </article>

        <article className="terms-item">
          <span>06</span>
          <div>
            <h3>Website Information</h3>
            <p>
              We aim to keep the information on this website accurate
              and up to date. Service availability, prices, opening
              hours and other information may change without notice.
            </p>
          </div>
        </article>

        <article className="terms-item">
          <span>07</span>
          <div>
            <h3>Booking Confirmation</h3>
            <p>
              Submitting a booking request does not automatically
              guarantee an appointment until availability has been
              checked and the booking has been confirmed.
            </p>
          </div>
        </article>

        <article className="terms-item">
          <span>08</span>
          <div>
            <h3>Contact</h3>
            <p>
              If you have any questions about these terms or your
              appointment, please contact The Fade Room before your
              scheduled visit.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section className="terms-bottom">
    <div className="terms-bottom-content">
      <p className="eyebrow">THE FADE ROOM</p>

      <h2>
        CLEAN CUTS.<br />
        <span>CLEAR TERMS.</span>
      </h2>

      <p>
        Thank you for choosing The Fade Room. We look forward to
        seeing you in the chair.
      </p>

      <Link to="/contact" className="secondary-button">
        Contact Us
      </Link>
    </div>
  </section>
</div>
);
}
export default Terms;
