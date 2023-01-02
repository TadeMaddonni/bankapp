import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../../context/appContext/AppContext";
import "./addMoneyForm.scss";

const AddMoneyForm = ({ setTransferData, userAccount }) => {
	const { accessToken } = useContext(AuthContext);

	const [data, setData] = useState({
		from_account: userAccount.id,
		amount: 0,
		concept: "",
	});
	console.log(data);

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setData((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let validAmount = false;
		let validConcept = false;

		if (data.amount > 0) {
			console.log("Valid Amount");
			validAmount = true;
		}

		if (data.concept.length > 0) {
			console.log("Valid concept");
			validConcept = true;
		}

		if (validAmount && validConcept) {
			console.log("Valid operation");
			const transferData = {
				transferenceInfo: data,
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
							min={0}
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

export default AddMoneyForm;
