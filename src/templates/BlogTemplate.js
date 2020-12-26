import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout/layout";
import ReactMarkdown from "react-markdown";
import SEO from "../components/seo";
import style from "../styles/blogTemplate.module.scss";

import CodeBlock from "../components/CodeBlock";
import Image from "gatsby-image";

const ComponentName = ({ data }) => {
	const { content, title, desc, image } = data.blog;

	return (
		<Layout>
			<SEO title={title} description={desc} />
			<section className={`section ${style.sectionBlog}`}>
				<Image
					fluid={image.childImageSharp.fluid}
					style={{ marginBottom: "2.5rem", marginTop: "0" }}
				/>
				<div className="container">
					<article>
						<ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
					</article>
					<Link
						to="/blog"
						className="has-text-primary is-size-5 has-text-weight-medium"
					>
						Read more blogs
					</Link>
				</div>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query GetSingleBlog($slug: String) {
		blog: strapiBlogs(slug: { eq: $slug }) {
			content
			title
			desc
			image {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`;

export default ComponentName;
