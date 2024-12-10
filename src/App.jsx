// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" Component={HomePage} />
					<Route path="/aboutUs" Component={AboutUsPage} />
					<Route path="/products" Component={ProductsPage} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
