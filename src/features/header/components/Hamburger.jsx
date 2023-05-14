export default function Hamburger({ onClick, icon }) {
	return (
		<span
			className="material-symbols-outlined hamburger clickable"
			onClick={onClick}>
			{icon}
		</span>
	);
}
