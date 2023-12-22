import { useForm } from "react-hook-form";
import Error from "../assets/images/icon-error.svg";

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<div className="inputContainer">
				<div className={`formDiv ${errors.Email ? "errorInput" : ""}`}>
					<input
						className="input"
						type="email"
						placeholder="Enter your email address"
						{...register("Email", {
							required: "Email is required",
							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						})}
					/>
					{errors.Email && (
						<img className="errorImage" src={Error} alt="Error" />
					)}
				</div>

				{errors.Email && (
					<p className="error">
						{errors.Email.type === "required"
							? "Email is required"
							: "Whoops, make sure it's an email"}
					</p>
				)}
			</div>

			<button className="newsBtn" type="submit">
				Contact Us
			</button>
		</form>
	);
}
