import React from "react";
import className from "classnames/bind";
import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";
import { banner } from "../../../fakeData/banner";

const cx = className.bind(styles);

const Banner = () => {
	return (
		<div className={cx("banner")}>
			{banner.map((item, index) => (
				<Link to={item.path} key={index}>
					<div className={cx("banner__item")}>
						<img src={item.image} alt={item.alt} />
					</div>
				</Link>
			))}
		</div>
	);
};

export default Banner;
