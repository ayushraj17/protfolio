import React from "react";
import cx from "classnames";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "gatsby";
import Logo from "../../assests/logo.inline.svg";
const Header = () => {
	const [toggleBurger, setToggleBurger] = React.useState(false);
	if (typeof window !== "undefined") {
		// eslint-disable-next-line global-require
		require("smooth-scroll")('a[href*="#"]');
	}

	return (
		<nav
			className="navbar is-fixed-top is-dark"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="navbar-brand">
				<Link to="/">
					<Logo className="logo navbar-item" />
					{/* <div className="logo navbar-item">
						Ayush <span className="raj">Raj</span>
					</div> */}
				</Link>

				<button
					className={cx("navbar-burger", "burger", {
						"is-active": toggleBurger,
					})}
					onClick={() => {
						setToggleBurger((toggleBurger) => !toggleBurger);
					}}
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					{!toggleBurger ? (
						<FaBars
							size="2rem"
							className="blueIcon"
							style={{ verticalAlign: "middle" }}
						/>
					) : (
						<FaTimes
							size="2rem"
							className="blueIcon"
							style={{ verticalAlign: "middle" }}
						/>
					)}
				</button>
			</div>

			<div
				id="navbarBasicExample"
				className={cx("navbar-menu has-background-dark", {
					"is-active": toggleBurger,
				})}
			>
				<div className="navbar-end has-text-centered">
					<Link to="/" className="navbar-item" activeClassName="activeNav">
						Home
					</Link>

					<Link to="/about" className="navbar-item" activeClassName="activeNav">
						About
					</Link>
					<Link to="/blog" className="navbar-item" activeClassName="activeNav">
						Blog
					</Link>

					<Link
						to="/projects"
						className="navbar-item"
						activeClassName="activeNav"
					>
						Projects
					</Link>

					<Link
						to="/contact"
						className="navbar-item"
						activeClassName="activeNav"
					>
						Contact
					</Link>

					{/* <a className="navbar-item">
						<Link to="/blog" activeClassName="activeNav">
							Blog
						</Link>
					</a> */}
				</div>
			</div>
		</nav>
	);
};
export default Header;
