import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './features/footer/components/Footer';
import Header from './features/header/components/Header';
import SaleModal from './features/sales/components/SaleModal';

function App() {
	const isModalOpen = useSelector((state) => state.sales.modal);

	return (
		<>
			{isModalOpen && <SaleModal />}
			<main className="App">
				<div className="container-header">
					<Header />
				</div>
				<div className="outlet">
					<Outlet />
					<div className="container light-background padding">
						<Footer />
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
