import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<div className='container-header no-padding'><Header /></div>
			<div className="outlet">
				<Outlet />
				<div className="container">
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
