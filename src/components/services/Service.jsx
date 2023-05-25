export default function Service({ service }) {
	let { title, imageUrl, description } = service;

	return (
		<article
			className="box service-card center-content margin-0"
			style={{ backgroundImage: `url(images/services/${imageUrl})` }}>
			<h1 className="radius center-content">{title}</h1>
			<p className="description radius">{description}</p>
		</article>
	);
}
