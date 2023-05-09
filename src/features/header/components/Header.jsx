import { useState } from 'react';
import Hamburguer from './Hamburguer';
import Nav from './Nav';


export default function Header() {
	const [showNav, setShowNav] = useState(false);

	const hamburguerIcon = showNav ? 'close' : 'menu';

	const handleNavClick = () => {
		setShowNav(!showNav);
	};

	const navClass = showNav ? 'nav' : 'nav hide-mobile';

	return (
		<div className="header">
			<header className="header-mobile">
				<div className="logo">{/* // logo as backgroud image */}</div>
				<Hamburguer 
					onClick={handleNavClick}
					icon={hamburguerIcon}
				/>
			</header>
			<Nav
				onClick={handleNavClick}
				className={navClass}
			/>
		</div>
	);
}
