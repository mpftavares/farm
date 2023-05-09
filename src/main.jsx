import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import store from './app/store';
import App from './App.jsx';
import Adress from './pages/Adress.jsx';
import Contacts from './pages/Contacts.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Sales from './pages/Sales.jsx';
import Services from './pages/Services.jsx';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
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
							path="/sales"
							element={<Sales />}></Route>
						<Route
							path="/adress"
							element={<Adress />}></Route>
						<Route
							path="/contacts"
							element={<Contacts />}></Route>
						<Route
							path="*"
							element={<NotFound />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
