import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="vh-100">
			<Navbar/>
			<div className="w-75 mx-auto pb-4">
				<Jumbotron/>
				<div className="d-flex justify-content-center">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
