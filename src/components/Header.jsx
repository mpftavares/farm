import { useState } from 'react';
import Hamburguer from './Hamburguer';
import Logo from './Logo';
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
				<Logo className="logo" />
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
