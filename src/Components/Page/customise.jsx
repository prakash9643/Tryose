import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Edit from '../../Assests/edit.png'
import Close from '../../Assests/close.png'
import Plus from '../../Assests/plus.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../Header/StarRating"; // Assuming you have a StarRating component
import FashionBanner1 from "../../Assests/fashion-banner-1.png";
import FashionBanner2 from "../../Assests/fashion-banner-2.png";
import Trail from "../../Assests/trail.svg";
import Camera from "../../Assests/camera.svg";
import Pictures from "../../Assests/picture.svg";
import Dress from "../../Assests/dress.svg";
import Suit from "../../Assests/suit.png";
import CLOTHESImg from "../../Assests/clothes-img.png";
import './customise.css'
import productImage1 from "../../Assests/Product1.png";
import productImage2 from "../../Assests/Product1.png";
import productImage3 from "../../Assests/Product1.png";
import productImage4 from "../../Assests/Product1.png";
const Prodcut_address = () => {
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
		<>
		<div className="fashoin-banner d-flex align-items-center justify-content-between">
			<div className="fashion-body-text">
				<h1>FASHIONER BODYWEAR</h1>
				<h3>For every body</h3>
				<button type="button">Shop Today</button>
			</div>
			<div className="fashion-image d-flex gap-50">
				<img src={FashionBanner1} alt={FashionBanner1} />
				<img src={FashionBanner2} alt={FashionBanner2} />
			</div>
		</div>
		<div className="select-size-gender">
			<div className="d-flex align-items-center gap-50">
				<div className="select-gender">
					<select>
						<option>Male</option>
						<option>Female</option>
						<option>Other</option>
					</select>
					<button type="button" className="gender-btn">Select Gender</button>
				</div>
				<div className="select-gender">
					<select>
						<option>Xl-42 CM</option>
						<option>Xl-42 CM</option>
						<option>Xl-42 CM</option>
						<option>Xl-42 CM</option>
						<option>Xl-42 CM</option>
					</select>
					<button type="button" className="gender-btn">Select Size</button>
				</div>
			</div>
			<div className="experience-trail">
				<div className="trail-img">
					<img src={Trail} alt={Trail} />
				</div>
				<div className="trail-text">
					<span>Experience Tral</span>
					<h4>WITH Augmented Reality</h4>
				</div>
			</div>
		</div>
		<div className="add-camera-section bg-gray">
			<div className="turn-camera">
				<span>
					<img src={Camera} alt={Camera} />
				</span>
				<span>
					<img src={Pictures} alt={Pictures} />
				</span>
				<span>
					<img src={Dress} alt={Dress} />
				</span>
			</div>
			<div className="imag-screening">
				<div className="showing-image">
					<img src={Suit} alt={Suit} />
					<button type="button" className="gender-btn">Start Trail</button>
				</div>
			</div>
		</div>
		<section className="bg-gray">
			<div className="homepage">
				<div className="top-bar">
					<h3 className="new-arrival-button">Recently Viewed</h3>
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
			<section className="bottom-design-section">
				<div className="own-clothes">
					<h4>DESIGN YOUR OWN CLOTHES</h4>
					<button className="add-to-cart-button">Start Trail</button>
				</div>
				<div className="clothes-img">
					<img src={CLOTHESImg} alt={CLOTHESImg} />
				</div>
			</section>
		</>
	);
};

export default Prodcut_address;
