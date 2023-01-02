import React, { useContext, useEffect, useState } from "react";
import AddMoneyForm from "../../components/pages/AddMoney/AddMoneyForm";
import AddTitleComponent from "../../components/pages/AddMoney/AddTitleComponent";
import ConfirmationPage from "../../components/pages/AddMoney/ConfirmationPage";
import SendTitleComponent from "../../components/pages/SendMoney/SendTitleComponent";
import { AuthContext } from "../../context/appContext/AppContext";
import "./addMoney.scss";

const AddMoney = () => {
	const [data, setTransferData] = useState({});
	const { userAccounts, getUserAccounts, accessToken } =
		useContext(AuthContext);
	const userAccount = userAccounts[0];

	return (
		<div className="sendMoney">
			<div className="container">
				{/* Title component */}
				<AddTitleComponent />

				{data?.transferenceInfo ? (
					<ConfirmationPage data={data} />
				) : (
					<AddMoneyForm
						userAccount={userAccount}
						setTransferData={setTransferData}
					/>
				)}
			</div>
		</div>
	);
};

export default AddMoney;
