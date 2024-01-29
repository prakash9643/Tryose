import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../Header/StarRating"; // Assuming you have a StarRating component
import bannerimage from "../../Assests/banner_t-shit.png";
import "./Banner.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import productImage1 from "../../Assests/Product1.png";
import productImage2 from "../../Assests/Product1.png";
import productImage3 from "../../Assests/Product1.png";
import productImage4 from "../../Assests/Product1.png";

const Banner = () => {
  const [productRatings, setProductRatings] = useState([5, 5, 5, 5]);
  const rating = 4;

  const handleRatingChange = (index, newRating) => {
    const newRatings = [...productRatings];
    newRatings[index] = newRating;
    setProductRatings(newRatings);
  };

  const productImages = [
    productImage1,
    productImage2,
    productImage3,
    productImage4,
  ];

  return (
    <div>
      <section>
        <Carousel className="review-slider banner-slider">
          <div className="banner">
            <div className="text">
              <h1 className="Customize">CUSTOMIZE</h1>
              <h2 className="banner-text">Clothing's</h2>
              <div className="describe">
                <p>
                  design your OWN  clothes , express the world your true trend design your OWN  clothes , express the world your true trenddesign your OWN  clothes , express the world your true trenddesign your OWN  clothes , express the world your true trend
                </p>
              </div>
              <button className="discover-button">Discover more</button>
            </div>
            <div className="image">
              <img src={bannerimage} alt="Banner" />
            </div>
          </div>
          <div className="banner">
            <div className="text">
              <h1 className="Customize">CUSTOMIZE</h1>
              <h2 className="banner-text">Clothing's</h2>
              <div className="describe">
                <p>
                  design your OWN  clothes , express the world your true trend design your OWN  clothes , express the world your true trenddesign your OWN  clothes , express the world your true trenddesign your OWN  clothes , express the world your true trend
                </p>
              </div>
              <button className="discover-button">Discover more</button>
            </div>
            <div className="image">
              <img src={bannerimage} alt="Banner" />
            </div>
          </div>
          <div className="banner">
            <div className="text">
              <h1 className="Customize">CUSTOMIZE</h1>
              <h2 className="banner-text">Clothing's</h2>
              <div className="describe">
                <p>
                  design your OWN  clothes , express the world your true trend design your OWN  clothes , express the world your true trenddesign your OWN  clothes , express the world your true trenddesign your OWN  clothes , express the world your true trend
                </p>
              </div>
              <button className="discover-button">Discover more</button>
            </div>
            <div className="image">
              <img src={bannerimage} alt="Banner" />
            </div>
          </div>
        </Carousel>
      </section>
      <section>
        <div className="homepage">
          <div className="top-bar">
            <h3 className="new-arrival-button">Most Trending</h3>
            <Link to="/Product">
              <button className="show-more-button">Show More</button>
            </Link>
          </div>
          <div className="product-grid">
            {productImages.map((image, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-container">
                  <img src={image} alt={`Product ${index + 1}`} />
                  <FontAwesomeIcon icon={faHeart} className="favorite-icon" />
                </div>
                <div className="product-details">
                  <p className="product-description">
                    Product {index + 1} Description
                  </p>
                  <div className="star-rating">
                    <p className="product-price">$39.99</p>
                    <StarRating
                      rating={productRatings[index]}
                      onRatingChange={(newRating) =>
                        handleRatingChange(index, newRating)
                      }
                    />
                  </div>
                  <div className="color-choice">
                    <span
                      className="color-circle"
                      style={{ backgroundColor: "red" }}
                    ></span>
                    <span
                      className="color-circle"
                      style={{ backgroundColor: "blue" }}
                    ></span>
                    <span
                      className="color-circle"
                      style={{ backgroundColor: "grey" }}
                    ></span>
                    
                  </div>                  
                  <div className="buttons">
                    <button className="customize-button">Customize</button>
                    <button className="add-to-cart-button">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="homepage">
          <div className="top-bar">
            <h3 className="new-arrival-button">New Arrival</h3>
            <Link to="/Product">
              <button className="show-more-button">Show More</button>
            </Link>
          </div>
          <div className="product-grid">
            {productImages.map((image, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-container">
                  <img src={image} alt={`Product ${index + 1}`} />
                  <FontAwesomeIcon icon={faHeart} className="favorite-icon" />
                </div>
                <div className="product-details">
                  <p className="product-description">
                    Product {index + 1} Description
                  </p>
                  <div className="star-rating">
                    <p className="product-price">$39.99</p>
                    <StarRating
                      rating={productRatings[index]}
                      onRatingChange={(newRating) =>
                        handleRatingChange(index, newRating)
                      }
                    />
                  </div> 
                  <div className="color-choice">
                    <span
                      className="color-circle"
                      style={{ backgroundColor: "red" }}
                    ></span>
                    <span
                      className="color-circle"
                      style={{ backgroundColor: "blue" }}
                    ></span>
                    <span
                      className="color-circle"
                      style={{ backgroundColor: "grey" }}
                    ></span>
                    
                  </div>                  
                  <div className="buttons">
                    <button className="customize-button">Customize</button>
                    <button className="add-to-cart-button">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Banner;
