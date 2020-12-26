import React from "react";
import Layout from "../components/Layout/layout";
import nf from "../assests/404.svg";
const Error = () => {
	return (
		<Layout>
			<section className="section">
				<div className="container is-level">
					<h1>Uh oh! looks like you are lost </h1>
					<img src={nf} alt="404" />
				</div>
			</section>
		</Layout>
	);
};

export default Error;
