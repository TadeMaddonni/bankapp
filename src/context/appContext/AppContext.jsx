import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const AppContext = ({ children }) => {
	const [nextPage, setNextPage] = useState(false);
	const navigate = useNavigate();
	const [isLogged, setIsLogged] = useState(
		JSON.parse(sessionStorage.getItem("userData")) ? true : false
	);
	const [userData, setUserData] = useState(
		JSON.parse(sessionStorage.getItem("userData")) || {}
	);
	const [accessToken, setAccessToken] = useState(
		JSON.parse(sessionStorage.getItem("userData"))?.token || ""
	);

	const [userAccounts, setUserAccounts] = useState(
		JSON.parse(sessionStorage.getItem("userAccounts")) || []
	);

	const [userTransactions, setUserTransactions] = useState([]);

	useEffect(() => {
		sessionStorage.setItem("accessToken", JSON.stringify(accessToken));
	}, [accessToken]);

	useEffect(() => {
		sessionStorage.setItem("userAccounts", JSON.stringify(userAccounts));
	}, [userAccounts]);

	const getUserTransactions = (page) => {
		if (page) {
			fetch(
				`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions/?page=${page}`,
				{
					headers: {
						Accept: "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.nextPage) {
						setNextPage(true);
					} else {
						setNextPage(false);
					}
					console.log(res);
					const transactions = res.data;

					setUserTransactions(res.data);
					return transactions;
				});
		} else {
			fetch(
				"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions",
				{
					headers: {
						Accept: "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)
				.then((res) => res.json())
				.then((res) => {
					const transactions = res.data;
					setUserTransactions(res.data);
					return transactions;
				});
		}
	};

	const handleUserAccounts = (id, token) => {
		console.log("No tiene cuenta");
		// Create an account
		const userId = parseInt(userData.id);

		fetch(
			"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts",
			{
				body: JSON.stringify({
					creationDate: "2022-10-26 10:00:00",
					money: 0,
					isBlocked: false,
					userId: userId,
				}),
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				method: "POST",
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUserAccounts([data]);
				navigate("/");
			});
	};

	const getUserAccounts = (token) => {
		fetch(
			"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/me",
			{
				headers: {
					accept: "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setUserAccounts(data);
				sessionStorage.setItem("userAccounts", JSON.stringify(data));
				if (data[0]?.id) {
					getUserTransactions();
					navigate("/");
				} else {
					handleUserAccounts(userData.id, token);
				}
			});
	};

	const getUserInfo = async (token) => {
		const response = await fetch(
			"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me",
			{
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);

		const data = await response.json();
		console.log(data);
		if (data?.id) {
			setUserData({
				...data,
				token,
			});
			sessionStorage.setItem(
				"userData",
				JSON.stringify({
					...data,
					token,
				})
			);
			getUserAccounts(token);
		}
	};

	const loginUser = async (userData) => {
		const response = await fetch(
			"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login",
			{
				body: JSON.stringify({
					email: userData.email,
					password: userData.password,
				}),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				method: "POST",
			}
		);
		const data = await response.json();
		const accessToken = await data?.accessToken;
		console.log(accessToken);
		if (accessToken) {
			// Llamar al auth/me
			setAccessToken(accessToken);
			setIsLogged(true);
			getUserInfo(accessToken);
			return accessToken;
		} else {
			alert("Credenciales no validas");
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isLogged,
				accessToken,
				userData,
				userAccounts,
				userTransactions,
				nextPage,
				loginUser,
				getUserTransactions,
				getUserAccounts,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AppContext;
