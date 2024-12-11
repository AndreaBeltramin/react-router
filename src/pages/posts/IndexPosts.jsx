import { Link } from "react-router-dom";
import PostCard from "../../components/postCard";
import { useEffect, useState } from "react";

export default function IndexPosts() {
	const apiUrl = import.meta.env.VITE_API_URL;
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetchIndexPosts();
	}, []);

	const fetchIndexPosts = () => {
		fetch(apiUrl + "/posts")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			});
	};
	return (
		<>
			<div className="container mt-5">
				<h1>Posts</h1>
				{posts.length > 0 ? (
					<div className="row row-cols-3 g-3 mt-3 mb-5">
						{posts.map((post) => (
							<div className="col" key={post.id}>
								<div className="card">
									<img src={post.img} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{post.title.toUpperCase()}</h5>
										<div className="card-text">
											{post.content}
											<div>
												<span className="badge bg-info p-2">
													{post.category}
												</span>
											</div>
										</div>
										<Link
											to={`/posts/${post.id}`}
											type="button"
											className="btn btn-primary mt-2"
										>
											Mostra post nel dettaglio
											<i className="fa-solid fa-eye ms-2 text-dark"></i>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<h2>Nessun post da visualizzare</h2>
				)}

				<div className="row row-cols-4 g-3 mb-5">
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</div>
			</div>
		</>
	);
}
