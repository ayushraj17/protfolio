import React from "react";
import BlogCard from "./BlogCard";
import { graphql, useStaticQuery } from "gatsby";
const Blog = () => {
	const data = useStaticQuery(graphql`
		{
			blogs: allStrapiBlogs(sort: { fields: date, order: DESC }) {
				nodes {
					slug
					title
					date(formatString: "Do MMM YYYY")
					desc
					id
					category
					image {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`);
	const {
		blogs: { nodes },
	} = data;

	return (
		<section className="section columns is-10 is-centered">
			<div className="container  columns column is-multiline  is-centered">
				{nodes.map((blog) => (
					<BlogCard {...blog} />
				))}
			</div>
		</section>
	);
};

export default Blog;
