import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import Homepage from './pages/Homepage'
import Styles from './styles/App.module.css'

const CursorEffect = () => {
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
		<>
			<div className={Styles.cursorDot}></div>
			<div className={Styles.cursorOutline}></div>
		</>
	);
};

const AppContent = () => {
	const location = useLocation();

	return (
		<>
			<CursorEffect />
			{location.pathname === '/' && <Navbar />}
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
};

const App = () => {
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	);
};

export default App;
