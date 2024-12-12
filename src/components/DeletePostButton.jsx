export default function DeletePostButton(props) {
	return (
		<button
			className="btn btn-danger mt-2 ms-3"
			type="button"
			data-bs-toggle="modal"
			data-bs-target={`#delete-post-modal-${props.id}`}
		>
			Elimina post
		</button>
	);
}
