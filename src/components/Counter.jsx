import { useSpring, animated } from "react-spring";

export default function Counter() {
	const { countdown } = useSpring({
		from: { countdown: 35000 },
		to: async (next) => {
			await next({ countdown: 0 });
		},
		config: { duration: 20000 },
	});

	const formattedCountdown = countdown.interpolate((val) => {
		const roundedValue = Math.round(val);
		const formattedValue =
			roundedValue >= 1000
				? `${(roundedValue / 1000).toLocaleString()}`
				: `${roundedValue}`;
		return formattedValue;
	});

	return (
		<div className="counter">
			<animated.div>{formattedCountdown}</animated.div>+ ALREADY JOINED
		</div>
	);
}
