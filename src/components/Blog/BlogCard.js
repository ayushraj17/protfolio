import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";

const BlogCard = ({ slug, desc, date, title, image, category }) => {
	return (
		<div class="column post is-6">
			<article class="columns is-multiline">
				<div class="column is-12 post-img">
					<Image
						fluid={image.childImageSharp.fluid}
						style={{ height: "15rem" }}
					/>
				</div>
				<div class="column is-12 featured-content ">
					<h3 class="heading post-category">{category}</h3>
					<h1 class="title post-title">{title}</h1>
					<p class="post-excerpt" style={{ height: "5rem" }}>
						{desc}
					</p>
					<br />
					<Link to={`/blog/${slug}`} class="button is-primary">
						Read More
					</Link>
				</div>
			</article>
		</div>
	);
};

export default BlogCard;
