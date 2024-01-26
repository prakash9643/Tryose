import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../Header/StarRating"; // Assuming you have a StarRating component
import "./Product_home.css";
import "./Product_detail.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import productImage1 from "../../Assests/banner_t-shit.png";
import productImage2 from "../../Assests/banner_t-shit.png";
import productImage3 from "../../Assests/banner_t-shit.png";
import productImage4 from "../../Assests/banner_t-shit.png";

const Product_home = () => {
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
	<div className="bg-gray py-2">
		<section className="special-offer-you">
			<div className="homepage product-detail-page">
					<div className="sidebar">
						<div className="card">
							<div className="card-header">
								<h4>Customize</h4>
							</div>
							<div className="colors">
								<h5>Colours</h5>
								<div className="colors-div">
									<span style={{ backgroundColor: "#FF7979" }}></span>
									<span style={{ backgroundColor: "#FE2B54" }}></span>
									<span style={{ backgroundColor: "#25F4EE" }}></span>
									<span style={{ backgroundColor: "#1036FF" }}></span>
									<span style={{ backgroundColor: "#900B0B" }}></span>
									<span style={{ backgroundColor: "#FFED59" }}></span>
									<span style={{ backgroundColor: "#D9D9D9" }}></span>
								</div>
							</div>
							<div className="size">
								<h5>Size</h5>
								<div className="size-div">
									<span>VS</span>
									<span>S</span>
									<span>M</span>
									<span>L</span>
									<span>XL</span>
									<span>XXL</span>
									<span>XXXL</span>
								</div>
							</div>
							<div className="price-range">
								<h5>Price Range</h5>
								<div className="price-range-div">
									<input type="number" placeholder="From Rupees" />
									<input type="number" placeholder="To Rupees" />
								</div>
							</div>
						</div>
					</div>
				<div className="top-bar tabs-bar">
					<Tabs>
						<TabList>
							<Tab>Normal</Tab>
							<Tab>3D View</Tab>
						</TabList>

						<TabPanel>
							<div className="product-grid detail-product-grid">
								{productImages.map((image, index) => (
									<div className="product-card" key={index}>
										<div className="product-image-container">
											<img src={image} alt={`Product ${index + 1}`} />
											<FontAwesomeIcon icon={faHeart} className="favorite-icon" />
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
												<button className="add-to-cart-button">Add to Cart</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</TabPanel>
						<TabPanel>
							<div className="product-grid detail-product-grid">
								{productImages.map((image, index) => (
									<div className="product-card" key={index}>
										<div className="product-image-container">
											<img src={image} alt={`Product ${index + 1}`} />
											<FontAwesomeIcon icon={faHeart} className="favorite-icon" />
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
												<button className="add-to-cart-button">Add to Cart</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</TabPanel>
					</Tabs>
				</div>
			</div>
		</section>
	</div>
);
};

export default Product_home;
