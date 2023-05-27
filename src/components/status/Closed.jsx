import { isOpen } from '../../app/isOpen';
import ContactBtn from '../contacts/ContactBtn';

export default function Closed() {

const isPharmacyOpen = isOpen();

	return isPharmacyOpen ? null : (
		<section className="box padding center-content dark-background">
			<h1>Estamos encerrados</h1>
			<p className='margin-bottom'>Contacte-nos através do formulário disponível</p>
            <ContactBtn/>
		</section>
	);
}
