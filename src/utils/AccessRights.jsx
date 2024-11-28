import { Navigate, Outlet } from "react-router";
import ErrorBoundary from "./ErrorBoundary";

export default function AuthRoute() {
	const isAuthenticated = localStorage.getItem("token");
	console.log({ isAuthenticated });

	if (isAuthenticated) {
		return (
			<ErrorBoundary>
				<Outlet />
			</ErrorBoundary>
		);
	} else {
		return <Navigate to="/login" />;
	}
}
