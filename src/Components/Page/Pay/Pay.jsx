import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Pay.module.scss";
import { useSelector } from "react-redux";
import Button from "~/Components/UI/Button/Button";
import { setDataNull } from "~/Components/store/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "~/Components/store/authSlice";
import { selectAllCart } from "~/Components/store/cartSlice";
import NotPage from "~/Components/Page/NotPage/NotPage";
import {
	selectAllUserOrder,
	getAllUserOrder,
	showAllOrdered,
} from "~/Components/store/order/orderSlice";
import UserOrderedItem from "../Cart/UserOrdered/UserOrderedItem";
import PayItem from "./PayItem/PayItem";
const cx = classNames.bind(styles);
const Pay = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.login?.data);
	const cart = useSelector(selectAllCart);
	console.log(cart);
	const usersOrdered = useSelector(showAllOrdered);

	const userOrdered = usersOrdered?.map((cartOrder) => (
		<PayItem cartOrder={cartOrder} key={cartOrder?._id} />
	));

	const confirmOrderHandler = () => {
		dispatch(setDataNull());
		navigate("/");
	};

	useEffect(() => {
		if (user?.username) {
			getAllUserOrder(dispatch);
		}
	}, [dispatch, cart]);

	return (
		<>
			{usersOrdered?.length < 0 || !user?.username ? (
				<NotPage />
			) : (
				<form className={cx("container")}>
					<div className={cx("pay")}>
						<h2 className={cx("pay__title")}>
							Thông Tin Đơn Hàng Đã Đặt
						</h2>
						<div className={cx("pay__detail")}>
							<h3>Họ Tên</h3>
							<h3>Tên Sản Phẩm</h3>
							<h3>Số Lượng</h3>
							<h3>Xóa Sản Phẩm</h3>
							<h3>Giá Từng Sản Phẩm</h3>
							<h3>Thành Tiền</h3>
						</div>

						{/* <div className={cx("pay__name")}>
								<span>Tổng : {`${total?.toFixed(3)}`}</span>
							</div> */}
						<ul>{userOrdered}</ul>

						<div className={cx("pay__actions")}>
							<Button
								primary
								onClick={confirmOrderHandler}
								to="/"
							>
								Tiếp Tục Mua Hàng
							</Button>
						</div>
					</div>
				</form>
			)}
		</>
	);
};

export default Pay;
