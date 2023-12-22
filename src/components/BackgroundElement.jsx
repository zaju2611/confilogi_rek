export default function BackgroundElement({ rotated }) {
	return (
		<div
			className={` modalBackground backgroundElement ${
				rotated ? "rotated" : ""
			}`}></div>
	);
}
