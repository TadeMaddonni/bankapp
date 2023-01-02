import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/appContext/AppContext";
import "./balanceComponent.scss";

const BalanceComponent = () => {
	const { userAccounts, getUserAccounts, accessToken } =
		useContext(AuthContext);
	const userAccount = userAccounts[0];
	console.log(userAccount);
	useEffect(() => {
		getUserAccounts(accessToken);
	}, []);
	return (
		<div className="balanceComponent">
			<h2 className="balanceTitle">Your balance:</h2>
			<div className="balanceContainer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fillRule="currentColor"
					className="bi bi-coin balanceIcon"
					viewBox="0 0 16 16"
				>
					<path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
					<path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
				</svg>
				<span className="balanceText">{userAccount?.money}</span>
			</div>
			<div className="fnContainer">
				<Link to="/add-money">
					<div className="fn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							fillRule="currentColor"
							className="bi bi-arrow-up arrowIcon"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
							/>
						</svg>
						<span>Add Money</span>
					</div>
				</Link>
				<Link to="/send-money">
					<div className="fn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							fill="currentColor"
							className="bi bi-arrow-down-up arrowIcon"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
							/>
						</svg>
						<span>Send Money</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default BalanceComponent;
