import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import About from "../components/About";
import Projects from "../components/Projects";

const Homepage = () => {

	return (
		<div>
			<HeroSection />
			<About/>
			<Skills />
			<Projects/>
			<Contact/>
		</div>
	);
};

export default Homepage;
