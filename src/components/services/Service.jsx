export default function Service({ service }) {
	let { title, imageUrl, description } = service;

	return (
		<article className="box service-card light-background margin-0 padding-2 flex-col">
			<img
				src={`/images/services/${imageUrl}`}
				className="radius"
			/>
			<div className="flex-col">
				<h2 className="mobile-title margin-0">{title}</h2>
				<p className="margin-0">{description}</p>
			</div>
		</article>
	);
}
