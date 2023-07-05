import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeNav, hamburgerClick } from '../app/headerSlice';
import Hamburger from './Hamburger';
import Nav from './Nav';

export default function Header() {
	let dispatch = useDispatch();

	const icon = useSelector((state) => state.nav.hamburgerIcon);

	const classes = useSelector((state) => state.nav.navClass);

	return (
		<header className="header">
			<div className="header-mobile">
				<Link to="/home">
					<figure className="logo show-mobile">
						<img
							src="images/logo/logo-white-on-transparent-background.png"
							alt="logo"
						/>
					</figure>
					<figure className="logo hide-mobile">
						<img
							src="images/logo/logo-color-on-transparent-background.png"
							alt="logo"
						/>
					</figure>
				</Link>
				<Hamburger
					onClick={() => dispatch(hamburgerClick())}
					icon={icon}
				/>
			</div>
			<Nav
				onClick={() => dispatch(closeNav())}
				className={classes}
			/>
		</header>
	);
}
