import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import { updateStatus } from './app/statusSlice';
import Footer from './components/Footer';
import Header from './components/header/Header';
import SaleModal from './components/sales/SaleModal';
import { isOpen } from './utils/status';

function App() {
	const isModalOpen = useSelector((state) => state.sales.modal);

	const isPharmacyOpen = isOpen();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateStatus(isPharmacyOpen));
	}, [dispatch]);

	return (
		<>
			{isModalOpen && <SaleModal />}
			<main className="App">
				<Header />
				<div className="outlet flex-1 margin-bottom">
					<Outlet />
				</div>

				<Footer />
				<p className="powered">Powered by marianatavares &copy; 2023</p>
			</main>
		</>
	);
}

export default App;
