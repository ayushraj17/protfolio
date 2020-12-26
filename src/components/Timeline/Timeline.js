import React from "react";
import style from "./Timeline.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import ListOfTimeline from "./ListOfTimeline";
const Timeline = () => {
	const data = useStaticQuery(graphql`
		{
			allStrapiTimelines(sort: { order: DESC, fields: id }) {
				nodes {
					perYear {
						id
						year
						listOfTimeline {
							date
							description
							id
						}
					}
				}
			}
		}
	`);
	const {
		allStrapiTimelines: { nodes },
	} = data;

	const renderTimelinesByYear = () => {
		return nodes.reverse().map((timeline) => {
			return (
				<div key={timeline.perYear.id}>
					<h2 className="title has-text-primary has-text-centered is-size-1">
						{timeline.perYear.year}
					</h2>
					<ListOfTimeline data={timeline.perYear.listOfTimeline} />
				</div>
			);
		});
	};
	return (
		<section className={`section ${style.container}`}>
			<div className="container m-auto">{renderTimelinesByYear()}</div>
		</section>
	);
};
export default Timeline;
