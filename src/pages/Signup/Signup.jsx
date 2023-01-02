import React from "react";
import SignupForm from "../../components/pages/Signup/SignupForm";
import "./signup.scss";
const Signup = () => {
	return (
		<div className="signupContainer">
			<div className="signup">
				<div className="top">
					<h1>Sign up</h1>
					<span>Join WeAre</span>
				</div>
				<div className="deco"></div>
				<div className="deco dos"></div>
				<div className="mainSignup">
					<SignupForm />
				</div>
			</div>
		</div>
	);
};

export default Signup;
