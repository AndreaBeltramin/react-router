import PorductCard from "../components/productCard";

export default function ProductsPage() {
	return (
		<>
			<div className="container mt-5">
				<h1>Products</h1>
				<ul>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
				</ul>

				<div className="row row-cols-4 g-3 mb-5">
					<PorductCard />
					<PorductCard />
					<PorductCard />
					<PorductCard />
					<PorductCard />
					<PorductCard />
					<PorductCard />
					<PorductCard />
					<PorductCard />
					<PorductCard />
					<PorductCard />
					<PorductCard />
				</div>
			</div>
		</>
	);
}
