export default function Service({ service }) {
	let { title, imageUrl, description } = service;

	return (
		<article
			className="container service-card"
			style={{ backgroundImage: `url(images/services/${imageUrl})` }}>
			<h1 className="radius">{title}</h1>
			<div className="description radius">
				<p>{description}</p>
			</div>
		</article>
	);
}