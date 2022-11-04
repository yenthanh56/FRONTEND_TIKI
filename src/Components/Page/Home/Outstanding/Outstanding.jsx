import React from "react";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Outstanding.module.scss";
import { productCategory } from "../../../fakeData/productCategory";
const cx = className.bind(styles);

const Outstanding = () => {
	return (
		<div className={cx("outstanding")}>
			<p className={cx("outstanding__title")}>Danh Mục Nổi Bật</p>
			<div className={cx("outstanding__group")}>
				{productCategory.map((item, index) => (
					<div key={index}>
						<Link
							to={item.path}
							className={cx("outstanding__group__item")}
						>
							<img src={item.image} alt={item.display} />
							<span>{item.display}</span>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Outstanding;
