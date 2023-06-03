import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import store from './app/store';
import App from './App.jsx';
import Contacts from './layouts/Contacts.jsx';
import Home from './layouts/Home.jsx';
import NotFound from './layouts/NotFound.jsx';
import Sales from './layouts/Sales.jsx';
import Services from './layouts/Services.jsx';
import './index.css';
import { Provider } from 'react-redux';
import Mapa from './layouts/Mapa';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<Routes>
					<Route
						path="/"
						element={<App />}>
						<Route
							index
							element={<Navigate to="/home" />}></Route>
						<Route
							path="/home"
							element={<Home />}></Route>
						<Route
							path="/services"
							element={<Services />}></Route>
						<Route
							path="/mapa"
							element={<Mapa />}></Route>
						<Route
							path="/sales"
							element={<Sales />}></Route>
						<Route
							path="/contacts"
							element={<Contacts />}></Route>
						<Route
							path="*"
							element={<NotFound />}></Route>
					</Route>
				</Routes>
			</HashRouter>
		</Provider>
	</React.StrictMode>
);
