
export const loginUser = async (userData) => {
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
	const accessToken = await data.accessToken;
	console.log(accessToken);
	return accessToken;
};
