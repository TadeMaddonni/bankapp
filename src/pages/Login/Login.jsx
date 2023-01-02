import React from "react";
import LoginForm from "../../components/pages/Login/LoginForm";
import "./login.scss";
const Login = () => {
	return (
		<div className="loginContainer">
			<div className="login">
				<div className="top">
					<h1>Log In</h1>
					<span>We were waiting for you!</span>
				</div>
				<div className="deco"></div>
				<div className="deco dos"></div>
				<div className="mainLogin">
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
