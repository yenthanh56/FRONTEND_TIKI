import React, { useEffect, useState, useRef } from "react";
import className from "classnames/bind";
import { toast } from "react-toastify";
import styles from "./Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setDataNull } from "~/Components/store/cartSlice";

// import Modal from "~/Components/UI/Modal/Modal";
import { createUserOrder } from "~/Components/store/order/orderSlice";
import CartItem from "./CartItem/CartItem";
import QRMOMO from "./Image/QRMOMO.jpg";
import Button from "~/Components/UI/Button/Button";

import {
	addToCart,
	removeCart,
	decreaseCart,
	selectAllCart,
	getTotals,
} from "~/Components/store/cartSlice";

const cx = className.bind(styles);
const Cart = (props) => {
	const nameBank = useRef("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const username = useSelector((state) => state.auth?.login?.data);
	const cart = useSelector(selectAllCart);
	const total = useSelector((state) => state.cart.data?.cartTotalAmount);

	const paymentBy = [
		{
			id: "1",
			name: "MOMO",
			image: "data:image/png;base64,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",
		},
		{
			id: "2",
			name: "Thanh Toán Ngân Hàng",
			image: "data:image/jpeg;base64,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",
		},
	];

	const bankArray = [
		{
			id: "1",
			name: "Ngân Hàng TPBank",
		},
		{
			id: "2",
			name: "Ngân Hàng ViettinBank",
		},
		{
			id: "3",
			name: "Ngân Hàng Đông Á BANK",
		},
		{
			id: "4",
			name: "Ngân Hàng SaComBank",
		},
	];

	// when click show Modal notice ordered

	// data cart
	// checked payment momo or the bank
	const [checked, setChecked] = useState();
	// get value username,the number bank

	const [usernameBank, setUsernameBank] = useState("");
	const [numberCreditCard, setNumberCreditCart] = useState("");

	const onChangeUsernameBank = (e) => {
		setUsernameBank(e.target.value);
	};

	const onChangeNumberCreditCard = (e) => {
		setNumberCreditCart(e.target.value);
	};

	const addItemHandler = (mainDeal) => {
		toast.success("Bạn đã thêm số lượng sản phẩm");
		dispatch(addToCart({ ...mainDeal }));
	};
	const decreaseItemHandler = (id) => {
		if (id?.cartQuantity === 1) {
			toast.success("Bạn đã xóa sản phẩm");
			dispatch(removeCart(id));
			return;
		}
		toast.info("Bạn đã giảm số lượng sản phẩm");
		dispatch(decreaseCart(id));
	};
	const removeItemHandler = (id) => {
		dispatch(removeCart(id));

		if (window.confirm("Bạn có chắc xóa sản phẩm này!!!")) {
			toast.success("Bạn đã xóa sản phẩm");
		}
	};

	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch, checked]);

	const onChangePaymentBy = (name) => {
		setChecked(name);
		// const valueBank = nameBank.current.valueOf;
	};
	const onChangeBankHandler = (nameBank1) => {
		const value1 = nameBank1.current.value;
		// console.log(value1);
	};

	const onSubmitPayHandler = (e) => {
		e.preventDefault();

		const newData = {
			username: username?.username,
			address: "893/343/232/24/34 Ngô Tất Tố",
			city: "Thành Phố Hồ Chí Minh",
			district: "Q8",
			ward: "P12",
			phone: +"0387771137",

			titleProduct: cart?.map((item) => item?.title),
			amount: cart?.map((item) => item?.cartQuantity),

			priceItem: cart?.map(
				(item) =>
					`${(item?.cartQuantity * item?.price).toFixed(3)} đ` ||
					`${(item?.cartQuantity * item?.currentPrice).toFixed(3)} đ`
			),
			priceTotal: `${total?.toFixed(3)} đ`,
			image: cart?.map((item) => item?.image),
			paymentBy: checked,
		};

		console.log(newData);

		createUserOrder(newData, dispatch, navigate);
		dispatch(setDataNull());
		toast.success("Bạn Đã Đặt Hàng Thành Công!");
	};

	const cartList = cart?.map((mainDeal, index) => (
		<CartItem
			mainDeal={mainDeal}
			key={index}
			addItem={() => addItemHandler(mainDeal)}
			decreaseItem={() => decreaseItemHandler(mainDeal)}
			clearItem={() => removeItemHandler(mainDeal)}
		/>
	));

	return (
		<div className={cx("container")}>
			<div className={cx("cart")}>
				{!!total && <span>{username?.username}</span>}
				<div className={cx("cart__list")}>
					{!!total && (
						<div className={cx("cart__list__title")}>
							<h3>Tên Sản Phẩm</h3>
							<h3>Số Lượng</h3>
							<h3>Thêm Xóa Sản Phẩm</h3>
							<h3>Xóa Sản Phẩm</h3>
							<h3>Tổng</h3>
						</div>
					)}
					{cartList}
				</div>
			</div>
			<div>
				{total === 0 && (
					<div className={cx("cart__empty")}>
						<h1>Giỏ Hàng Không Có Sản Phẩm</h1>
						<img
							src="data:image/png;base64,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"
							alt="emptycart"
							className={cx("cart__imgempty")}
						/>

						<Button large to="/deal-hot">
							Tiếp Tục Mua Hàng
						</Button>
					</div>
				)}
			</div>
			<div className={cx("payment")}>
				{!!total && (
					<>
						<h3>Chọn Phương Thức Thanh Toán</h3>
						<div className={cx("pay__Paymentby")}>
							{paymentBy.map((payment) => (
								<div
									key={payment.id}
									className={cx("pay__child")}
								>
									<label>{payment.name}</label>
									<input
										type="radio"
										checked={checked === payment.name}
										required
										onChange={() =>
											onChangePaymentBy(payment.name)
										}
									/>
									<img src={payment.image} alt="paymentby" />
								</div>
							))}
							<div>
								{checked === "MOMO" && (
									<img src={QRMOMO} alt="QRMOMO" />
								)}
								{checked === "Thanh Toán Ngân Hàng" && (
									<div>
										<div className={cx("pay__choosebank")}>
											<label htmlFor="bank">
												Chọn Ngân Hàng Thanh Toán:
											</label>
											<select
												name="bank"
												id="bank"
												ref={nameBank}
												onChange={() =>
													onChangeBankHandler(
														nameBank
													)
												}
											>
												{bankArray.map((bank) => (
													<option
														value={bank.name}
														key={bank.id}
													>
														{bank.name}
													</option>
												))}
											</select>
										</div>

										{!nameBank ? (
											[]
										) : (
											<div>
												<div
													style={{
														marginTop: "12px",
													}}
													className={cx(
														"pay__username"
													)}
												>
													<label>
														Tên Tài Khoản Ngân hàng
														:
													</label>
													<input
														type="text"
														value={usernameBank}
														onChange={
															onChangeUsernameBank
														}
													/>
												</div>
												<div
													style={{
														marginTop: "12px",
													}}
													className={cx(
														"pay__numberbank"
													)}
												>
													<label>
														Điền Số Tài Khoản Ngân
														Hàng :
													</label>
													<input
														type="text"
														value={numberCreditCard}
														onChange={
															onChangeNumberCreditCard
														}
													/>
												</div>
											</div>
										)}
									</div>
								)}
							</div>

							{/* add infomation */}
						</div>
					</>
				)}
			</div>
			<div className={cx("cart__total")}>
				{!!total && cart && cart?.length > 0 ? (
					<>
						<Button primary onClick={onSubmitPayHandler}>
							Nhấn Để Đặt Hàng
						</Button>
						<div className={cx("cart__total__Link")}>
							Thanh Toán : {`${total.toFixed(3)} đ`}
						</div>
					</>
				) : null}
			</div>
		</div>
	);
};

export default Cart;

/* {cart && orderSelectAll && orderSelectAll?.length > 0 && (
	<>
		<Button primary to="/pay">
			Đi Đến Xác Nhận Đơn Hàng
		</Button>
		<div className={cx("cart__total__Link")}>
			Thanh Toán : {`${total.toFixed(3)} đ`}
		</div>
	</>
)} */
