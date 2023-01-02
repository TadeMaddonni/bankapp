import React, { useContext, useEffect } from "react";
import "./userComponent.scss";
import { AuthContext } from "../../../context/appContext/AppContext";

const UserInfoComponent = () => {
	const context = useContext(AuthContext);
	const { userData, userAccounts, getUserAccounts, accessToken } = context;
	const userAccount = userAccounts[0];
	useEffect(() => {
		getUserAccounts(accessToken);
	}, []);
	return (
		<div className="userInfo">
			<div className="left">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					fill="currentColor"
					className="bi bi-person-circle userIcon"
					viewBox="0 0 16 16"
				>
					<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
					<path
						fillRule="evenodd"
						d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
					/>
				</svg>
				<div className="userDataContainer">
					<span className="userWelcome">Welcome back</span>
					<span className="userName">
						{userData?.first_name} {userData?.last_name}
					</span>
				</div>
			</div>
			<div className="right">
				<span>${userAccount?.money}</span>
			</div>
		</div>
	);
};

export default UserInfoComponent;
