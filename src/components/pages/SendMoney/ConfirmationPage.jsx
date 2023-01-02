import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/appContext/AppContext";
import "./confirmationPage.scss";

const ConfirmationPage = ({ data }) => {
	const { userData, userAccounts, getUserAccounts, accessToken } =
		useContext(AuthContext);
	const userAccount = userAccounts[0];
	const { receptorData, transferenceInfo, toAccount } = data;
	console.log(toAccount.id);

	const handleSendMoney = async () => {
		const response = await fetch(
			`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${toAccount.id}`,
			{
				body: JSON.stringify({
					type: "payment",
					amount: transferenceInfo.amount,
					concept: transferenceInfo.concept,
				}),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				method: "POST",
			}
		);
		const data = await response.json();
		if (data.message.toLowerCase() === "ok") {
			console.log(data);
			alert("Money has been sent");
		} else {
			alert("A problem occured");
		}
		console.log(data);
	};
	return (
		<div>
			<div className="confirmationContainer">
				<h3>Your transference data is:</h3>
				<div className="resumeContainer">
					<div className="infoContainer">
						<div className="containerRow">
							<span className="bold">From: </span>
							<span>
								{userData.first_name} {userData.last_name}
							</span>
						</div>
						<div className="containerRow">
							<span className="bold">To: </span>
							<span>
								{receptorData.first_name}{" "}
								{receptorData.last_name}
							</span>
						</div>
						<div className="containerRow">
							<span className="bold">Amount: </span>
							<span>${transferenceInfo.amount}</span>
						</div>

						<div className="containerRow">
							<span className="bold">Concept: </span>
							<span>{transferenceInfo.concept}</span>
						</div>

						<button onClick={handleSendMoney}>Send Money</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationPage;
