import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePharmacyStatus } from './wereopenSlice';

export default function CallToAction() {
	const dispatch = useDispatch();
	let isOpen = useSelector((state) => state.wereopen.isOpen);

	useEffect(() => {
		const currentTime = new Date();
		const currentDay = currentTime.getDay();
		const currentHour = currentTime.getHours();
		const currentMinute = currentTime.getMinutes();

		if (
			(currentDay >= 1 &&
				currentDay <= 6 &&
				currentHour >= 9 &&
				currentHour < 13) ||
			(currentDay >= 1 &&
				currentDay <= 5 &&
				currentHour === 13 &&
				currentMinute >= 45 &&
				currentMinute <= 59) ||
			(currentDay >= 1 &&
				currentDay <= 5 &&
				currentHour > 13 &&
				currentHour < 20)
		) {
			isOpen = true;
		}

		dispatch(updatePharmacyStatus(isOpen));
	});

	return isOpen ? (
		<section className="container padding margin-bottom banner-open">
			<h1>Estamos abertos</h1>
			<p>
				Venha visitar-nos ou contacte-nos diretamente por telefone{' '}
				<span className="material-symbols-outlined footer-icon">call</span>
			</p>
		</section>
	) : null;

	// return (
	// 	<>
	// 		<section className="container padding banner-open">
	// 			<h1>Estamos abertos</h1>
	// 			<p>
	// 				Venha visitar-nos ou contacte-nos diretamente por{' '}
	// 				<a href="tel:21 752 4103">
	// 					telefone{' '}
	// 					<span className="material-symbols-outlined footer-icon">call</span>
	// 				</a>
	// 			</p>
	// 		</section>
	// 	</>
	// );
}
