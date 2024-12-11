import PostCard from "../../components/postCard";

export default function IndexPosts() {
	return (
		<>
			<div className="container mt-5">
				<h1>Posts</h1>
				<ul>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
				</ul>

				<div className="row row-cols-4 g-3 mb-5">
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</div>
			</div>
		</>
	);
}
