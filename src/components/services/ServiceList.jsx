import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../app/serviceSlice';
import Service from './Service';

export default function ServiceList() {
	let dispatch = useDispatch();
	const { loading, services } = useSelector((state) => state.services);

	useEffect(() => {
		dispatch(getServices());
	}, [dispatch]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="card-grid">
			{services.map((s, i) => (
				<Service
					key={i}
					service={s}
				/>
			))}
		</section>
	);
}
