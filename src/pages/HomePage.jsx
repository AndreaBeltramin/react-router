import IndexCard from "../components/IndexCard";

export default function HomePage() {
	return (
		<div className="container mt-5">
			<div>
				<h1 className="text-danger">Il mio blog</h1>
				<h2>Sottotitolo</h2>
			</div>
			<article>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae
					pariatur eaque asperiores nobis sit nesciunt, saepe quam fugiat
					necessitatibus fuga, culpa qui vitae. Aspernatur harum animi obcaecati
					recusandae rerum. Nostrum enim autem, obcaecati quo ut optio similique
					fuga facere illum incidunt voluptatum ea animi voluptatibus maxime
					beatae architecto vero! Eligendi doloribus odit repudiandae autem
					nostrum possimus repellendus, ipsum necessitatibus. Ab quod ex
					possimus facilis, earum asperiores voluptas tenetur, maiores aliquid
					natus inventore vel temporibus quam corrupti! Sequi modi ex dolore
					debitis odit illo numquam quis, sed deleniti? Ad, eius.
				</p>
			</article>
			<div className="row row-cols-4 g-3">
				<IndexCard />
				<IndexCard />
				<IndexCard />
				<IndexCard />
				<IndexCard />
				<IndexCard />
				<IndexCard />
				<IndexCard />
			</div>
			<div>
				<h2 className="mt-3">Altro sottotitolo</h2>
			</div>
			<article>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae
					pariatur eaque asperiores nobis sit nesciunt, saepe quam fugiat
					necessitatibus fuga, culpa qui vitae. Aspernatur harum animi obcaecati
					recusandae rerum. Nostrum enim autem, obcaecati quo ut optio similique
					fuga facere illum incidunt voluptatum ea animi voluptatibus maxime
					beatae architecto vero! Eligendi doloribus odit repudiandae autem
					nostrum possimus repellendus, ipsum necessitatibus. Ab quod ex
					possimus facilis, earum asperiores voluptas tenetur, maiores aliquid
					natus inventore vel temporibus quam corrupti! Sequi modi ex dolore
					debitis odit illo numquam quis, sed deleniti? Ad, eius.
				</p>
			</article>
		</div>
	);
}
