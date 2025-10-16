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
        <HomeSection/>
        <ProductSection/>
        <AboutSection />
        <ReviewSection />
        <NewsLetterSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default Main;
