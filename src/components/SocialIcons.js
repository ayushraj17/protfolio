import React from "react";
import styled from "../styles/socialicons.module.scss";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const SocialIcons = () => {
	return (
		<div className={styled.social}>
			<ul>
				<li>
					{/* <a target="_blank" href="https://www.facebook.com/ayushdec"> */}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/ayushraj17"
					>
						{/* <FaFacebookF className={styled.icon} /> */}
						<FaGithub className={styled.icon} />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.twitter.com/me_ayushraj"
					>
						<FaTwitter className={styled.icon} />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/me-ayushraj"
					>
						<FaLinkedinIn className={styled.icon} />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href="mailto:meayushraj17@gmail.com"
					>
						<FaEnvelope className={styled.icon} />
					</a>
				</li>
				{/* <li>
					<a target="_blank" href="https://www.instagram.com/me_ayushraj">
						<FaInstagram className={styled.icon} />
					</a>
				</li> */}
			</ul>
		</div>
	);
};

export default SocialIcons;
