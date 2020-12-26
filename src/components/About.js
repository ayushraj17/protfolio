import React from "react";
import SocialIcons from "./SocialIcons";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
const About = () => {
	const data = useStaticQuery(graphql`
		{
			about: allStrapiAbout {
				nodes {
					id
					title
					info
					stack {
						title
						id
					}
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
		about: { nodes },
	} = data;
	const { title, info, stack, image } = nodes[0];
	return (
		<section className="section" id="about">
			<div className="container">
				<div className="columns is-vcentered">
					<div className="column is-half ">
						<h1 className="title ">{title}</h1>
						<h2 className="subtitle">{info}</h2>
						<div className="tags">
							{stack.map((item) => (
								<span
									key={item.id}
									className="tag has-background-light is-size-7"
								>
									{item.title}
								</span>
							))}
						</div>
						<div className="is-pulled-left">
							<SocialIcons />
						</div>
					</div>
					<div className="column is-half is-hidden-mobile">
						<Image fluid={image.childImageSharp.fluid} />
						{/* <img src={publicURL} /> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
