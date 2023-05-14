import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePharmacyStatus } from '../calltoactionSlice';

export default function CallToAction() {
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.calltoaction.isOpen);

	useEffect(() => {
		const currentTime = new Date();
		const currentDay = currentTime.getDay();
		const currentHour = currentTime.getHours();
		const currentMinute = currentTime.getMinutes();

		let isOpen = false;

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

	// return <section>{isOpen ? <h1>Open</h1> : null}</section>;

	return (
		<>
			<section className="container padding banner-open">
				<h1>Estamos abertos</h1>
				<p>
					Venha visitar-nos ou contacte-nos diretamente{' '}
					<a href="tel:21 752 4103">
						<span className="material-symbols-outlined footer-icon">call</span>
					</a>
				</p>
			</section>
		</>
	);
}
