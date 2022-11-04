import React, { useState, useContext } from "react";
import className from "classnames/bind";
import styles from "./HeaderCart.module.scss";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "~/Components/UI/Button/Button";
import { selectAllCart } from "~/Components/store/cartSlice";
const cx = className.bind(styles);
const HeaderCart = () => {
	const carts = useSelector(selectAllCart);
	const totalAmountNumber = carts?.reduce((currentNumber, item) => {
		return currentNumber + item.cartQuantity;
	}, 0);

	const [isShowModal, setIsShowModal] = useState(false);

	const isshowModalHandler = () => {
		setIsShowModal(true);
	};
	const isCloseModalHandler = () => {
		setIsShowModal(false);
	};
	return (
		<>
			<Button className={cx("header__cart")} to="/giohang">
				<FontAwesomeIcon
					icon={faCartShopping}
					className={cx("header__cart__icon")}
				/>
				<span className={cx("header__cart__badge")}>
					{totalAmountNumber}
				</span>
				<span>Giỏ Hàng</span>
			</Button>

			{/* {isShowModal && <Cart isCloseModal={isCloseModalHandler} />} */}
		</>
	);
};

export default HeaderCart;
