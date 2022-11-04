import React from "react";
import className from "classnames/bind";
import styles from "./QuickLink.module.scss";
import { Link } from "react-router-dom";
import { quickLink } from "../../../fakeData/quickLink";

const cx = className.bind(styles);

const QuickLink = () => {
	return (
		<div className={cx("quicklink")}>
			{quickLink.map((item, index) => (
				<Link to={item.path} key={index}>
					<div className={cx("quicklink__item")}>
						<img src={item.image} alt={item.display} />
						<span>{item.display}</span>
					</div>
				</Link>
			))}
		</div>
	);
};

export default QuickLink;
