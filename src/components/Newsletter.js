import '../css/Newsletter.css';

// SVGS
import { CiGift, CiMail } from "react-icons/ci";
import { TbBellStar } from "react-icons/tb";

function NewsLetterSection() {
  return (
    <div className="container__newsletter">
      <section className="hero__newsletter">
        <header className="title__hero">
          <h3 className="title__newsletter">
            Subscribe to REJUV
          </h3>
          <p className="subtitle__newsletter">
            Join our newsletter for exclusive skincare tips, 
            early access to new products, 
            and special discounts just for subscribers.
          </p>
        </header>
        <ul className="stats__newsletter">
          <li className="stat__newsletter">
            <span className="icon__newsletter">
              <CiGift />
            </span>
            15% off first purchase
          </li>
          <li className="stat__newsletter">
            <span className="icon__newsletter">
              <CiMail />
            </span>
            Weekly skincare tips & tricks
          </li>
          <li className="stat__newsletter">
            <span className="icon__newsletter">
              <TbBellStar />
            </span>
            Early access to exclusive sales
          </li>
        </ul>
      </section>
      <section className="input-container">
        <input
          type="email"
          placeholder="Enter your email address"
        />
        <a 
          type="button"
          href="#form"
          className="subscribe-btn"
        >
          Subscribe
        </a>
      </section>
       <figcaption className="hint__newsletter">
          By subscribing, you agree to our Privacy Policy and Terms of Service. 
          Unsubscribe at any time.
      </figcaption>
      <div className="newsletter-divider" aria-hidden="true"></div>
      <figcaption className="hint__newsletter">
        Join <span className="pink-text">85,000+</span> beauty enthusiasts already getting glowing skin tips
      </figcaption>
    </div>
  );
}

export default NewsLetterSection;
