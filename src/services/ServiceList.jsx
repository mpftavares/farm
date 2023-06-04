import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../app/serviceSlice';
import Loader from '../features/Loader';
import Service from './Service';

export default function ServiceList() {
	let dispatch = useDispatch();
	const { loading, services, error } = useSelector((state) => state.services);

	useEffect(() => {
		dispatch(getServices());
	}, [dispatch]);

	if (loading) {
		return (
			<div className="center-content">
				<Loader />
			</div>
		);
	}

	if (error) {
		return <span>Error loading data</span>;
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
