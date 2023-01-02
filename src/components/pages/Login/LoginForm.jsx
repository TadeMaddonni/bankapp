import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/appContext/AppContext";
import "./loginForm.scss";

const LoginForm = () => {
	const [signupData, setSignupData] = useState({
		email: "",
		password: "",
	});

	const context = useContext(AuthContext);
	const { loginUser } = context;

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setSignupData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = signupData;
		if (email.includes("@") && email.includes(".com") && password != "") {
			console.log("valid data");
			loginUser(signupData);
		}
	};
	return (
		<div className="formContainer">
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<div className="inputContainer">
					<input
						type="text"
						name="email"
						placeholder="Enter your email"
						required
						onChange={(e) => handleOnChange(e)}
					/>
				</div>
				<div className="inputContainer">
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						required
						onChange={(e) => handleOnChange(e)}
					/>
				</div>
				<div className="inputContainer">
					<Link to="/signup" className="signUpLink">
						You don't have an account? Sign up here.
					</Link>
				</div>
				<div className="inputContainer">
					<button type="submit">Log in</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
