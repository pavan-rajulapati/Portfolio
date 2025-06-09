import { motion } from 'framer-motion'
import Styles from '../styles/Navbar.module.css'
import { Link } from 'react-scroll'

const navLinks = [
	{ to: 'home', label: 'Home' },
	{ to: 'about', label: 'About' },
	{ to: 'skills', label: 'Skills' },
	{ to: 'projects', label: 'Projects' },
	{ to: 'contact', label: 'Contact' },
]

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, // Time between each child animation
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: -50 },
	show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
}

const Navbar = () => {
	return (
		<div>
			<div className={Styles.container}>
				<div className={Styles.navContainer}>
					<nav>
						<motion.ul
							variants={containerVariants}
							initial="hidden"
							animate="show"
						>
							{navLinks.map((link, index) => (
								<motion.li key={index} variants={itemVariants}>
									<Link
										to={link.to}
										smooth={true}
										duration={500}
										offset={-70}
										spy={true}
									>
										{link.label}
									</Link>
								</motion.li>
							))}
						</motion.ul>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Navbar
