import Form from './Form';

export default function FormLayout() {
	return (
		<section className="box light-background padding contact-form">
			<figure className="show-laptop contact-form-img">
				<img
					className="radius"
					src="../../images/pharmacy/inside-left.jpg"
					alt="pharmacy"
				/>
			</figure>
			<Form />
		</section>
	);
}
