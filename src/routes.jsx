import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./modules/Home";
import Policies from "./modules/Policies";
import Dashboard from "./modules/Home/components/Dashboard";
import AuthRoute from "./utils/AccessRights";
import NotFound from "./errorPages/NotFound";

const Routes = () => {
	const router = createBrowserRouter([
		// *********************** AUTH ROUTE STARTS *********************** //
		{
			element: <AuthRoute />,
			children: [
				{
					path: "/",
					element: <Home />,
					children: [
						{
							index: true,
							element: <Dashboard />,
						},
						{
							path: "policies",
							element: <Policies />,
						},
					],
				},
			],
		},
		// *********************** AUTH ROUTE ENDS *********************** //
		// *********************** PAGE NOT FOUND *********************** //
		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
