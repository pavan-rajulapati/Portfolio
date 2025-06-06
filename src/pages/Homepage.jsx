import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Styles from "../styles/Homepage.module.css";
import Contact from "../components/Contact";
import About from "../components/About";
import Projects from "../components/Projects";

const Homepage = () => {
	useEffect(() => {
		const cursorDot = document.querySelector(`.${Styles.cursorDot}`);
		const cursorOutline = document.querySelector(`.${Styles.cursorOutline}`);

		const moveCursor = (e) => {
			const { clientX: x, clientY: y } = e;

			cursorDot.style.left = `${x}px`;
			cursorDot.style.top = `${y}px`;

			cursorOutline.animate(
				{
					left: `${x}px`,
					top: `${y}px`,
				},
				{ duration: 300, fill: "forwards" }
			);
		};

		window.addEventListener("mousemove", moveCursor);
		return () => window.removeEventListener("mousemove", moveCursor);
	}, []);

	return (
		<div>
			<div className={Styles.cursorDot}></div>
			<div className={Styles.cursorOutline}></div>
			<HeroSection />
			<About/>
			<Skills />
			<Projects/>
			<Contact/>
		</div>
	);
};

export default Homepage;
