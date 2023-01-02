import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/appContext/AppContext";
import formatDate from "../../../utils/FormatDate";
import "./userInfo.scss";

const BankAccountInfo = () => {
	const { userData, userAccounts, getUserAccounts, accessToken } =
		useContext(AuthContext);
	const userAccount = userAccounts[0];
	console.log(userAccount);

	return (
		<div className="userInfoContainerr">
			<div className="userInfoC">
				<h2>Bank account information.</h2>
				<div className="userInfoo">
					<div className="propContainer">
						<span className="prop">Account Number (CBU): </span>
						<span className="data">{userAccount.id}</span>
					</div>

					<div className="propContainer">
						<span className="prop">Funds: </span>
						<span className="data">{userAccount.money}</span>
					</div>
					<div className="propContainer">
						<span className="prop">State: </span>
						<span className="data">
							{userAccount.isBlocked ? "Blocked" : "Active"}
						</span>
					</div>
					<div className="propContainer">
						<span className="prop">Creation Date: </span>
						<span className="data">
							{formatDate(userData.createdAt).tipo1}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BankAccountInfo;
