import HeroImage from "./HeroImage";
import Image from "../assets/images/illustration-features-tab-1.svg";

export default function OneClickSection() {
	const image = { source: Image, description: "hero image" };

	return (
		<div className="bookmarkSection">
			<HeroImage className="bookmarkSectionImage" rotateBackground={true}>
				{image}
			</HeroImage>
			<div className="bookmarkSectionText">
				<h2>Bookmark in one click</h2>
				<p className="text">
					Organize your bookmarks however you like. Our simple drag-and-drop
					interface gives you complete control over how you manage your
					favourite sites.
				</p>
				<button>More Info</button>
			</div>
		</div>
	);
}
