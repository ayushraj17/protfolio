import React from "react";
import Blog from "../components/Blog/Blog";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
const blog = () => {
	return (
		<Layout>
			<SEO title="Blog" />
			<Blog />
		</Layout>
	);
};

export default blog;
