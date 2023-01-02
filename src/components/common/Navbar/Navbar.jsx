import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/appContext/AppContext";
import LogoutComponent from "./LogoutComponent";
import "./navbar.scss";
const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle((prevToggle) => !prevToggle);
	};
	const handleLogout = () => {
		sessionStorage.clear();
		window.location.reload();
		handleToggle();
	};
	const context = useContext(AuthContext);
	const { userData } = context;

	return (
		<nav>
			<div className="navContainer">
				<div className="left">
					<div className="logoContainer">
						<span className="logo">WeAre</span>
					</div>

					<div
						className={toggle ? "hamburger active" : "hamburger"}
						onClick={handleToggle}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className={toggle ? "right active" : "right"}>
					<ul>
						<li>
							<Link to="/" onClick={handleToggle}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/send-money" onClick={handleToggle}>
								Send Money
							</Link>
						</li>
						<li>
							<Link to="/add-money" onClick={handleToggle}>
								Add Money
							</Link>
						</li>
						<li>
							<Link to="/movements" onClick={handleToggle}>
								Movements
							</Link>
						</li>
						{userData?.token && (
							<li>
								<Link to="/account" onClick={handleToggle}>
									Account
								</Link>
							</li>
						)}

						{userData?.token && (
							<li>
								<Link onClick={handleLogout}>
									<LogoutComponent />
								</Link>
							</li>
						)}

						{/* {IsAuthorized && <li>
												<Link onClick={handleToggle}>UserPage</Link>
											 </li>} */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
