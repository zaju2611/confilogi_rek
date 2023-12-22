import dots from "../assets/images/bg-dots.svg";
export default function Cart({ data }) {
	return (
		<div className="card">
			<img className="cardImage" src={data.image} alt={data.description} />
			<h3 className="cardTitle">Add to {data.text}</h3>
			<p className=" cardText">Minimum version {data.version}</p>
			<img className="dots" src={dots} alt="dots" />
			<button className="cardButton">Add & Install Extension</button>
		</div>
	);
}
