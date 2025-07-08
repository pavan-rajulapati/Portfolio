import { motion } from 'framer-motion'
import Styles from '../styles/About.module.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";


const About = () => {
	return (
		<div>
			<div className={Styles.aboutSection} id='about'>
				<div className={Styles.aboutContainer}>
					<div className={Styles.heading}>
						<p>about me</p>
					</div>
					<div className={Styles.infoSection}>
						{/* Animate image on scroll into view */}
						<motion.div
							className={Styles.image}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, ease: 'easeOut' }}
							viewport={{ once: true, amount: 0.3 }}
						>
							<img src="https://res.cloudinary.com/dxrfohx12/image/upload/v1749748758/Adobe_Express_-_file_5_bgkvz5.png" alt="About" />
						</motion.div>

						<div className={Styles.info}>
							<span className={Styles.name}>I'm Pavan Rajulapati 👋,</span>
							<p>
								a passionate MERN Stack Developer with a strong foundation in full-stack web development.
								I focus on building functional, scalable, and user-friendly applications. I enjoy solving real-world problems with clean code and love turning ideas into reality through my projects.
								Currently, I’m exploring advanced backend architectures and real-time applications.
							</p>
							<div className={Styles.links}>
								<div>
									<a href='https://www.linkedin.com/in/pavan-rajulapati'>
										<button>Linkedin <span><FaLinkedin /></span></button>
									</a>
								</div>
								<div>
									<a href={'https://github.com/pavan-rajulapati'}>
										<button>Github <span><FaGithubAlt /></span></button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
