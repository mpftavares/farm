import { isOpen } from '../../app/isOpen';
import ContactBtn from '../contacts/ContactBtn';

export default function Closed() {

const isPharmacyOpen = isOpen();

	return isPharmacyOpen ? null : (
		<section className="box padding animated-background">
			<h1>Estamos encerrados</h1>
			<p className='margin-bottom'>Pode contactar-nos através do formulário</p>
            <ContactBtn/>
		</section>
	);
}
