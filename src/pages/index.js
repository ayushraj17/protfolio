import React from "react";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/Projects/FeaturedProjects";
import Skills from "../components/Skills";

import Experience from "../components/Experience/Experience";
const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
		<Experience />

		<Skills />
		<FeaturedProjects />
	</Layout>
);

export default IndexPage;
