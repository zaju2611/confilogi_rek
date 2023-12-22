import BackgroundElement from "./BackgroundElement";

export default function HeroImage({ children, rotateBackground }) {
	return (
		<div className="heroImage">
			<img className="img" src={children.source} alt={children.description} />
			<BackgroundElement rotated={rotateBackground} />
		</div>
	);
}
