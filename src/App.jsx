import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar/Navbar";
import "./global.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AppContext from "./context/appContext/AppContext";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import SendMoney from "./pages/SendMoney/SendMoney";
import AddMoney from "./pages/AddMoney/AddMoney";
import Movements from "./pages/Movements/Movements";
import Account from "./pages/Account/Account";
import Footer from "./components/common/Footer/Footer";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<AppContext>
					<Navbar />
					<Routes>
						<Route element={<ProtectedRoute />}>
							<Route path="/" element={<Home />}></Route>
							<Route path="/home" element=""></Route>
							<Route
								path="/movements"
								element={<Movements />}
							></Route>
							<Route
								path="/send-money"
								element={<SendMoney />}
							></Route>
							<Route
								path="/add-money"
								element={<AddMoney />}
							></Route>
							<Route
								path="/account"
								element={<Account />}
							></Route>
						</Route>

						<Route path="/login" element={<Login />}></Route>
						<Route path="/signUp" element={<Signup />}></Route>
					</Routes>
					<Footer />
				</AppContext>
			</BrowserRouter>
		</div>
	);
}

export default App;
