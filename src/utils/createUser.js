export const createUser = async (userData) => {
	const response = await fetch(
		"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users",
		{
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				first_name: userData.name,
				last_name: userData.lastName,
				email: userData.email,
				password: userData.password,
				roleId: 2,
				points: 50,
			}),
		}
	);

	const data = await response.json();
	if (data.createdAt) {
		alert("Usuario creado con éxito");
	} else {
		alert("Alguno de los datos ingresados no son validos");
	}
	console.log(data);
};

/* 
USUARIO CREADO RECIENTEMENTE

createdAt: "2022-11-28T19:04:36.366Z"
email: "tadeee@gmail.com"
first_name: "tadd"
id: 2265
last_name: "maadd"
password: "$2b$10$le1wTqj8mBiDfjJFEW5Yy.uNQGxXy8oswCbefUwOM6tF7M/o6XXEW" // tade1234
points: 50
roleId: 2
updatedAt: "2022-11-28T19:04:36.366Z"
*/
