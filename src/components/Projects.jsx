import React from 'react'
import Styles from '../styles/Projects.module.css'
import projects from '../db/projectsData'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
}

const Projects = () => {
    return (
        <div className={Styles.projectSection} id='projects'>
            <motion.span
                className={Styles.heading}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.span>

            <motion.div
                className={Styles.projectContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {projects.map((data, index) => (
                    <motion.div
                        key={index}
                        className={Styles.projectCard}
                        variants={cardVariants}
                    >
                        <div className={Styles.image}>
                            <img src={data.image} alt={data.name} />
                        </div>
                        <div className={Styles.info}>
                            <span>{data.name}</span>
                            <div className={Styles.links}>
                                <a href={data.link} target="_blank" rel="noopener noreferrer">
                                    <button>Github</button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects
