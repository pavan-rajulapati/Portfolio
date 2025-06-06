import React from 'react'
import Styles from '../styles/Contact.module.css'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className={Styles.contactSection} id='contact'>
                <div className={Styles.contactContainer}>
                    <span>Let's Talk,</span>
                    <form>
                        <div className={Styles.inputContainer}>
                            <div>
                                <p>MY NAME IS</p>
                                <input required type="text" placeholder='Enter your name' />
                            </div>
                            <div>
                                <p>HERE IS MY EMAIL</p>
                                <input required type="email" placeholder='Enter your email' />
                            </div>
                            <div>
                                <p>I'M LOOKING FOR</p>
                                <textarea required type="text" placeholder='Type your message here' />
                            </div>
                        </div>
                        <div className={Styles.btn}>
                            <button type='submit'>Okay</button>

                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact