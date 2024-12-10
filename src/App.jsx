// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/aboutUs" element={<AboutUsPage />} />
				<Route path="/products" element={<ProductsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
