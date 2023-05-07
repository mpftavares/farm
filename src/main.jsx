import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import Adress from './pages/Adress.jsx';
import Contacts from './pages/Contacts.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Sales from './pages/Sales.jsx';
import Services from './pages/Services.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<App />}>
					<Route index element={<Home/>}></Route>
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
	</React.StrictMode>
);
