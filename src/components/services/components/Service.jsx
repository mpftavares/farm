export default function Service({ service }) {
	let { title, imageUrl, description } = service;

	return (
		<article
			className="box service-card"
			style={{ backgroundImage: `url(images/services/${imageUrl})` }}>
			<h1 className="radius">{title}</h1>
			<p className="description radius">{description}</p>
		</article>
	);
}
