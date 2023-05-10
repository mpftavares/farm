export default function Service({ service }) {
	let { title, imageUrl } = service;

	return (
		<article>
			<figure>
				<img
					src={`images/services/${imageUrl}`}
					alt={title}
				/>
			</figure>{' '}
			<h1>{title}</h1>
		</article>
	);
}
