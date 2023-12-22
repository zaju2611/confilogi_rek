import Counter from "./Counter";
import EmailForm from "./EmailForm";
export default function NewsletterSection() {
	return (
		<div className="newsletter">
			<Counter />
			<h2>Stay up-to-date with what we're doing.</h2>
			<EmailForm />
		</div>
	);
}
