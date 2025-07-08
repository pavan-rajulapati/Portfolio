import Styles from '../styles/HeroSection.module.css'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, translateX: "-100%" }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 2 }}
                className={Styles.container} id='home'>
                <div className={Styles.heroSection}>
                    <div className={Styles.content}>
                        <span>Portfolio</span>
                    </div>
                    <div className={Styles.btn}>
                        <a href="https://drive.google.com/file/d/1-nOrGx4YP0cjC9lmlk_orei13UWAjvl_/view?usp=sharing" download>
                            <button>View CV</button>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroSection