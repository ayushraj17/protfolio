// import React from "react";

// import "../styles/hero.scss";
// import { FaBriefcase } from "react-icons/fa";
// import { Link } from "gatsby";
// const Hero = () => {
// 	return (
// 		<section className="hero is-light is-large is-bold" id="home">
// 			<div className="hero-body">
// 				<div className="container">
// 					<h1 className="title is-size-1-tablet py-3-tablet ">Hi, I'm Ayush</h1>
// 					<h2 className="subtitle is-size-3-tablet">I make awesome websites</h2>
// 					<div className="field is-grouped">
// 						<p className="control">
// 							<Link to="/contact">
// 								<button className="button is-primary">
// 									<span className="icon">
// 										<FaBriefcase />
// 									</span>
// 									<span>Hire me!</span>
// 								</button>
// 							</Link>
// 						</p>
// 						<p className="control">
// 							<Link to="/about" className="is-primary button is-outlined">
// 								Get to know
// 							</Link>
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Hero;

import { Link } from "gatsby";
import ParticlesBg from "particles-bg";

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import Dev from "../assests/dev.inline.svg";
const Hero = () => {
	return (
		<section className="section" id="about">
			<div className="container">
				<div className="columns is-vcentered">
					<div className="column is-half ">
						<h1 className="title is-size-1-tablet py-3-tablet ">
							Hi, I'm Ayush
						</h1>
						<h2 className="subtitle is-size-3-tablet">
							I make awesome websites and apps
						</h2>
						<div className="field is-grouped">
							<p className="control">
								<Link to="/contact">
									<button className="button is-primary">
										<span className="icon">
											<FaBriefcase />
										</span>
										<span>Hire me!</span>
									</button>
								</Link>
							</p>
							<p className="control">
								<Link to="/about" className="is-primary button is-outlined">
									Get to know
								</Link>
							</p>
						</div>
					</div>
					<div className="column is-half is-hidden-mobile">
						<Dev />
					</div>
				</div>
			</div>
			<ParticlesBg type="polygon" bg={true} num={2} />
		</section>
	);
};

export default Hero;
