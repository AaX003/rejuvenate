import "../css/Main.css";
import AboutSection from "./About";

// COMPONENT IMPORTS
import HomeSection from "./Home";
import NavSection from "./Nav";
import ProductSection from "./Products";
import ReviewSection from "./Reviews";
import NewsLetterSection from "./Newsletter";
import FooterSection from "./Footer";

function Main() {
  return (
    <div className="container__main">
      <main className="components">
        <NavSection />

        <section id="home">
          <HomeSection />
        </section>

        <section id="products">
          <ProductSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="reviews">
          <ReviewSection />
        </section>

        <section id="newsletter">
          <NewsLetterSection />
        </section>

        <FooterSection />
      </main>
    </div>
  );
}

export default Main;