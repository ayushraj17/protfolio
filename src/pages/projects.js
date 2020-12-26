import React from "react";
import Layout from "../components/Layout/layout";
import Projects from "../components/Projects/Projects";
import SEO from "../components/seo";
const projects = () => {
	return (
		<Layout>
			<SEO title="Projects" />
			<Projects />
		</Layout>
	);
};

export default projects;
