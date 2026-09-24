import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span>FADE</span>
            <strong>ROOM</strong>
          </Link>

          <p>
            Sharp cuts. Clean fades. Your style.
          </p>

          <p className="footer-location">
            Pretoria, South Africa
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/barbers">Our Barbers</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Opening Hours</h3>

          <p>Mon - Fri: 09:00 - 18:00</p>
          <p>Saturday: 08:00 - 16:00</p>
          <p>Sunday: 10:00 - 15:00</p>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <a href="tel:+27123456789">012 345 6789</a>
          <a href="mailto:hello@thefadroom.co.za">
            hello@thefadroom.co.za
          </a>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} The Fade Room. All rights reserved.
        </p>

        <Link to="/terms">Terms & Conditions</Link>
      </div>
    </footer>
  );
}

export default Footer;