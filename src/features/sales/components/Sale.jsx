export default function Sale({ sale }) {
	let { title, imageUrl, description } = sale;

	return (
		<section
			className="container light-background padding card
		card-sales">
			<article>{description}</article>
			<img
				src={`images/sales/${imageUrl}`}
				alt={title}
			/>
		</section>
	);
}
