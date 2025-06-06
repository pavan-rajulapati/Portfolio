import React from 'react'
import Styles from '../styles/Projects.module.css'
import ReadMore from './ReadMore'

const Projects = () => {
  return (
    <div>
        <div className={Styles.projectSection} id='projects'>
            <div className={Styles.projectContainer}>
                <span className={Styles.heading}>Projects</span>
                <div className={Styles.projectCard}>
                    <div className={Styles.image}>
                        <img src="public\media\projects\Screenshot 2025-05-30 231458.png" alt="project" />
                    </div>
                    <div className={Styles.info}>
                        <ReadMore text="Built a feature-rich e-commerce platform with distinct user and admin roles. The application supports product listing, cart functionality, order placement, and secure Stripe payment integration. Redis caching is implemented to optimize performance for frequently accessed data such as product listings and user carts. Admins have access to inventory and user management tools. The project focuses on functionality, scalable backend architecture, and smooth payment workflows."></ReadMore>
                        <div className={Styles.links}>
                            <a href="/">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects