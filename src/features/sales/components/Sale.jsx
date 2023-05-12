export default function Sale({ sale, index }) {
	let { title, imageUrl, description } = sale;
  
	const flexDirection = (index % 2 === 0) ? "row" : "row-reverse";
  
	return (
	  <section className={`container light-background padding card card-sales ${flexDirection}`}>
		<article className="description">{description}</article>
		<img src={`images/sales/${imageUrl}`} alt={title} />
	  </section>
	);
  }