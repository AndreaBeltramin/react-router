// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Layout
import DefaultLayout from "./layouts/DefaultLayout";

//import Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route Component={DefaultLayout}>
					<Route path="/" Component={HomePage} />
					<Route path="/aboutUs" Component={AboutUsPage} />
					<Route path="/products" Component={ProductsPage} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
