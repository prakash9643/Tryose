import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Edit from '../../Assests/edit.png'
import Close from '../../Assests/close.png'
import Plus from '../../Assests/plus.svg';
import PlusB from '../../Assests/plus-b.png';
import Minus from '../../Assests/minus.png';
import Phonepe from '../../Assests/phonepe.png';
import Paytm from '../../Assests/paytm.png';
import Gpay from '../../Assests/gpay.png';
import Cash from '../../Assests/cash.png';
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

	const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }
	
	return (
		<div className="bg-gray py-2 px-3">
			{/* Breadrumbs */}
			<ul className="list-style-none breadcrumb pl-0">
				<li>
					<Link className="pink-text">Home</Link>
					/
					<Link>Checkout</Link>
				</li>
			</ul>
			{/* End Here */}
			<div className="card address-card-details">
				<div className="upperheder d-flex align-items-center justify-content-between">
					<h4>Shopping Cart</h4>
				</div>
				<div className="cart-subtotal">
					<div className="product-cart-detail">
						<div className="cart-details-prod d-flex align-items-center justify-content-between">
							<div className="product-name-details">
								<img src={productImage1} alt={productImage1} width={'65px'} />
								<p>
									Cream Thick oversized sweater for women
									<br />
									<span className="cart-id">#25139526913984</span>
								</p> 							
							</div>
							<div className="increment-id">
								<button onClick={decrement}>
									<img src={Minus} alt={Minus} />							
								</button>
								<span>{count}</span>
								<button onClick={increment}>
									<img src={PlusB} alt={PlusB} />							
								</button>
								<h5>₹ 1399</h5>
								<img src={Close} alt={Close} />
							</div>
						</div>
						<hr />
						<div className="cart-details-prod d-flex align-items-center justify-content-between">
							<div className="product-name-details">
								<img src={productImage1} alt={productImage1} width={'65px'} />
								<p>
									Cream Thick oversized sweater for women
									<br />
									<span className="cart-id">#25139526913984</span>
								</p> 							
							</div>
							<div className="increment-id">
								<button onClick={decrement}>
									<img src={Minus} alt={Minus} />							
								</button>
								<span>{count}</span>
								<button onClick={increment}>
									<img src={PlusB} alt={PlusB} />							
								</button>
								<h5>₹ 1399</h5>
								<img src={Close} alt={Close} />
							</div>
						</div>
						<hr />
						<div className="cart-details-prod d-flex align-items-center justify-content-between">
							<div className="product-name-details">
								<img src={productImage1} alt={productImage1} width={'65px'} />
								<p>
									Cream Thick oversized sweater for women
									<br />
									<span className="cart-id">#25139526913984</span>
								</p> 							
							</div>
							<div className="increment-id">
								<button onClick={decrement}>
									<img src={Minus} alt={Minus} />							
								</button>
								<span>{count}</span>
								<button onClick={increment}>
									<img src={PlusB} alt={PlusB} />							
								</button>
								<h5>₹ 1399</h5>
								<img src={Close} alt={Close} />
							</div>
						</div>
						<hr />
					</div>
					<div className="order-sumary-cart">
						<h4>Order Summary</h4>
						<div className="form-contol">
							<label>Discount code / Promo code</label>
							<input type="text" name="code" placeholder="Code" />
						</div>
						<div className="form-contol">
							<label>Your bonus card number</label>
							<input type="text" name="card" placeholder="Enter Card Number" />
							<button>Apply</button>
						</div>
						<div className="all-total">
							<p>
								<strong>Subtotal</strong>
								<strong>₹2347</strong>
							</p>
							<p>
								<span>Estimated Tax</span>
								<span>₹50</span>
							</p>
							<p>
								<span>Estimated shipping & Handling</span>
								<span>₹29</span>
							</p>
							<p>
								<strong>Total</strong>
								<strong>₹2426</strong>
							</p>
						</div>
					</div>
				</div>
				<div className="saved-card">
					<div className="upperheder">
						<h4>Saved Address</h4>
					</div>
					<div className="card-saved-details">
						<div className="radio">
							<input type="radio" name="size" id="small2" class="form__radio-input" />
							<label class="form__label-radio form__radio-label" for="small2">
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
							<input type="radio" name="size" id="small3" class="form__radio-input" />
							<label class="form__label-radio form__radio-label" for="small3">
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
							<h4>Payment Method</h4>
						</div>
						<div className="payment-mothod-options">
							<div className="debit-credit">
								<h5>Credit/ Debit Card</h5>
								<div className="form-contol">
									<input type="text" name="name" placeholder="Card Holder Name" />
								</div>
								<div className="form-contol">
									<input type="number" name="card-number" placeholder="Card Number" />
								</div>
								<div className="form-contol">
									<input type="number" name="expdate" placeholder="Exp. Date" />
									<input type="number" name="cvv" placeholder="CVV" />
								</div>
							</div>
							<div className="upi-cash-option">
								<div className="payment-upi">
									<label class="form__label-radio form__radio-label" for="phonepe">
										<input type="radio" name="size" id="phonepe" class="form__radio-input" />
										<img src={Phonepe} alt={Phonepe} />
									</label>
								</div>
								<div className="payment-upi">
									<label class="form__label-radio form__radio-label" for="gpay">
										<input type="radio" name="size" id="gpay" class="form__radio-input" />
										<img src={Gpay} alt={Gpay} />
									</label>
								</div>
								<div className="payment-upi">
									<label class="form__label-radio form__radio-label" for="paytm">
										<input type="radio" name="size" id="paytm" class="form__radio-input" />
										<img src={Paytm} alt={Paytm} />
									</label>
								</div>
								<div className="payment-upi">
									<label class="form__label-radio form__radio-label" for="cash">
										<input type="radio" name="size" id="cash" class="form__radio-input" />
										<img src={Cash} alt={Cash} />
									</label>
								</div>
							</div>
						</div>
						<div className="checkout-but">
							<button type="button" className="checkout-button">Checkout</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Prodcut_address;
