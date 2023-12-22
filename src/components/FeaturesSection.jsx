import Options from "./Options";

export default function FeaturesSection() {
	return (
		<div className="feature">
			<h2>Features</h2>
			<p className="text">
				{" "}
				Our aim is to make it quick and easy for you to access your favourite
				websites. Your bookmarks sync between your devices so you can access
				them on the go.
			</p>
			<Options flexDirection="flex-column" />
		</div>
	);
}
