import React from "react";
import AccountTitleComponent from "../../components/pages/Account/AccountTitleComponent";
import BankAccountInfo from "../../components/pages/Account/BankAccountInfo";
import UserInfo from "../../components/pages/Account/UserInfo";
import "./account.scss";

const Account = () => {
	return (
		<div className="accountContainer">
			<div className="account">
				{/* Title component */}

				<AccountTitleComponent />
				{/* User info component */}
				<UserInfo />

				{/* Bank Account info */}
				<BankAccountInfo />
			</div>
		</div>
	);
};

export default Account;
