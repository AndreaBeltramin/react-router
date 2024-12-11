// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Layout
import DefaultLayout from "./layouts/DefaultLayout";

//import Pages
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import IndexPosts from "./pages/posts/IndexPosts";
import ShowPosts from "./pages/posts/ShowPosts";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route Component={DefaultLayout}>
					<Route path="/" Component={HomePage} />
					<Route path="/posts">
						<Route index Component={IndexPosts} />
						<Route path="showPosts" Component={ShowPosts} />
					</Route>
					<Route path="/aboutUs" Component={AboutUsPage} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
