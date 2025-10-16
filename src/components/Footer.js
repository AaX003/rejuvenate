import '../css/Footer.css';
import { FaInstagram, FaFacebook, FaX, FaYoutube } from 'react-icons/fa6';
import { CiMail, CiPhone } from "react-icons/ci";

function FooterSection() {
  return (
    <footer className="container__footer" aria-label="Site footer">
      <section className="footer-hero">
        <div className="hero__footer">
          <h3 className="title__footer">REJUV</h3>
          <p className="subtitle__footer">
            Natural skincare that delivers real results. Clean ingredients, ethical practices,
            and beautiful skin for everyone.
          </p>

          <ul className="social-links" aria-label="Social media">
            <li className="social-tag">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </li>
            <li className="social-tag">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
            </li>
            <li className="social-tag">
              <a href="#" aria-label="X (formerly Twitter)"><FaX /></a>
            </li>
            <li className="social-tag">
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </li>
          </ul>
        </div>

        <div className="footer-content">
          <nav className="main-content" aria-label="Footer navigation">
            <ul className="product-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Products</h3></li>
              <li className="nav-link"><a href="#products">Face Serums</a></li>
              <li className="nav-link"><a href="#products">Moisturizers</a></li>
              <li className="nav-link"><a href="#products">Cleansers</a></li>
              <li className="nav-link"><a href="#products">Face Masks</a></li>
              <li className="nav-link"><a href="#products">Gift Sets</a></li>
              <li className="nav-link"><a href="#products">New Arrivals</a></li>
            </ul>

            <ul className="support-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Support</h3></li>
              <li className="nav-link"><a href="#">Contact Us</a></li>
              <li className="nav-link"><a href="#">Shipping Info</a></li>
              <li className="nav-link"><a href="#">Returns & Exchanges</a></li>
              <li className="nav-link"><a href="#">Size Guide</a></li>
              <li className="nav-link"><a href="#">FAQ</a></li>
              <li className="nav-link"><a href="#">Skin Quiz</a></li>
            </ul>

            <ul className="contact-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Contact</h3></li>
              <li className="nav-link">
                <CiMail aria-hidden="true" />
                <a href="mailto:skin@rejuv.com">skin@rejuv.com</a>
              </li>
              <li className="nav-link">
                <CiPhone aria-hidden="true" />
                <a href="tel:1800292REJUV">1-800-292-REJUV</a>
              </li>
            </ul>

            <figure className="hint-container">
              <figcaption>
                Customer service hours: Mon–Fri 9am–6pm ET Sat–Sun 10am–4pm ET
              </figcaption>
            </figure>
          </nav>
          <hr style={{ border: "1px solid #cacaca10", background: "none" }} />
          <div className="add-content">
            <small className="rights-reserved-msg">© 2025 REJUV. All rights reserved.</small>
            <ul className="legal-links">
              <li className="legal-link"><a href="#">Privacy Policy</a></li>
              <li className="legal-link"><a href="#">Terms of Service</a></li>
              <li className="legal-link"><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default FooterSection;
