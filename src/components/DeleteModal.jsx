import { useState, useEffect } from "react";

export default function DeleteModal(props) {
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
		<div
			className="modal fade"
			id={`delete-post-modal-${props.id}`}
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
						L'operazione sarà irreversibile, sei sicuro di voler eliminare il
						post seguente?
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
							onClick={() => handleDeletePostButton(props.id)}
						>
							Elimina
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
