import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePharmacyStatus } from './wereopenSlice';

export function isOpen() {
	useEffect(() => {
		const dispatch = useDispatch();
		let isOpen = useSelector((state) => state.wereopen.isOpen);

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
}
