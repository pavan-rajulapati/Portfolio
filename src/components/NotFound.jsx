import Styles from '../styles/NotFound.module.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div>
			<div className={Styles.NotFound}>
				<div className={Styles.container}>
					<span>404</span>
					<p>This page DOES'NT exist</p>
					<Link to={'/'}><button>Return to home</button></Link>
				</div>
			</div>
		</div>
	)
}

export default NotFound