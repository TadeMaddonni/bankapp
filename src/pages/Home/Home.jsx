import React from "react";
import BalanceComponent from "../../components/pages/Home/BalanceComponent";
import Promotions from "../../components/pages/Home/Promotions";
import Transactions from "../../components/pages/Home/Transactions";
import UserInfoComponent from "../../components/pages/Home/UserInfoComponent";
import "./home.scss";
const Home = () => {
	return (
		<div className="homeContainer">
			<div className="home">
				{/* UserComponent */}
				<UserInfoComponent />
				{/* Balance */}
				<BalanceComponent />
				{/* Transactions */}
				<Transactions />
				{/* Promotions */}
				<Promotions />
			</div>
		</div>
	);
};

export default Home;
