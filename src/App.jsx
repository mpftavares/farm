import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/header/Header';
import SaleModal from './components/sales/SaleModal';

function App() {
	const isModalOpen = useSelector((state) => state.sales.modal);

	return (
		<>
			{isModalOpen && <SaleModal />}
			<main className="App">
					<Header />
				<div className="outlet flex-1 margin-bottom">
					<Outlet />
				</div>

				<Footer />
			</main>
		</>
	);
}

export default App;
