import React from "react";

import ProjectCard from "./ProjectCard";

import { useStaticQuery, graphql, Link } from "gatsby";
const Projects = () => {
	const data = useStaticQuery(graphql`
		{
			allStrapiProjects(
				filter: { featured: { eq: true } }
				sort: { fields: id }
			) {
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

				<div className="columns is-full">
					{nodes.map((item) => {
						return (
							<div className="column " key={item.id}>
								<ProjectCard {...item} />
							</div>
						);
					})}
				</div>
				<p className="has-text-centered has-text-weight-medium is-size-4 mt-4">
					<Link
						to="/projects"
						className="is-primary button is-medium is-mobile-large"
					>
						See More Projects
					</Link>
					{/* <span className="mx-2">
						<IoIosArrowDropdown
							size="2rem"
							style={{ verticalAlign: "middle", marginTop: "-0.2rem" }}
						/>
					</span> */}
				</p>
			</div>
		</section>
	);
};

export default Projects;
