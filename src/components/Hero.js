import React from "react";

import "../styles/hero.scss";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "gatsby";
const Hero = () => {
	return (
		<section className="hero is-info is-large is-bold" id="home">
			<div className="hero-body">
				<div className="container">
					<h1 className="title is-size-1-tablet py-3-tablet ">Hi, I'm Ayush</h1>

					<h2 className="subtitle is-size-3-tablet">I make awesome websites</h2>
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
			</div>
		</section>
	);
};

export default Hero;
