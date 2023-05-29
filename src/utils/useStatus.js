import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../app/statusSlice';
import data from '../data.json';
import holidays from '../holidays.json';


const useStatus = () => {
	const currentTime = new Date();
	const currentDay = currentTime.getDay();
	const currentHour = currentTime.getHours();
	const currentMinute = currentTime.getMinutes();
	const currentDate = currentTime.toDateString();

	const schedule = data.info.schedule;
	const currentSchedule = schedule[currentDay];

	const holidayList = holidays.map((holiday) =>
		new Date(holiday.date).toDateString()
	);

	let isOpen = useSelector((state) => state.fetch.isOpen);

	let dispatch = useDispatch();

	if (currentSchedule) {
		for (const timeslot of currentSchedule) {
			const [openHour, openMinute] = timeslot.open_time.split(':');
			const [closeHour, closeMinute] = timeslot.close_time.split(':');

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

	dispatch(updateStatus(isOpen));
};

export default useStatus;
