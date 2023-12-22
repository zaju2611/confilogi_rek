import Accordion from "./Accordion";

export default function QuestionsSection() {
	const items = [
		{
			id: "1",
			label: "What is Bookmark?",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		{
			id: "2",
			label: "How can I request a new browser?",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		{
			id: "3",
			label: "Is there a mobile app?",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		{
			id: "4",
			label: "What about other Chomium browsers?",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
	];

	return (
		<div className="questions">
			<h2> Frequently Asked Questions</h2>
			<p className="text">
				{" "}
				Here are some of our FAQs. If you have any other questions you'd like
				answered please feel free to email us.{" "}
			</p>
			<Accordion items={items} />
			<button className="questionButton">More Info</button>
		</div>
	);
}
