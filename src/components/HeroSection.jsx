import Styles from '../styles/HeroSection.module.css'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div>
        <motion.div
        initial = {{opacity : 0, translateX : "-100%"}}
        animate={{opacity : 1, translateX : 0}}
        transition={{duration : 2}}
         className={Styles.container} id='home'>
            <div className={Styles.animation1}>

            </div>
            <div className={Styles.animation2}>

            </div>
            <div className={Styles.heroSection}>
                <div className={Styles.infoSection}>
                    <div className={Styles.heading}>
                        <span className={Styles.name}>Hello, I'm</span>
                        <span className={Styles.name}>Web <>Developer</></span>
                    </div>
                    <div>
                        <p> 
                            <span>👋 Hi, I'm <mark>Pavan Kumar Rajulapati</mark></span>
                            a passionate and results-driven software engineer with
                            a keen eye for detail and a strong commitment to delivering high-quality problem sloution.
                        </p>
                    </div>
                    <div className={Styles.btn}>
                        <button>Let's Talk</button>
                    </div>
                </div>
                <div className={Styles.imageSection}>
                    <img src="https://res.cloudinary.com/dxrfohx12/image/upload/v1749748758/Adobe_Express_-_file_3_hl8uqr.png" alt="main-image" />
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default HeroSection