import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { ImagesProvider, ProductImages } from "react-product-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../Header/StarRating"; // Assuming you have a StarRating component
import product_image from '../../Assests/product-image.png'
import "./Product_home.css";
import "./Product_detail.css";
import EverydayShort from '../../Assests/everday-short.png';
import EverydayShirt from '../../Assests/fabric-shirt.png';
import Plus from '../../Assests/plus.svg';
import Stay from '../../Assests/stay-it-with.png';
const Cart = () => {
	return (
		<div>
			<section className="special-offer-you over-hidden">
				{/* Breadrumbs */}
				<ul className="list-style-none breadcrumb">
					<li>
						<Link className="pink-text">Home</Link>
						/
						<Link>Product Details</Link>
					</li>
				</ul>
				{/* End Here */}
				<div className="homepage product-detail-page gap-20">
					{/* Image Preview Div */}
					<div className="image-preview d-flex">						
						<ImagesProvider
							thumbUrls={[
								"https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=240&q=70",
								"https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=240&q=70",
								"https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=240&q=70",
								"https://images.unsplash.com/photo-1642948816628-9b457871592d?w=240&q=70",
								"https://images.unsplash.com/photo-1642965961298-02f31304044d?w=240&q=70"
							]}
							imageUrls={[
								"https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=1334&q=80",
								"https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=1300&q=80",
								"https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1358&q=80",
								"https://images.unsplash.com/photo-1642948816628-9b457871592d?w=1300&q=80",
								"https://images.unsplash.com/photo-1642965961298-02f31304044d?w=1300&q=80"
							]}
						>
							{/* <img src={product_image} alt={product_image} /> */}
							<ProductImages />
						</ImagesProvider>
					</div>
					<div className="product-withadd">
						<div className="product-details-cart">
							<h2>Cream Thick oversized sweater for women</h2>
							<h4>Cream Thick oversized sweater for women Cream Thick oversized sweater for women</h4>
							<p>"Love the new gear so comfy and the colour is on point"</p>
							<ul className="list-style-none pl-0">
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
										<path d="M7.99961 14.4225L1.60761 7.7558C1.04583 7.19447 0.675047 6.47051 0.547847 5.6866C0.420646 4.90269 0.543484 4.09864 0.898939 3.38847C1.16698 2.85255 1.55852 2.38798 2.0413 2.03306C2.52409 1.67813 3.0843 1.443 3.67578 1.34703C4.26725 1.25107 4.87307 1.29702 5.4433 1.4811C6.01354 1.66518 6.53188 1.98212 6.95561 2.4058L7.99961 3.44913L9.04361 2.4058C9.46733 1.98212 9.98567 1.66518 10.5559 1.4811C11.1261 1.29702 11.732 1.25107 12.3234 1.34703C12.9149 1.443 13.4751 1.67813 13.9579 2.03306C14.4407 2.38798 14.8322 2.85255 15.1003 3.38847C15.4552 4.09836 15.5779 4.90194 15.4508 5.6854C15.3237 6.46886 14.9534 7.19249 14.3923 7.7538L7.99961 14.4225Z" stroke="#6B6B6B" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
									<span>Streetwear to get you where you need to go</span>
								</li>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M6.71628 13.5886C5.44389 13.5884 4.22367 13.0828 3.32401 12.183C2.42436 11.2833 1.91895 10.063 1.91895 8.79058C1.91895 1.83324 10.2923 5.40391 14.3223 2.05924C14.3655 2.02678 14.4169 2.00677 14.4707 2.00136C14.5245 1.99596 14.5788 2.00537 14.6276 2.02858C14.7283 2.07058 14.8009 2.16191 14.8189 2.26924C16.0496 9.47591 10.7443 13.5886 6.71628 13.5886Z" stroke="#6B6B6B" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M8.63633 7.50793C6.64878 8.05421 4.78628 8.98138 3.15233 10.2379L0.666992 12.3593" stroke="#6B6B6B" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
									<span>Sustainable eco friendly clothing</span>
								</li>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
										<g clip-path="url(#clip0_79_1585)">
											<path d="M8 15.6399C12.142 15.6399 15.5 12.2819 15.5 8.13989C15.5 3.99789 12.142 0.639893 8 0.639893C3.858 0.639893 0.5 3.99789 0.5 8.13989C0.5 12.2819 3.858 15.6399 8 15.6399Z" stroke="#6B6B6B" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
											<path d="M12.0325 10.1399C11.6601 10.8914 11.0852 11.5239 10.3725 11.9661C9.65988 12.4084 8.83786 12.6427 7.99915 12.6427C7.16045 12.6427 6.33843 12.4084 5.62578 11.9661C4.91313 11.5239 4.3382 10.8914 3.96582 10.1399M5.50049 5.88989C5.56679 5.88989 5.63038 5.91623 5.67726 5.96312C5.72415 6.01 5.75049 6.07359 5.75049 6.13989C5.75049 6.2062 5.72415 6.26979 5.67726 6.31667C5.63038 6.36355 5.56679 6.38989 5.50049 6.38989C5.43418 6.38989 5.37059 6.36355 5.32371 6.31667C5.27683 6.26979 5.25049 6.2062 5.25049 6.13989C5.25049 6.07359 5.27683 6.01 5.32371 5.96312C5.37059 5.91623 5.43418 5.88989 5.50049 5.88989ZM10.5005 5.88989C10.5668 5.88989 10.6304 5.91623 10.6773 5.96312C10.7241 6.01 10.7505 6.07359 10.7505 6.13989C10.7505 6.2062 10.7241 6.26979 10.6773 6.31667C10.6304 6.36355 10.5668 6.38989 10.5005 6.38989C10.4342 6.38989 10.3706 6.36355 10.3237 6.31667C10.2768 6.26979 10.2505 6.2062 10.2505 6.13989C10.2505 6.07359 10.2768 6.01 10.3237 5.96312C10.3706 5.91623 10.4342 5.88989 10.5005 5.88989Z" stroke="#6B6B6B" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
										</g>
										<defs>
											<clipPath id="clip0_79_1585">
												<rect width="16" height="16" fill="white" transform="translate(0 0.139893)"/>
											</clipPath>
										</defs>
									</svg>
									<span>Minimal Designs that never go out of style</span>
								</li>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M8.4632 1.39716L10.5952 5.61982L14.6979 6.02649C14.7954 6.03489 14.8885 6.071 14.9662 6.13056C15.0438 6.19012 15.1029 6.27065 15.1363 6.36265C15.1697 6.45465 15.1761 6.55429 15.1548 6.64981C15.1335 6.74534 15.0853 6.83278 15.0159 6.90182L11.6399 10.2485L12.8919 14.7952C12.9175 14.8916 12.9148 14.9935 12.884 15.0884C12.8531 15.1834 12.7955 15.2674 12.718 15.3304C12.6405 15.3933 12.5465 15.4326 12.4472 15.4434C12.348 15.4541 12.2477 15.436 12.1585 15.3912L7.99853 13.3312L3.8452 15.3885C3.75606 15.4333 3.6559 15.4514 3.55673 15.4406C3.45756 15.4298 3.3636 15.3907 3.28616 15.3278C3.20871 15.2649 3.15107 15.181 3.12015 15.0862C3.08923 14.9913 3.08636 14.8896 3.11187 14.7932L4.36387 10.2458L0.985199 6.89916C0.915789 6.83007 0.867587 6.74258 0.846281 6.647C0.824975 6.55141 0.831455 6.45173 0.864955 6.35971C0.898455 6.26769 0.957578 6.18717 1.03535 6.12765C1.11312 6.06814 1.20629 6.03211 1.30387 6.02382L5.40653 5.61716L7.53453 1.39716C7.57838 1.31178 7.64493 1.24014 7.72684 1.19013C7.80876 1.14011 7.90289 1.11365 7.99887 1.11365C8.09485 1.11365 8.18897 1.14011 8.27089 1.19013C8.35281 1.24014 8.41935 1.31178 8.4632 1.39716Z" stroke="#6B6B6B" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
									<span>Exclusive small batches to stand out from the crowd</span>
								</li>
							</ul>
							<h5 className="Price-tag">
								<faIndianRupeeSign /> 1,905.00
							</h5>
							<div className="product-dress-size">
								<p>Size</p>
								<span>S</span>
								<span>M</span>
								<span>L</span>
								<span>XL</span>
								<span>XXL</span>
							</div>
							<div className="product-color-select">
							<p>Colour</p>
							<span style={{ backgroundColor: "#FF7979" }}></span>
							<span style={{ backgroundColor: "#FE2B54" }}></span>
							<span style={{ backgroundColor: "#25F4EE" }}></span>
							<span style={{ backgroundColor: "#1036FF" }}></span>
							<span style={{ backgroundColor: "#900B0B" }}></span>
							<span style={{ backgroundColor: "#FFED59" }}></span>
							<span style={{ backgroundColor: "#D9D9D9" }}></span>
							</div>
							<Link className="add-to-cart-button-pr0duct">Add To Cart</Link>
						</div>
					</div>
				</div>		
				<div className="stay-with-it-section">
					<div className="stay-with-it">
						<h4>Stay It With</h4>
						<div className="more-items-cart d-flex align-items-center justify-content-between">
							<div className="img-text-with d-flex align-items-center gap-32">
								<img src={Stay} alt={Stay} className='w-auto' />
								<p>
									Thick oversized sweater for men
									<br />
									<span>₹ 460.00</span>
								</p>
							</div>
							<Link className="border-add-to-cart">
								Add to cart
							</Link>
						</div>
						<div className="more-items-cart d-flex align-items-center justify-content-between">
							<div className="img-text-with d-flex align-items-center gap-32">
								<img src={Stay} alt={Stay} className='w-auto' />
								<p>
									Thick oversized sweater for men
									<br />
									<span>₹ 460.00</span>
								</p>
							</div>
							<Link className="border-add-to-cart">
								Add to cart
							</Link>
						</div>
						<div className="more-items-cart d-flex align-items-center justify-content-between">
							<div className="img-text-with d-flex align-items-center gap-32">
								<img src={Stay} alt={Stay} className='w-auto' />
								<p>
									Thick oversized sweater for men
									<br />
									<span>₹ 460.00</span>
								</p>
							</div>
							<Link className="border-add-to-cart">
								Add to cart
							</Link>
						</div>
					</div>
					<div className="buy-the-set">
						<h4>Buy The Set</h4>
						<div className="product-card-div d-flex">
							<div className="card-detail">
								<img src={EverydayShort} alt="" />
								<p>Everyday Shorts</p>
								<span><del>$36.00</del></span>
								<span>$33.12</span>
								<div>S / Green</div>
							</div>
							<span className="plus-icon">
								<img src={Plus} alt={Plus} />
							</span>
							<div className="card-detail">
								<img src={EverydayShirt} alt="" />
								<p>Fabric Print Green T- Shirt</p>
								<span><del>$39.00</del></span>
								<span>$35.88</span>
								<div>S / Green</div>
							</div>
						</div>
						<div className="cart-button-bottom">
							<Link className="add-to-cart-button-addtional">Add To Cart</Link>
							<span><del>$36.00</del></span>
							<span>$33.12</span>
						</div>
					</div>
				</div>
				{/* End Here */}
			</section>
		</div>
	);
};

export default Cart;
