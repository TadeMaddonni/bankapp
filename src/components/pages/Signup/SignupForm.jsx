import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../../utils/createUser";
import "./signupForm.scss";

const LoginForm = () => {
	const [signupData, setSignupData] = useState({
		name: "",
		lastName: "",
		email: "",
		password: "",
	});
	console.log(signupData);
	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setSignupData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, lastName, email, password } = signupData;
		if (
			name !== "" &&
			lastName !== "" &&
			email.includes("@") &&
			email.includes(".com") &&
			password != ""
		) {
			console.log("valid data");
			createUser(signupData);
		}
	};
	return (
		<div className="formContainer">
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<div className="divider">
					<div className="inputContainer">
						<input
							type="text"
							name="name"
							placeholder="Enter your Name"
							onChange={(e) => handleOnChange(e)}
						/>
					</div>
					<div className="inputContainer">
						<input
							type="text"
							name="lastName"
							placeholder="Enter your Last name"
							onChange={(e) => handleOnChange(e)}
						/>
					</div>
				</div>
				<div className="inputContainer">
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						onChange={(e) => handleOnChange(e)}
					/>
				</div>
				<div className="inputContainer">
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						onChange={(e) => handleOnChange(e)}
					/>
				</div>
				<div className="inputContainer">
					<Link to="/login" className="signUpLink">
						Already have an account? Log in here.
					</Link>
				</div>
				<div className="inputContainer">
					<button type="submit">Sign Up</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
