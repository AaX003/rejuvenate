import "../css/Home.css";

import heroImg from "../images/hero-img.jpg";

function HomeSection() {
  return (
    <div className="container__home">
      <section className="hero__home">
        <main className="hero">
            <div className="hero__info">
                <header className="title__hero">
                    <h1 className="title">
                        Natural Skincare<br />
                        <span className="pink-text">Made Simple</span>
                    </h1>
                    <p className="subtitle">
                        Discover our collection of clean, effective skincare products
                        crafted with natural ingredients. Transform your skin with gentle formulations
                        that deliver real results.
                    </p>
            </header>
            <div className="cta-btns-container">
                <a
                    href="#form"
                    className="shop-now-btn"
                >
                    Shop Now 
                </a>
                <a 
                    href="#about"
                    className="learn-more-btn"
                >
                    Learn More
                </a>
                </div>
                <ul className="stats__home">
                    <li className="stat">
                        <span className="value">100%</span>
                        <span className="text">Natural</span>
                    </li>
                    <li className="stat">
                        <span className="value">30 Day</span>
                        <span className="text">Trial</span>
                    </li>
                    <li className="stat">
                        <span className="value">Free</span>
                        <span className="text">Shipping</span>
                    </li>
                </ul>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="Girl washing face" width="450" height="500" />
            </div>
        </main>
      </section>
    </div>
  );
}

export default HomeSection;
