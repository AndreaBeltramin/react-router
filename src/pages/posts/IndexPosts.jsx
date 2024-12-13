import PostCard from "../../components/PostCard";
import DeleteModal from "../../components/DeleteModal";

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

	const fetchDeletePost = (id) => {
		const deleteUrl = `${apiUrl}/posts/${id}`;
		fetch(deleteUrl, { method: "DELETE" })
			.then((res) => res)
			.then(() => {
				fetchIndexPosts();
			});
	};

	const handleDeletePostButton = (id) => {
		fetchDeletePost(id);
	};

	return (
		<>
			<div className="container mt-5">
				<h1>Posts</h1>
				{posts.length > 0 ? (
					<div className="row row-cols-3 g-3 mt-3 mb-5">
						{posts.map((post, index) => (
							<PostCard
								key={index}
								id={post.id}
								title={post.title}
								img={post.img}
								category={post.category}
							/>
						))}
					</div>
				) : (
					<h2>Nessun post da visualizzare</h2>
				)}
			</div>

			{posts.map((post, index) => (
				<div
					key={index}
					className="modal fade"
					id={`delete-post-modal-${post.id}`}
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">
									ELIMINAZIONE POST!
								</h1>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								L'operazione sarà irreversibile, sei sicuro di voler eliminare
								il post seguente?
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Annulla
								</button>
								<button
									type="button"
									className="btn btn-danger"
									data-bs-dismiss="modal"
									onClick={() => handleDeletePostButton(post.id)}
								>
									Elimina
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
