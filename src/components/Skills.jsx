import React from 'react'
import skills from '../db/skillsData'
import Styles from '../styles/Skills.module.css'

const Skills = () => {
    return (
        <div className={Styles.skillsSection} id="skills">
            <h2 className={Styles.skillsTitle}>Familar Technologies</h2>
            <div className={Styles.skillsGrid}>
                {skills.map((skill, index) => (
                    <div className={Styles.skillCard} key={index}>
                        <div className={Styles.imageSection}>
                            <img src={skill.image} alt={skill.name} width={100} />
                        </div>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
