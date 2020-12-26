import React from "react";
import style from "./Timeline.module.scss";

const ListOfTimeline = ({ data }) => {
	const renderData = () => {
		return data.reverse().map((item) => {
			return (
				<div className={style.list} key={item.id}>
					<h3 className={`title is-size-4 has-text-primary`}>{item.date}</h3>
					<p className="subtitle is-bold has-text-dark-bis py-2">
						{item.description}
					</p>
				</div>
			);
		});
	};

	return <h3 className="title">{renderData()}</h3>;
};

export default ListOfTimeline;
