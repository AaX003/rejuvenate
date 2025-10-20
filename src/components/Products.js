import '../css/Products.css';

// SVGS
import { IoMdStar } from "react-icons/io";

// IMAGES
import serumImg from "../images/product-img.jpg";
import creamImg from "../images/face-cream.jpg";
import oilImg from "../images/oil-img.jpg";
import cleanserImg from "../images/cleanser-img.jpg";
import maskImg from "../images/mask-img.jpg";
import sprayImg from "../images/spray-img.jpg";


function ProductSection() {
  
  const products = [
  {
    img: serumImg,
    title: "Vitamin C Brightening Serum",
    desc: "Lightweight daily serum with Vitamin C and hyaluronic acid to brighten, hydrate, and improve overall skin texture.",
    rating: "4.5",
    price: 78,
    nprice: 58
  },
  {
    img: creamImg,
    title: "Hydrating Vitamin C Cream",
    desc: "Rich moisturizer infused with Vitamin C and botanicals to lock in moisture, even skin tone, and leave skin glowing.",
    rating: "4.5",
    price: 78,
    nprice: 58
  },
  {
    img: oilImg,
    title: "Nourishing Glow Oil",
    desc: "A blend of natural oils and Vitamin C designed to restore radiance, smooth fine lines, and give a dewy finish.",
    rating: "4.5",
    price: 78,
    nprice: 58
  },
  {
    img: cleanserImg,
    title: "Gentle Daily Cleanser",
    desc: "Foaming gel cleanser that removes dirt and makeup without stripping moisture, perfect for all skin types.",
    rating: "4.6",
    price: 45,
    nprice: 32
  },
  {
    img: maskImg,
    title: "Revitalizing Clay Mask",
    desc: "Purifying clay mask that unclogs pores, reduces excess oil, and leaves skin refreshed in just 10 minutes.",
    rating: "4.7",
    price: 55,
    nprice: 40
  },
  {
    img: sprayImg,
    title: "Rejuvenating Face Spritz",
    desc: "A gentle spray made of essential oils that help nourish and exofoliate oily pores.",
    rating: "4.7",
    price: 75,
    nprice: 60
  }
];


  return (
    <div className="container__products">
      <section className="hero__products">
        <main className="hero">
          <header className="title__hero">
            <h2 className="title__products">
              Featured Products
            </h2>
            <p className="subtitle__products">
              Discover our most popular skincare essentials,<br /> 
              loved by thousands of customers worldwide.
            </p>
          </header>
        </main>
      </section>
      <section className="showcase__products">
        <div className="product-display">
          {products.map((p, i) => (
            <article key={i} className="product-card">
              <img
                src={p.img}
                alt={p.title}
                width="300"
                height="300"
                className="product-img"
                loading="lazy"
              />
              <h3 className="product-title">{p.title}</h3>
              <p className="product-desc">{p.desc}</p>

              <div className="product-meta">
                <span className="product-rating">
                  <IoMdStar aria-hidden="true" />
                  {p.rating}
                </span>
              </div>

              <div className="product-prices">
                <span className="price-old">${p.price.toFixed(2)}</span>
                <span className="price-new">${p.nprice.toFixed(2)}</span>
              </div>

              <button className="add-btn" type="button">Add to Cart</button>
            </article>
          ))}
        </div>
        <div className="nav-btn-container">
          <a
            href="#products"
            className="view-all-btn"
          >
            View All Products
          </a>
        </div>
      
      </section>
    </div>
  );
}

export default ProductSection;
