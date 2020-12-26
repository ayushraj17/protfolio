import React from "react";

import ProjectCard from "./ProjectCard";

import { useStaticQuery, graphql } from "gatsby";
const Projects = () => {
	const data = useStaticQuery(graphql`
		{
			allStrapiProjects {
				nodes {
					description
					featured
					github
					id
					stack {
						title
						id
					}
					title
					url
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
		allStrapiProjects: { nodes },
	} = data;

	return (
		<section className="section ">
			<div className={`container`}>
				<h1 className="title has-text-centered mb-6">Projects</h1>

				<div className="columns is-full is-multiline">
					{nodes.map((item) => {
						return (
							<div className="column is-one-third mb-6" key={item.id}>
								<ProjectCard {...item} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
