import React from "react";
import className from "classnames/bind";
import styles from "./Product.module.scss";
const cx = className.bind(styles);
const Product = () => {
	return <div className={cx("product")}>Product</div>;
};

export default Product;
