import React from "react";
import className from "classnames/bind";
import styles from "./UserOrdered.module.scss";
import { useSelector } from "react-redux";
import { selectAllUserOrder } from "~/Components/store/order/orderSlice";
const cx = className.bind(styles);

const UserOrdered = () => {
	const cartOrdered = useSelector(selectAllUserOrder);
	console.log(cartOrdered);
	// const cartList =

	return (
		<div className={cx("orderuser")}>
			<h3>Tên Sản Phẩm</h3>
			<h3>Số Lượng</h3>
			<h3>Thêm Xóa Sản Phẩm</h3>
			<h3>Xóa Sản Phẩm</h3>
			<h3>Tổng</h3>
		</div>
	);
};

export default UserOrdered;
