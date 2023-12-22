import { useState } from "react";
import Option from "./Option";

export default function Options({ flexDirection }) {
	const [activeOption, setActiveOption] = useState(1);

	const handleOptionClick = (optionId) => {
		setActiveOption(optionId);
		console.log(optionId);
	};

	return (
		<div className={`options ${flexDirection}`}>
			<Option
				optionId={1}
				active={activeOption === 1}
				onClick={handleOptionClick}>
				Simple Bookmarking
			</Option>
			<Option
				optionId={2}
				active={activeOption === 2}
				onClick={handleOptionClick}>
				Speedy Searching
			</Option>
			<Option
				optionId={3}
				active={activeOption === 3}
				onClick={handleOptionClick}>
				Easy Sharing
			</Option>
		</div>
	);
}
