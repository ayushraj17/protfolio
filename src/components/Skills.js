import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { GrGatsbyjs, GrReactjs } from "react-icons/gr";
import { SiCss3, SiNodeDotJs, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
const Skill = ({ src, percentage, width, radius, r, g, b }) => {
	return (
		<div className="column">
			<CircularProgressbarWithChildren
				value={percentage}
				styles={{
					path: {
						// Path color
						stroke: `rgba(${r}, ${g}, ${b},0.7)`,
						// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
						strokeLinecap: "butt",
						// Customize transition animation
						transition: "stroke-dashoffset 0.5s ease 0s",
						// Rotate the path
						transform: "rotate(0.25turn)",
						transformOrigin: "center center",
					},
					trail: {
						// Trail color
						stroke: "#d6d6d6",
						// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
						strokeLinecap: "butt",
						// Rotate the trail
						transform: "rotate(0.25turn)",
						transformOrigin: "center center",
					},
				}}
			>
				{src}
			</CircularProgressbarWithChildren>
		</div>
	);
};

const Skills = () => {
	return (
		<section className="section has-background-light">
			<div className="container">
				<h1 className="title has-text-centered mb-6">Skills</h1>

				<div className="columns is-mobile">
					<Skill
						src={
							<GrGatsbyjs
								color="rgb(102,48,154)"
								style={{ width: "86%", height: "86%" }}
							/>
						}
						percentage="60"
						alt="gatsby"
						r="102"
						g="48"
						b="154"
					/>
					<Skill
						src={
							<GrReactjs
								color="rgb(99,219,251)"
								style={{ width: "60%", height: "60%" }}
							/>
						}
						alt="react"
						percentage="90"
						width="90%"
						r="99"
						g="219"
						b="251"
					/>
					<Skill
						src={
							<SiCss3
								color="rgb(22,125,190)"
								style={{ width: "60%", height: "60%", marginTop: "8px" }}
							/>
						}
						alt="css"
						percentage="70"
						width="70%"
						r="22"
						g="125"
						b="190"
					/>
					<Skill
						src={
							<IoLogoJavascript
								color="rgb(240,220,78)"
								style={{ width: "60%", height: "60%" }}
							/>
						}
						alt="javascript"
						width="85%"
						radius="50%"
						percentage="80"
						r="240"
						g="220"
						b="78"
					/>
					<Skill
						src={
							<SiRedux
								color="rgb(119,73,189)"
								style={{ width: "60%", height: "60%" }}
							/>
						}
						alt="redux"
						percentage="90"
						width="67%"
						radius="33%"
						r="119"
						g="73"
						b="189"
					/>

					<Skill
						src={
							<SiNodeDotJs
								color="rgb(60,135,58)"
								style={{ width: "60%", height: "60%" }}
							/>
						}
						percentage="40"
						width="75%"
						r="60"
						g="135"
						b="58"
					/>
				</div>
			</div>
		</section>
	);
};

export default Skills;
