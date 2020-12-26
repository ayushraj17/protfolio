import React from "react";
import { FaHeart } from "react-icons/fa";
import SocialIcons from "../SocialIcons";

const Footer = () => {
	const [year, setYear] = React.useState("");

	React.useEffect(() => {
		let y = new Date().getFullYear();
		if (parseInt(y) === 2020) {
			setYear("");
		} else {
			setYear(`- ${y}`);
		}
	}, []);

	return (
		<footer className="footer has-background-white">
			<div className="content has-text-centered">
				<p className="has-text-dark-bis is-size-6 has-text-centered">
					Built with <FaHeart className="blueIcon" size="1.2rem" /> by Ayush in
					Gatsby and Bulma
				</p>
				<SocialIcons />
			</div>
			<p className="has-text-centered has-text-dark-bis is-size-7 mt-6">
				{`© ${2020} ${year && "-"} ${year} Ayush Raj.  All rights reserved.`}
			</p>
		</footer>
	);
};

export default Footer;
