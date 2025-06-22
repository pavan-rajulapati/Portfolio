import React from 'react'
import skills from '../db/skillsData'
import Styles from '../styles/Skills.module.css'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 60,
            damping: 10,
        },
    },
}

const Skills = () => {
    return (
        <motion.div
            className={Styles.skillsSection}
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <motion.h2 className={Styles.skillsTitle} initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                Familiar Technologies
            </motion.h2>
            <motion.div className={Styles.skillsGrid} variants={containerVariants}>
                {skills.map((skill, index) => (
                    <motion.div
                        className={Styles.skillCard}
                        key={index}
                        variants={cardVariants}
                    >
                        <div className={Styles.imageSection}>
                            <img src={skill.image} alt={skill.name} width={100} />
                        </div>
                        <p>{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Skills
