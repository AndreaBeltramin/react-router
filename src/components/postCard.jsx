import ShowDetailsButton from "./ShowDetailsButton";
import DeletePostButton from "./DeletePostButton";

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
					<div className="d-flex justify-content-between">
						<ShowDetailsButton id={props.id} />
						<DeletePostButton id={props.id} />
					</div>
				</div>
			</div>
		</div>
	);
}
