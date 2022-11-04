import React from "react";
import className from "classnames/bind";
import styles from "./Loading.module.scss";

const cx = className.bind(styles);

const Loading = () => {
	return <div className={cx("spinner-3")}>Loading</div>;
};

export default Loading;
