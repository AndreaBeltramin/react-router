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
				<DeleteModal key={index} id={post.id} />
			))}
		</>
	);
}
