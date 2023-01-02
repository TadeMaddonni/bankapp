import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/appContext/AppContext";
import "./confirmationPage.scss";

const ConfirmationPage = ({ data }) => {
	const { userData, userAccounts, getUserAccounts, accessToken } =
		useContext(AuthContext);
	const userAccount = userAccounts[0];
	const { transferenceInfo } = data;
	console.log(transferenceInfo);

	const handleSendMoney = async () => {
		const response = await fetch(
			`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${transferenceInfo.from_account}`,
			{
				body: JSON.stringify({
					type: "topup",
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
		if (data.status === 200) {
			console.log(data);
			alert("Money has been added");
		} else {
			alert("A problem occured");
		}
	};
	return (
		<div>
			<div className="confirmationContainer">
				<h3>Your transference data is:</h3>
				<div className="resumeContainer">
					<div className="infoContainer">
						<div className="containerRow">
							<span className="bold">
								Hello, {userData.first_name}{" "}
								{userData.last_name}
							</span>
						</div>
						<div className="containerRow">
							<span>
								You are adding ${transferenceInfo.amount} to
								your account.
							</span>
						</div>
						<button onClick={handleSendMoney}>Add Money</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationPage;
