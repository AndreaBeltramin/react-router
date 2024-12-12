import { Link } from "react-router-dom";
export default function PostCard(props) {
	return (
		<div className="col" key={props.id}>
			<div className="card">
				<img src={props.img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title.toUpperCase()}</h5>
					<div className="card-text">
						{props.content}
						<div>
							<span className="badge bg-info p-2">{props.category}</span>
						</div>
					</div>
					<Link
						to={`/posts/${props.id}`}
						type="button"
						className="btn btn-primary mt-2"
					>
						Mostra post nel dettaglio
						<i className="fa-solid fa-eye ms-2 text-dark"></i>
					</Link>
				</div>
			</div>
		</div>
	);
}
