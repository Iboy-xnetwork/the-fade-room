import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img src="/images/logo/logo1.png" alt="The Fade Room" />
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

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/barbers">Our Barbers</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Opening Hours */}
        <div className="footer-column">
          <h3>Opening Hours</h3>

          <p>Mon - Fri: 09:00 - 18:00</p>
          <p>Saturday: 08:00 - 16:00</p>
          <p>Sunday: 10:00 - 15:00</p>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <a href="tel:+27123456789">
            012 345 6789
          </a>

          <a href="mailto:hello@thefadroom.co.za">
            hello@thefadroom.co.za
          </a>

          {/* Social Links */}
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} The Fade Room. All rights reserved.
        </p>

        <Link to="/terms">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}

export default Footer;