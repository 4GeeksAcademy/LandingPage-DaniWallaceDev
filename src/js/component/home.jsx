import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
	<>
	<Navbar/>
	<Jumbotron/>
	<div className="row d-flex justify-content-center">
		<div className="col-12 col-lg-2">
			<Card/>
		</div>
		<div className="col-12 col-lg-2">
			<Card/>
		</div>
		<div className="col-12 col-lg-2">
			<Card/>
		</div>
		<div className="col-12 col-lg-2">
			<Card/>
		</div>
		<div className="col-12 col-lg-2">
			<Card/>
		</div>
	</div>
	</>
	);
	
};

export default Home;
