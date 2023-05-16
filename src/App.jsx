import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import SaleModal from './components/sales/components/SaleModal';
import Footer from './components/Footer';

function App() {
	const isModalOpen = useSelector((state) => state.sales.modal);

	return (
		<>
			{isModalOpen && <SaleModal />}
			<main className="App">
				<div className="container-header margin-bottom">
					<Header />
				</div>
				<div className="outlet">
					<Outlet />
				</div>

				<Footer />
			</main>
		</>
	);
}

export default App;
