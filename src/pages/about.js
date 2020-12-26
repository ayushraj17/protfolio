import React from "react";
import About from "../components/About";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Timeline from "../components/Timeline/Timeline";
const about = () => {
	return (
		<Layout>
			<SEO title="About" />
			<About />
			<Timeline />
		</Layout>
	);
};

export default about;
