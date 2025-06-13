import React, { useState } from 'react';
import Styles from '../styles/Contact.module.css';
import { motion } from 'framer-motion';
import {toast, Toaster} from 'react-hot-toast'

const Contact = () => {
	const [formData, setFormData] = useState({
		Name: '',
		Email: '',
		Message: ''
	});

	const handleChange = (e) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	const handleSubmit = async (e) => {	
	e.preventDefault();

	const url = 'https://formspree.io/f/xanjogzz';

	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: formData.Name,
				email: formData.Email,
				message: formData.Message
			})
		});
		toast.success('Message sent successfully!');
		setFormData({ Name: '', Email: '', Message: '' });
	} catch (error) {
		toast.error('Failed to send message. Please try again.');
		console.error(error);
	}
};
	return (
		<div>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className={Styles.contactSection}
				id="contact"
			>
				<div className={Styles.contactContainer}>
					<span>Let's Talk,</span>
					<form onSubmit={handleSubmit}>
						<div className={Styles.inputContainer}>
							<div>
								<p>MY NAME IS</p>
								<input
									required
									type="text"
									name="Name"
									value={formData.Name}
									onChange={handleChange}
									placeholder="Enter your name"
								/>
							</div>
							<div>
								<p>HERE IS MY EMAIL</p>
								<input
									required
									type="email"
									name="Email"
									value={formData.Email}
									onChange={handleChange}
									placeholder="Enter your email"
								/>
							</div>
							<div>
								<p>I'M LOOKING FOR</p>
								<textarea
									required
									name="Message"
									value={formData.Message}
									onChange={handleChange}
									placeholder="Type your message here"
								/>
							</div>
						</div>
						<div className={Styles.btn}>
							<button type="submit">Okay</button>
						</div>
					</form>
				</div>
				<Toaster/>
			</motion.div>
		</div>
	);
};

export default Contact;
