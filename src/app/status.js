import data from '../db.json';
import holidays from '../holidays.json';
import { useSelector } from 'react-redux';

const currentTime = new Date();
const currentDay = currentTime.getDay();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();
const currentDate = currentTime.toDateString();

const holidayList = holidays.map((holiday) =>
	new Date(holiday.date).toDateString()
);

const schedule = data.info.schedule;
const currentSchedule = schedule[currentDay];

export const isOpen = () => {
	let isOpen = useSelector((state) => state.status.isOpen);

	if (currentSchedule) {
		for (const timeSlot of currentSchedule) {
			const [openHourStr, openMinute] = timeSlot.open_time.split(':');
			const [closeHourStr, closeMinute] = timeSlot.close_time.split(':');
			const openHour = Number(openHourStr);
			const closeHour = Number(closeHourStr);

			if (
				(currentHour > openHour && currentHour < closeHour) ||
				(currentHour === openHour && currentMinute >= openMinute) ||
				(currentHour === closeHour && currentMinute <= closeMinute)
			) {
				isOpen = true;
			}
		}
	}

	if (holidayList.includes(currentDate)) {
		isOpen = false;
	}

	return isOpen;
};

export const closingTime = () => {
	let closingTime = '';

	if (currentSchedule) {
		for (const timeSlot of currentSchedule) {
			const [openHourStr, openMinute] = timeSlot.open_time.split(':');
			const [closeHourStr, closeMinute] = timeSlot.close_time.split(':');
			const openHour = Number(openHourStr);
			const closeHour = Number(closeHourStr);

			if (
				(currentHour > openHour && currentHour < closeHour) ||
				(currentHour === openHour && currentMinute >= openMinute) ||
				(currentHour === closeHour && currentMinute <= closeMinute)
			) {
				closingTime = `${closeHour}:${closeMinute}`;
			}
		}
	}

	return closingTime;
};
