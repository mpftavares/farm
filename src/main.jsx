import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import Campaigns from './components/Campaigns.jsx';
import Contacts from './components/Contacts.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';
import Services from './components/Services.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
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
						path="/campaigns"
						element={<Campaigns />}></Route>
					<Route
						path="/location"
						element={<Location />}></Route>
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
