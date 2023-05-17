import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../serviceSlice';
import Service from './Service';

export default function ServiceList() {
	const { serviceList } = useSelector((state) => state.services);

	let dispatch = useDispatch();

	useEffect(() => {
		fetch('http://localhost:3000/serviceList')
			.then((resp) => resp.json())
			.then((data) => dispatch(getServices(data)))
			.catch((err) => console.log('Error: ', err));
	}, []);

	return (
		<section className="card-grid margin-bottom">
			{serviceList.map((s, i) => (
				<Service
					key={i}
					service={s}
				/>
			))}
		</section>
	);
}
