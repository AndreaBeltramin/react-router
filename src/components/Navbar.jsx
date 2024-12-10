import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<NavLink to="/">HomePage</NavLink>
			<Link to="/products">Products</Link>
			<Link to="aboutUs">About Us</Link>
		</div>
	);
}
