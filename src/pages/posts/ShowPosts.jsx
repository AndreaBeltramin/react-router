import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowPosts() {
	const postId = useParams().id;
	console.log(postId);

	const apiUrl = import.meta.env.VITE_API_URL;

	const [post, setPost] = useState(null);

	useEffect(() => {
		fetchPost(postId);
	}, []);

	const fetchPost = (id) => {
		const url = `${apiUrl}/posts/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPost(data);
			});
	};
	return (
		<div className="container mt-5">
			<h1>Dettaglio del post</h1>
			<div className="row">
				<div className="col">
					<div className="card">
						<img src={post.img} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{post.title}</h5>
							<p className="card-text">
								{post.content}
								<span className="badge bg-info p-2 ms-2">{post.category}</span>

								{post.tags.map((tag) => (
									<span className="badge bg-info p-2 ms-2">{tag}</span>
								))}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
