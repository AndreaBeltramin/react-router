import { Link } from "react-router-dom";

export default function ShowDetailsButton(props) {
	return (
		<Link
			to={`/posts/${props.id}`}
			type="button"
			className="btn btn-primary mt-2"
		>
			Mostra post nel dettaglio
			<i className="fa-solid fa-eye ms-2 text-dark"></i>
		</Link>
	);
}
