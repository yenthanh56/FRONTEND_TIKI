import React from "react";
import className from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
// import Sidebar from "../DefaultLayout/Sidebar/Sidebar";
const cx = className.bind(styles);
const DefaultLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<div className={cx("container")}>
				<div className={cx("main")}>
					{/* <Sidebar /> */}
					<main className={cx("content")}>{children}</main>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
