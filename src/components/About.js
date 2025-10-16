import '../css/About.css';

import { IoMdLeaf} from 'react-icons/io';
import { FaShield, FaHeart, FaFlask, FaRecycle } from "react-icons/fa6";
import { MdOutlineVisibility } from "react-icons/md";

function AboutSection() {
  const cards = [
    {
      icon: <IoMdLeaf />,
      title: "100% Natural Ingredients",
      desc: "Made with carefully sourced botanicals, free from parabens, sulfates, and synthetic additives."
    },
    {
      icon: <FaShield />,
      title: "Dermatologist Tested",
      desc: "Each formula is reviewed and tested by certified dermatologists to ensure safe, effective results."
    },
    {
      icon: <FaHeart />,
      title: "Cruelty-Free Beauty",
      desc: "Never tested on animals. We’re proud to follow ethical, sustainable practices you can trust."
    },
    {
      icon: <MdOutlineVisibility />,
      title: "Visible Results",
      desc: "Notice improvements in hydration, texture, and radiance in as little as 2–4 weeks."
    },
    {
      icon: <FaFlask />,
      title: "Science-Backed Formulas",
      desc: "Blending nature with research, our products are crafted with clinically proven active ingredients."
    },
    {
      icon: <FaRecycle />,
      title: "Eco-Friendly Packaging",
      desc: "Our packaging is recyclable and designed to minimize waste, helping you care for the planet as well as your skin."
    }
  ];

  return (
    <div className="container__about">
      <section className="hero__about">
        <main className="hero">
          <header className="title__hero">
            <h3 className="title__about">Why Choose REJUV?</h3>
            <p className="subtitle__about">
              We're committed to creating skincare products that
              are scientifically effective and gentle on your skin.
            </p>
          </header>
        </main>
      </section>
      <section className="showcase__about">
        <div className="about-display">
          {cards.map((card, idx) => (
            <div key={idx} className="about-card">
              <span className="about-icon">{card.icon}</span>
              <h4 className="about-title">{card.title}</h4>
              <p className="about-desc">{card.desc}</p>
            </div>
          ))}
        </div>
        <ul className="stats__about">
          <li className="stat__about">
            <span className="value__about">100K+</span>
            <span className="text__about">Happy Customers</span>
          </li>
           <li className="stat__about">
            <span className="value__about">4.9</span>
            <span className="text__about">Average Rating</span>
          </li>
           <li className="stat__about">
            <span className="value__about">200+</span>
            <span className="text__about">Natural Products</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutSection;
