import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/appContext/AppContext";
import formatDate from "../../../utils/FormatDate";
import "./userInfo.scss";

const UserInfo = () => {
	const { userData } = useContext(AuthContext);
	console.log(userData);

	return (
		<div className="userInfoContainerr">
			<div className="userInfoC">
				<h2>User Information.</h2>
				<div className="userInfoo">
					<div className="propContainer">
						<span className="prop">First Name: </span>
						<span className="data">{userData.first_name}</span>
					</div>
					<div className="propContainer">
						<span className="prop">Last Name: </span>
						<span className="data">{userData.last_name}</span>
					</div>
					<div className="propContainer">
						<span className="prop">Email: </span>
						<span className="data">{userData.email}</span>
					</div>
					<div className="propContainer">
						<span className="prop">User number: </span>
						<span className="data">{userData.id}</span>
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

export default UserInfo;
