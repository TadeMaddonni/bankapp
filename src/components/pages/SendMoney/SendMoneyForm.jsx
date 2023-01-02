import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../../context/appContext/AppContext";
import "./sendMoneyForm.scss";

const SendMoneyForm = ({ setTransferData }) => {
	const { accessToken } = useContext(AuthContext);
	const [data, setData] = useState({
		to_account: 0,
		amount: 0,
		concept: "",
	});
	let receptorId;
	let toAccount;

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setData((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};
	const getReceptorData = async (userId) => {
		const response = await fetch(
			`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users/${userId}`,
			{
				headers: {
					Accept: "application/json",
				},
			}
		);
		const data = await response.json();

		if (data) {
			console.log(data);
			return data;
		}
	};
	const getAccountData = async (accountId) => {
		const response = await fetch(
			`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${accountId}`,
			{
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		const data = await response.json();

		if (data?.status === 500) {
			return undefined;
		} else {
			receptorId = data.userId;
			toAccount = data;
			console.log(receptorId);
			return data;
		}
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let validAccount = false;
		let validAmount = false;
		let validConcept = false;

		const toAccountData = await getAccountData(data.to_account);
		if (toAccountData) {
			console.log(toAccountData);
			validAccount = true;
			console.log("Cuenta valida");
		} else {
			console.log("Cuenta no valida");
		}

		if (data.amount > 0) {
			console.log("Valid Amount");
			validAmount = true;
		}

		if (data.concept.length > 0) {
			console.log("Valid concept");
			validConcept = true;
		}

		if (validAccount && validAmount && validConcept) {
			console.log("Valid operation");
			const receptorData = await getReceptorData(receptorId);
			const transferData = await {
				transferenceInfo: data,
				receptorData: receptorData,
				toAccount: toAccount,
			};
			setTransferData(transferData);
		}
	};

	return (
		<div className="sendMoneyContainer">
			<div className="formContainer">
				<form
					className="form sendMoneyForm"
					action="" /* onSubmit={sd} */
					onSubmit={(e) => handleOnSubmit(e)}
				>
					<div className="inputContainer">
						<input
							type="number"
							name="to_account"
							min={0}
							placeholder="Enter the Account number"
							onChange={(e) => handleOnChange(e)}
						/>
					</div>
					<div className="inputContainer">
						<input
							min={0}
							type="number"
							name="amount"
							placeholder="Enter the Amount"
							onChange={(e) => handleOnChange(e)}
						/>
					</div>
					<div className="inputContainer">
						<input
							type="text"
							name="concept"
							placeholder="Enter the concept"
							onChange={(e) => handleOnChange(e)}
						/>
					</div>
					<div className="inputContainer">
						<button>Continue</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SendMoneyForm;
