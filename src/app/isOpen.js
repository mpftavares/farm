import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePharmacyStatus, updateClosingTime } from './statusSlice';
import data from '../data.json';
import holidays from '../holidays.json';

export function isOpen() {
	const dispatch = useDispatch();

	let isOpen = useSelector((state) => state.status.isOpen);

	useEffect(() => {
		const currentTime = new Date();
		const currentDay = currentTime.getDay();
		const currentHour = currentTime.getHours();
		const currentMinute = currentTime.getMinutes();

		const schedule = data.info.schedule;
		const currentSchedule = schedule[currentDay];

		const holidayList = holidays.map((holiday) => new Date(holiday.date).toDateString());

		if (currentSchedule) {
			for (const day of currentSchedule) {
				const [openHour, openMinute] = day.open_time.split(':');
				const [closeHour, closeMinute] = day.close_time.split(':');

				if (
					(currentHour > openHour && currentHour < closeHour) ||
					(currentHour === openHour && currentMinute >= openMinute) ||
					(currentHour === closeHour && currentMinute <= closeMinute)
				) {
					isOpen = true;
				}
			}
		}

		const currentDate = currentTime.toDateString();
		if (holidayList.includes(currentDate)) {
			isOpen = false;
		}

		dispatch(updatePharmacyStatus(isOpen));
	}, []);

	return isOpen;
}


export function closingTime() {

	const dispatch = useDispatch();

	let closingTime = useSelector((state) => state.status.closingTime);


	useEffect(() => {
	const currentTime = new Date();
	const currentDay = currentTime.getDay();
	const currentHour = currentTime.getHours();
	const currentMinute = currentTime.getMinutes();
  
	const schedule = data.info.schedule;
	const currentSchedule = schedule[currentDay];
  
	if (currentSchedule) {
	  for (const slot of currentSchedule) {
		const [openHour, openMinute] = slot.open_time.split(':');
		const [closeHour, closeMinute] = slot.close_time.split(':');
  
		if (
		  (currentHour > openHour && currentHour < closeHour) ||
		  (currentHour === openHour && currentMinute >= openMinute) ||
		  (currentHour === closeHour && currentMinute <= closeMinute)
		) {
		  closingTime = `${closeHour}:${closeMinute}`;
		}
	  }
	}
	dispatch(updateClosingTime(closingTime));
}, []);

	return closingTime;
  }