export default function Option({ optionId, active, onClick, children }) {
	return (
		<div className="optionContainer">
			<div
				className={`modalOption option ${active ? "active" : ""}`}
				onClick={() => onClick(optionId)}>
				{children}
			</div>
		</div>
	);
}
