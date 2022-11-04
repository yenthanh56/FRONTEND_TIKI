import React from "react";
import className from "classnames/bind";
import styles from "./Advertisement.module.scss";
import { Link } from "react-router-dom";

import { advertisementMain } from "../../../fakeData/advertisement";

const cx = className.bind(styles);

const Advertisement = () => {
	return (
		<div className={cx("advertisement")}>
			{advertisementMain.map((item, index) => (
				<Link to={item.path} key={index}>
					<div className={cx("advertisement__item")}>
						<img src={item.image} alt={item.alt} />
					</div>
				</Link>
			))}
		</div>
	);
};

export default Advertisement;
