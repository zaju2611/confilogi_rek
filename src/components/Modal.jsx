import React from "react";
import Options from "./Options";
import BackgroundSection from "./BackgroundElement";
import Image from "../assets/images/illustration-features-tab-2.svg";
import Close from "../assets/images/icon-close.svg";

const Modal = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal">
				<img
					src={Close}
					alt="Close icon"
					className="modal-close"
					onClick={onClose}
				/>

				<Options flexDirection="flex-row" className="modalOptions" />
				<div className="modalContent">
					<div className="modalImage">
						<img className="imgModal" src={Image} alt="modal illustration" />
						<BackgroundSection className=" modalBackground" rotated={true} />
					</div>
					<div className="modalText">
						<h2>Intelligent search</h2>
						<p className="text">
							Our powerful search feature will help you find saved sites in no
							time at all. No need to trawl through all of your bookmarks.
						</p>
						<button className="modalButton">More info</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
