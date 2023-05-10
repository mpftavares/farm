export default function Sale({ sale }) {
	let { title, imageUrl } = sale;

	return (
		<figure>
			<img
				src={`images/sales/${imageUrl}`}
				alt={title}
			/>
		</figure>
	);
}
