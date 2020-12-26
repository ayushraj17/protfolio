import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import style from "./exp.module.scss";
import { FaAngleDoubleRight } from "react-icons/fa";
const Experience = () => {
	const data = useStaticQuery(
		graphql`
			{
				allStrapiJobs(sort: { fields: id, order: DESC }) {
					nodes {
						company
						date
						id
						position
						strapiId
						desc {
							id
							name
						}
					}
				}
			}
		`
	);

	const {
		allStrapiJobs: { nodes: jobs },
	} = data;
	const [value, setValue] = React.useState(0);
	const { company, position, date, desc } = jobs[value];

	return (
		<section className="section">
			<div className="container">
				<h1 className="title has-text-centered mb-6">Experience</h1>
				{/* <h2 className="subtitle"></h2> */}
				<div className="columns  is-centered">
					<div className="column is-one-quarter   has-text-centered">
						{jobs.map((item, index) => {
							return (
								<button
									key={item.strapiId}
									onClick={() => setValue(index)}
									className={`${style.jobButton} ${
										index === value && style.active
									}`}
								>
									{item.company}
								</button>
							);
						})}
					</div>
					<div className="column ">
						<article className="job-info">
							<h3 className="title is-size-4">{position}</h3>

							<h4 className="subtitle has-text-weight-normal">{company}</h4>
							<p className="is-family-monospace mb-4">{date}</p>

							{desc.map((item) => {
								return (
									<div key={item.id} className={style.jobDesc}>
										<FaAngleDoubleRight className={style.reactIcons} />
										<p className="is-size-6">{item.name}</p>
									</div>
								);
							})}
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
