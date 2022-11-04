import React from "react";
import className from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = className.bind(styles);
const Sidebar = () => {
	return <div className={cx("sidebar")}>Sidebar</div>;
};

export default Sidebar;
