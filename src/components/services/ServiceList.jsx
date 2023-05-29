import useFetch from '../../utils/useFetch';
import Service from './Service';

export default function ServiceList() {
	const serviceList = useFetch('http://localhost:3000/serviceList');

	return (
		<section className="card-grid">
			{serviceList.map((s, i) => (
				<Service
					key={i}
					service={s}
				/>
			))}
		</section>
	);
}
