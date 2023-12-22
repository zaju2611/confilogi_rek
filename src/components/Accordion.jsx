import { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

export default function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = (nextIndex) => {
		if (expandedIndex === nextIndex) {
			setExpandedIndex(-1);
		} else {
			setExpandedIndex(nextIndex);
		}
	};

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;

		const icon = (
			<span className="accordionIcon">
				{isExpanded ? <GoChevronUp className="up" /> : <GoChevronDown />}
			</span>
		);

		return (
			<div className="accordionBox" key={item.id}>
				<div
					className={`accordionItem ${isExpanded ? "expanded" : ""}`}
					onClick={() => {
						handleClick(index);
					}}>
					{item.label}
					{icon}
				</div>
				{isExpanded && <div className="accordionContent">{item.content}</div>}
			</div>
		);
	});

	return <div className="questionsAccordion">{renderedItems}</div>;
}
