import React, { useRef, useState } from "react";
import Input from "../../../UI/Input/Input";
import className from "classnames/bind";
import styles from "./ProductForm.module.scss";
const cx = className.bind(styles);

const ProductForm = (props) => {
	const { addCart } = props;
	const amountInputRef = useRef();
	const [isCheckedAmount, setIsCheckedAmount] = useState(true);
	const onSubmitHandler = (e) => {
		e.preventDefault();
		const enterAmount = amountInputRef.current.value;
		let enterAmountNumber = +enterAmount;

		if (
			enterAmount.trim().length === 0 ||
			enterAmountNumber < 1 ||
			enterAmountNumber === 0
		) {
			setIsCheckedAmount(false);
			return;
		} else {
			setIsCheckedAmount(true);
		}

		addCart(enterAmountNumber);
	};

	return (
		<>
			<form className={cx("form-control")} onSubmit={onSubmitHandler}>
				<Input
					label="Amount"
					ref={amountInputRef}
					input={{
						type: "number",
						min: 1,
						max: 100,
						step: 1,
						defaultValue: 1,
					}}
				/>
				<button className={cx("btn__add")}>ADD</button>
				{!isCheckedAmount && <p>Please choose Amount more than (0)</p>}
			</form>
		</>
	);
};

export default ProductForm;
