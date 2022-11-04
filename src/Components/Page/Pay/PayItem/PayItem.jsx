import React from "react";
import classNames from "classnames/bind";
import styles from "./PayItem.module.scss";
import Button from "~/Components/UI/Button/Button";
const cx = classNames.bind(styles);
const PayItem = ({ cartOrder }) => {
	let amount = cartOrder?.amount;
	let priceItem = cartOrder?.priceItem;
	let priceTotal = cartOrder?.priceTotal;
	let username = cartOrder?.username;
	let address = cartOrder?.address;
	let city = cartOrder?.city;
	let district = cartOrder?.district;
	let ward = cartOrder?.ward;
	let phone = +cartOrder?.phone;
	console.log(username);
	return (
		<>
			<li className={cx("payitem")}>
				<div>{username?.toUpperCase()}</div>
				<div className={cx("payitem__title")}>
					{cartOrder?.titleProduct?.map((item, index) => (
						<h4 key={index}>{item}</h4>
					))}
				</div>

				<div className={cx("payitem__amount")}>
					{amount.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>

				<Button small>Hủy Đơn Hàng</Button>
				<div className={cx("payitem__priceitem")}>
					{priceItem.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</div>
				<div className={cx("payitem__pricetotal")}>{priceTotal}</div>
			</li>
			<div>
				<h2>Thông Tin Khách Hàng</h2>
				<div className={cx("payitem__address")}>
					<span>Địa Chỉ Khách Hàng:</span>
					<span>{address}</span>
				</div>
				<div className={cx("payitem__city")}>
					<span>Thành Phố:</span>
					<span>{city}</span>
				</div>
				<div className={cx("payitem__district")}>
					<span>Quận/Huyện:</span>
					<span>{district}</span>
				</div>
				<div className={cx("payitem__ward")}>
					<span>Phường/Xã:</span>
					<span>{ward}</span>
				</div>
				<div className={cx("payitem__phone")}>
					<span>Số Điện Thoại:</span>
					<span>{phone}</span>
				</div>
			</div>
		</>
	);
};

export default PayItem;
