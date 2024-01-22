import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faTimes } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../Header/StarRating"; // Assuming you have a StarRating component
import "./Product_home.css";
import "./Product_detail.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import productImage1 from "../../Assests/banner_t-shit.png";
import productImage2 from "../../Assests/banner_t-shit.png";
import productImage3 from "../../Assests/banner_t-shit.png";
import productImage4 from "../../Assests/banner_t-shit.png";

const CartList = () => {
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
		<section className="special-offer-you">
			<div className="homepage product-detail-page">
				<div className="top-bar tabs-bar">
					<div className="product-grid detail-product-grid">
						{productImages.map((image, index) => (
							<div className="product-card" key={index}>
								<div className="product-image-container">
									<img src={image} alt={`Product ${index + 1}`} />
									<FontAwesomeIcon icon={faHeart} className="favorite-icon" />
									<FontAwesomeIcon icon={faTimes} className="favorite-icon" style={{left : "10px"}} />
								</div>
								<div className="product-details">
									<p className="product-description">
										Cream Thick oversized sweater for women
									</p>
									<span className="product-min">Cream Thick oversized sweater for women</span>
									<div className="star-rating">
										<StarRating
											rating={productRatings[index]}
											onRatingChange={(newRating) =>
												handleRatingChange(index, newRating)
											}
										/><span>(15)</span>
									</div>
									<div className="buttons">
										<p className="product-price">$39.99</p>
										<button className="add-to-cart-button">Buy Now</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	</div>
);
};

export default CartList;
