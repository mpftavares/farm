import data from '../data.json';
import holidays from '../holidays.json';

const currentTime = new Date();
const currentDay = currentTime.getDay();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();
const currentDate = currentTime.toDateString();

const schedule = data.info.schedule;
const currentSchedule = schedule[currentDay];

// export const status = () => {
// 	const holidayList = holidays.map((holiday) =>
// 		new Date(holiday.date).toDateString()
// 	);

// 	let isOpen = false;

// 	if (currentSchedule) {
// 		for (const timeslot of currentSchedule) {
// 			const [openHour, openMinute] = timeslot.open_time.split(':');
// 			const [closeHour, closeMinute] = timeslot.close_time.split(':');

// 			if (
// 				(currentHour > openHour && currentHour < closeHour) ||
// 				(currentHour === openHour && currentMinute >= openMinute) ||
// 				(currentHour === closeHour && currentMinute <= closeMinute)
// 			) {
// 				isOpen = true;
// 			}
// 		}
// 	}

// 	if (holidayList.includes(currentDate)) {
// 		isOpen = false;
// 	}

// 	return isOpen;
// };

export const closingTime = () => {
	let closingTime = '';

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

	return closingTime;
};
