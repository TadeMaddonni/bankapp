import React, { useState } from "react";
import "./promotions.scss";

const Promotions = () => {
	const [promotion, setPromotion] = useState("");
	const handlePromotion = (promo) => {
		setPromotion(promo);
	};
	return (
		<div className="promotionsContainer">
			<h2 className="promotionTitle">Promotions</h2>
			<div className="promotionsMenu">
				<button
					className={
						promotion === "discounts"
							? "promotion active"
							: "promotion"
					}
					onClick={() => {
						handlePromotion("discounts");
					}}
				>
					Discounts
				</button>
				<button
					className={
						promotion === "offers"
							? "promotion active"
							: "promotion"
					}
					onClick={() => {
						handlePromotion("offers");
					}}
				>
					Offers
				</button>
				<button
					className={
						promotion === "getCard"
							? "promotion active"
							: "promotion"
					}
					onClick={() => {
						handlePromotion("getCard");
					}}
				>
					Get Card
				</button>
			</div>
			<div className="promoAdd">
				<img src="https://i.postimg.cc/05zgnDQx/Girl.png" alt="" />
				<div>
					<span>Smart Money Tools</span>
					<p>Get cash back deals and rewards customized for you.</p>
				</div>
			</div>
		</div>
	);
};

export default Promotions;
