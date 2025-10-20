import '../css/Reviews.css';

import { IoMdStar, IoMdStarHalf } from 'react-icons/io';
import { TfiQuoteLeft } from "react-icons/tfi";

function ReviewSection() {
  const reviews = [
    {
      icon: <TfiQuoteLeft />,
      rating: [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
      quote: "I've been using REJUV products for 6 months and my skin has never looked better! The vitamin C serum is absolutely amazing.",
      item: "Vitamin C Serum",
      reviewer: "Sarah Keaton",
      locale: "New York, NY"
    },
    {
      icon: <TfiQuoteLeft />,
      rating: [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
      quote: "Finally found a skincare brand that actually works for my sensitive skin. The gentle formulas are perfect and the results speak for themselves.",
      item: "Hydrating Cream",
      reviewer: "Emily Chen",
      locale: "Los Angeles, CA"
    },
    {
      icon: <TfiQuoteLeft />,
      rating: [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
      quote: "The face mask is incredible! I use it twice a week and my skin feels so soft and radiant. Highly recommend to anyone looking for natural skincare.",
      item: "Rose Face Mask",
      reviewer: "Yennifer Coolidge",
      locale: "San Francisco, CA"
    },
    {
      icon: <TfiQuoteLeft />,
      rating: [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
      quote: "Love that all the products are cruelty-free and natural. The cleansing oil removes makeup so well without stripping my skin.",
      item: "Cleansing Oil",
      reviewer: "Tyla Adjenoha",
      locale: "Dallas, TX"
    },
    {
      icon: <TfiQuoteLeft />,
      rating: [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
      quote: "I was skeptical about natural skincare but REJUV changed my mind completely. My dark spots have faded significantly in just 2 months.",
      item: "Brightening Cream",
      reviewer: "Victor Cruz",
      locale: "Chicago, IL"
    },
    {
      icon: <TfiQuoteLeft />,
      rating: [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
      quote: "Finally found a skincare brand that actually works for my sensitive skin. The gentle formulas are perfect and the results speak for themselves.",
      item: "Hydrating Cream",
      reviewer: "Felicity Jean-Pierro",
      locale: "Columbus, OH"
    }
  ]
  return (
    <div className="container__reviews">
      <section className="hero__reviews">
        <main className="hero">
          <header className="title__hero">
            <h3 className="title__reviews">What Our Customers Say</h3>
            <p className="subtitle__reviews">
              Don't just take our word for it. Here's what thousands of satisfied 
              customers have to say about their REJUV experience.
            </p>
          </header>
        </main>
      </section>
      <section className="showcase__testimonials">
        <div className="testimonial-display">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <span className="testimonial-rating" aria-label="Rated 4 out of 5 stars">
                {[...Array(4)].map((_, i) => <IoMdStar key={i} />)}
              </span>
              <h4 className="testimonial-quote">{review.quote}</h4>
              <small className="testimonial-item">{review.item}</small>
              <div className="testimonial-divider" aria-hidden="true"></div>
              <small className="testimonial-author">{review.reviewer}</small>
              <small className="testimonial-locale">{review.locale}</small>
            </div>
          ))}
        </div>
       <div className="stats__reviews">
        <span className="stat-icon__reviews">
          <IoMdStar />
        </span>
        <span className="stat-icon__reviews">
          <IoMdStar />
        </span>
        <span className="stat-icon__reviews">
          <IoMdStar />
        </span>
        <span className="stat-icon__reviews">
          <IoMdStar />
        </span>
        <span className="stat-icon__reviews">
          <IoMdStarHalf />
        </span>
        <small className="value__reviews">
          4.9/5
        </small>
        <small className="text__reviews">
          from 12,675 reviews
        </small>
       </div>
      </section>
    </div>
  );
}

export default ReviewSection;
