import Nav from "./components/Nav";
import HeaderSection from "./components/HeaderSection";
import FeaturesSection from "./components/FeaturesSection";
import OneClickSection from "./components/OneClickSection";
import ExtensionSection from "./components/ExtensionSection";
import QuestionsSection from "./components/QuestionsSection";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import NewsletterSection from "./components/NewsletterSection";
import { useState, useEffect } from "react";

export default function App() {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const handleMouseEnter = () => {
		openModal();
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			openModal();
		}, 30000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<>
			<div className="wrapper">
				<Nav />
				<HeaderSection openModal={handleMouseEnter} />
				<FeaturesSection />
				<OneClickSection />
				<ExtensionSection />
				<QuestionsSection />
			</div>
			<NewsletterSection />
			<Footer />

			<Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
		</>
	);
}
