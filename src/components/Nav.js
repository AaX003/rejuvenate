import "../css/Nav.css";

// SVGS
import { useState } from "react";
import { LuPackage, LuMailOpen } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";
import { BiCommentDetail } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";

function NavSection() {
      
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container__nav">
        
      <header className="title__nav">
        <h3 className="title-text">
            REJUV
        </h3>
        <div className="links__nav">
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#newsletter">Contact</a>
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
            <a href="#products" aria-label="Products" ><LuPackage /></a>
            <a href="#about" aria-label="About" ><PiPlant /></a>
            <a href="#reviews" aria-label="Reviews" ><BiCommentDetail /></a>
            <a href="#newsletter" aria-label="Newsletter" ><LuMailOpen /></a>
        </div>
      </header>
      
    </div>
  );
}

export default NavSection;
