import PostCard from "../../components/postCard";
import { useEffect, useState } from "react";

export default function IndexPosts() {
	const apiUrl = import.meta.env.VITE_API_URL;

	fetch(apiUrl + "/posts")
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});

	return (
		<>
			<div className="container mt-5">
				<h1>Posts</h1>
				<div className="row row-cols-4 g-3 mt-3 mb-5">
					<div className="col">
						<div className="card">
							<img
								src="http://localhost:3000/images/ciambellone.jpeg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">post.title</h5>
								<p className="card-text">post.content</p>
								<a href="#" className="btn btn-primary">
									Scopri di più
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="row row-cols-4 g-3 mb-5">
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</div>
			</div>
		</>
	);
}
