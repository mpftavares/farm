export default function Service({ service }) {
	let { id, title, imageUrl, description } = service;

	const isEvenId = id % 2 != 0;
	const className = `box service-card light-background margin-0 padding-2 flex-col ${
		isEvenId ? 'row-reverse' : ''
	}`;

	return (
		<article className={className}>
			<img
				src={`images/services/${imageUrl}`}
				className="radius"
			/>
			<div className="flex-col">
				<h2 className="mobile-title margin-0">{title}</h2>
				<p className="margin-0">{description}</p>
			</div>
		</article>
	);
}
