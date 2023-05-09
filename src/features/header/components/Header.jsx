import { useDispatch, useSelector } from 'react-redux';
import { closeNav, hamburguerClick } from '../headerSlice';
import Hamburguer from './Hamburguer';
import Nav from './Nav';

export default function Header() {
	let dispatch = useDispatch();

	const icon = useSelector((state) => state.nav.hamburguerIcon);

	const classes = useSelector((state) => state.nav.navClass);

	return (
		<div className="header">
			<header className="header-mobile">
				<div className="logo">{/* // logo as background image */}</div>
				<Hamburguer
					onClick={() => dispatch(hamburguerClick())}
					icon={icon}
				/>
			</header>
			<Nav
				onClick={() => dispatch(closeNav())}
				className={classes}
			/>
		</div>
	);
}
