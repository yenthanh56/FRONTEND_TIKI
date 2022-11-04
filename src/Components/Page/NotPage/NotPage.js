import React from "react";
import className from "classnames/bind";
import styles from "./NotPage.module.scss";

import Button from "~/Components/UI/Button/Button";

const cx = className.bind(styles);

const NotPage = () => {
	return (
		<div className={cx("page__not")}>
			{/* <p style={{ marginBottom: "8px" }}>Trang Không Tồn Tại</p> */}
			<img
				src="https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png"
				alt="payempty"
			/>
			<Button
				large
				to="/users/login"
				className={cx("page__not__Actions")}
			>
				Tiếp tục mua hàng
			</Button>
		</div>
	);
};

export default NotPage;
