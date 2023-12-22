import BookmarkManagerSection from "./BookmarkManagerSection";
import HeroImage from "./HeroImage";

import Image from "../assets/images/illustration-hero.svg";

export default function HeaderSection({ openModal }) {
	const image = { source: Image, description: "hero image" };
	return (
		<div className="headerSection" onMouseEnter={openModal}>
			<HeroImage>{image}</HeroImage>
			<BookmarkManagerSection rotateBackground={false} />
		</div>
	);
}
