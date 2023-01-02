import React, { useState } from "react";
import SendMoneyForm from "../../components/pages/SendMoney/SendMoneyForm";
import SendTitleComponent from "../../components/pages/SendMoney/SendTitleComponent";
import ConfirmationPage from "../../components/pages/SendMoney/ConfirmationPage";
import "./sendMoney.scss";

const SendMoney = () => {
	const [data, setTransferData] = useState({});
	console.log(data);
	return (
		<div className="sendMoney">
			<div className="container">
				{/* Title component */}
				<SendTitleComponent />

				{data?.transferenceInfo ? (
					<ConfirmationPage data={data} />
				) : (
					<SendMoneyForm setTransferData={setTransferData} />
				)}
			</div>
		</div>
	);
};

export default SendMoney;
