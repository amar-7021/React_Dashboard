import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<Sidebar />
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Home;
