import React from "react";

import style from "../../styles/projects.module.scss";
import { FaGithub } from "react-icons/fa";
import { BsFillTvFill } from "react-icons/bs";
import Image from "gatsby-image";

const ProjectCard = (props) => {
	const { description, github, url, title, stack, image } = props;

	return (
		<div className={`card ${style.customCard}`}>
			<div className="card-image">
				<figure className="image">
					<Image fluid={image.childImageSharp.fluid} />
				</figure>
			</div>

			<div className="card-content">
				<p className="title is-4">{title}</p>
				<div className="subtitle is-6">
					<div className="tags mt-4">
						{stack.map((item) => (
							<span className="tag" key={item.id}>
								{item.title}
							</span>
						))}
					</div>
				</div>

				<div className="content">{description}</div>
			</div>
			<footer className="card-footer">
				<a
					target="_blank"
					rel="noreferrer"
					className={`card-footer-item ${style.footerItem} has-text-primary`}
					href={url}
				>
					<span className="mx-2">
						<BsFillTvFill
							size="1.5rem"
							style={{ verticalAlign: "middle" }}
							className="blueIcon"
						/>
					</span>
					<span>Live</span>
				</a>

				<a
					target="_blank"
					rel="noreferrer"
					className={`card-footer-item ${style.footerItem} has-text-primary`}
					href={github}
				>
					<span className="mx-2 mt-1">
						<FaGithub size="1.5rem" className="blueIcon" />
					</span>
					<span>GitHub</span>
				</a>
			</footer>
		</div>
	);
};

export default ProjectCard;
