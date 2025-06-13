import React from 'react'
import Styles from '../styles/Projects.module.css'
import ReadMore from './ReadMore'
import projects from '../db/projectsData'

const Projects = () => {
  return (
    <div>
        <div className={Styles.projectSection} id='projects'>
            <span className={Styles.heading}>Projects</span>
            <div className={Styles.projectContainer}>
                {projects.map((data, index) => (
                    <div className={Styles.projectCard}>
                        <div key={index} className={Styles.image}>
                            <img src={data.image} alt="project" />
                        </div>
                        <div className={Styles.info}>
                            <ReadMore text={data.name}></ReadMore>
                            <div className={Styles.links}>
                                <a href="/"><button>Github</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects