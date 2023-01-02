import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/appContext/AppContext";

// import { useAccessControl } from "../hooks/useAccessControl";

export function ProtectedRoute() {
	const { isLogged } = useContext(AuthContext);
	return isLogged ? <Outlet /> : <Navigate to="/login" />;
}
