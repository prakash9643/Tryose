import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Edit from '../../Assests/edit.png'
import Close from '../../Assests/close.png'
import Plus from '../../Assests/plus.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../Header/StarRating"; // Assuming you have a StarRating component

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
		<div className="bg-gray py-2 px-3">
			{/* Breadrumbs */}
			<ul className="list-style-none breadcrumb pl-0">
				<li>
					<Link className="pink-text">Home</Link>
					/
					<Link>Product Details</Link>
				</li>
			</ul>
			{/* End Here */}
			<div className="card address-card-details">
				<div className="upperheder d-flex align-items-center justify-content-between">
					<h4>User Details</h4>
					<img src={Edit} alt={Edit} />
				</div>
				<form>
					<div className="form-contol">
						<input type="text" name="fname" placeholder="First Name" value="Rahul" />
						<input type="text" name="lname" placeholder="Last Name" value="Gupta" />
					</div>
					<div className="form-contol">
						<div className="pin-code-input">
							<input type="number" name="pincode" className="pincode-input" placeholder="+91" value="+91" readonly />
							<input type="number" name="phone" className="w-100" placeholder="Mobile Number" value="9022022022" />
						</div>
						<input type="email" name="email" placeholder="Email" value="rahulgupta@gmail.com" />
					</div>
				</form>
				<div className="saved-card">
					<div className="upperheder">
						<h4>Saved Address</h4>
					</div>
					<div className="card-saved-details">
						<div className="radio">
							<input type="radio" name="size" id="small" class="form__radio-input" />
							<label class="form__label-radio form__radio-label" for="small">
								<span class="form__radio-button"></span> 2118 Thornridge
							</label>
							<span className="add-validity">Home</span>
							<div className="edit-dlete-add d-flex align-items-center justify-content-between">
								<p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
								<span>
									<img src={Edit} alt={Edit} />
									<img src={Close} alt={Close} />
								</span>
							</div>
							<p>(209) 555-0104</p>
						</div>
						<div className="radio">
							<input type="radio" name="size" id="small1" class="form__radio-input" />
							<label class="form__label-radio form__radio-label" for="small1">
								<span class="form__radio-button"></span> 2118 Thornridge
							</label>
							<span className="add-validity">Office</span>
							<div className="edit-dlete-add d-flex align-items-center justify-content-between">
								<p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
								<span>
									<img src={Edit} alt={Edit} />
									<img src={Close} alt={Close} />
								</span>
							</div>
							<p>(209) 555-0104</p>
						</div>
					</div>
					<div className="add-new-address">
						<span>
							<img src={Plus} alt={Plus} />
							<br />
							Add New Address
						</span>
					</div>
					<div className="order-details">
						<div className="upperheder">
							<h4>Order Details</h4>
						</div>
						<div className="product-grid">
							{productImages.map((image, index) => (
								<div className="product-card" key={index}>
									<div className="product-image-container">
										<img src={image} alt={`Product ${index + 1}`} />
										<span class="delivered-way" style={{ backgroundColor: '#60A441' }}>Delivered</span>
									</div>
									<div className="product-details">
										<p className="product-description">
											Cream Thick oversized sweater for women {index + 1}
										</p>
										<div className="star-rating">
											<p className="product-price">₹1,905.00</p>
											<StarRating
												rating={productRatings[index]}
												onRatingChange={(newRating) =>
													handleRatingChange(index, newRating)
												}
											/>
										</div> 
										<div className="buttons">
											<p>Delivered On 18-Jan 2023</p>
											<button className="add-to-cart-button">Return</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Prodcut_address;
