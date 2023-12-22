import Chrome from "../assets/images/logo-chrome.svg";
import Firefox from "../assets/images/logo-firefox.svg";
import Opera from "../assets/images/logo-opera.svg";
import Card from "./Card";
export default function ExtensionSection() {
	const data = [
		{
			image: Chrome,
			description: "Chrome logo",
			text: "Chrome",
			version: "62",
		},
		{
			image: Firefox,
			description: "Firefox logo",
			text: "Firefox",
			version: "55",
		},
		{ image: Opera, description: "Opera logo", text: "Opera", version: "46" },
	];

	const cards = data.map((item, index) => <Card key={index} data={item} />);

	return (
		<div className="extension">
			<h2>Download the extension</h2>
			<p className="text">
				We've goto more browsers in the pipeline. Please do let us know if
				you've got a favourite you'd like us to prioritize.
			</p>
			<div className="cardsContainer">{cards}</div>
		</div>
	);
}
