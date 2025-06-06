import Styles from '../styles/Navbar.module.css'
import { Link } from 'react-scroll'

const Navbar = () => {
	return (
		<div>
			<div className={Styles.container}>
				<div className={Styles.navContainer}>
					<nav>
						<ul>
							<Link
								to="home"
								smooth={true}
								duration={500}
								offset={-70}
								spy={true}
							>
								<li>Home</li>
							</Link>
							<Link
								to="about"
								smooth={true}
								duration={500}
								offset={-70}
								spy={true}
							>
								<li>About</li>
							</Link>
							<Link
								to="skills"
								smooth={true}
								duration={500}
								offset={-70}
								spy={true}
							>
								<li>Skills</li>
							</Link>
							<Link
								to="projects"
								smooth={true}
								duration={500}
								offset={-70}
								spy={true}
							>
								<li>Projects</li>
							</Link>
							<Link
								to="contact"
								smooth={true}
								duration={500}
								offset={-70}
								spy={true}
							>
								<li>Contact</li>
							</Link>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Navbar
