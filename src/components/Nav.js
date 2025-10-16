import "../css/Nav.css";

import { useState } from "react";
import { CiMenuKebab, CiSearch, CiHeart, CiUser, CiShoppingBasket } from "react-icons/ci";

function NavSection() {
      
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container__nav">
        
      <header className="title__nav">
        <h3 className="title-text">
            REJUV
        </h3>
        <div className="links__nav">
            <a href="products">Products</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
        </div>
         <button 
            id="menu-btn" 
            className="hamburger-menu-btn"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <CiMenuKebab />
        </button>
        <div id="supple-links__nav" className={`supple-links ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
            <a href="#search" aria-label="Search" ><CiSearch /></a>
            <a href="#fav" aria-label="Favorites" ><CiHeart /></a>
            <a href="#profile" aria-label="Profile" ><CiUser /></a>
            <a href="#cart" aria-label="Cart" ><CiShoppingBasket /></a>
        </div>
      </header>
      
    </div>
  );
}

export default NavSection;
