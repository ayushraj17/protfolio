import React from "react";
import Contact from "../components/Contact/Contact";
import Layout from "../components/Layout/layout";
import contactImage from "../assests/contact.svg";
import SocialIcons from "../components/SocialIcons";
import SEO from "../components/seo";
const blog = () => {
	return (
		<Layout>
			<SEO title="Contact" />
			<div className="columns is-centered is-vcentered p-0 m-0">
				<div className="column is-two-fifths is-hidden-mobile">
					<img src={contactImage} alt="contact" className="mb-6 pb-5" />
					<SocialIcons />
				</div>
				<div className="column">
					<Contact />
				</div>
			</div>
		</Layout>
	);
};

export default blog;
