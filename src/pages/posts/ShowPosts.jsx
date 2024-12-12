import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ShowPosts() {
	const postId = useParams().id;
	console.log(postId);

	const goToPage = useNavigate();
	const apiUrl = import.meta.env.VITE_API_URL;

	const [post, setPost] = useState(null);

	useEffect(() => {
		fetchPost(postId);
	}, []);

	const fetchPost = (id) => {
		const url = `${apiUrl}/posts/${id}`;
		console.log(url);

		fetch(url)
			.then((res) => {
				if (!res.ok) {
					if (res.status === 404) {
						goToPage(-1);
					}
					throw new Error("Qualcosa è andato storto, riprova!");
				}
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setPost(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="container mt-5">
			<h1>Dettaglio del post</h1>
			<div className="row row-cols-2">
				<div className="col">
					{post && (
						<div className="card">
							<img src={post.img} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">
									{post.title.toUpperCase()}
									<span className="badge bg-warning p-2 ms-2">
										{post.category}
									</span>
								</h5>
								<article className="card-text">
									<strong>Descrizione:</strong> {post.content}
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Esse incidunt blanditiis praesentium iure quis voluptas
										corrupti iste ut. Perspiciatis itaque laboriosam quae vitae
										dolore fugiat mollitia ea, facilis autem fuga.
									</p>
								</article>
								<p>
									{post.tags.map((tag, index) => (
										<span key={index} className="badge bg-info p-2 me-2">
											{tag}
										</span>
									))}
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
