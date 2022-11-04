import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "~/Components/UI/Modal/Modal";
import Button from "~/Components/UI/Button/Button";
import Valid from "~/Components/utils/Valid";
const cx = classNames.bind(styles);

const Register = (props) => {
	const { isCloseModal } = props;
	const usernameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const cf_passwordRef = useRef();
	const initialState = {
		username: "",
		email: "",
		password: "",
		cf_password: "",
	};
	const [userData, setUserData] = useState(initialState);
	const { username, email, password, cf_password } = userData;

	const onChangeInputHandler = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log({
			username: username,
			email: email,
			password: password,
			cf_password: cf_password,
		});
		const errorMessage = Valid(username, email, password, cf_password);
		console.log(errorMessage);
		if (!username) {
			usernameRef.current.focus();
			return;
		}
		if (!email) {
			emailRef.current.focus();
			return;
		}
		if (!password) {
			passwordRef.current.focus();
			return;
		}
		if (!cf_password) {
			cf_passwordRef.current.focus();
			return;
		}
	};

	return (
		<Modal>
			<form className={cx("form")} onSubmit={onSubmitHandler}>
				<div className={cx("form__control")}>
					<label htmlFor="username">Tài khoản</label>
					<input
						type="text"
						value={username}
						name="username"
						onChange={onChangeInputHandler}
						ref={usernameRef}
					/>
				</div>
				<div className={cx("form__control")}>
					<label htmlFor="password">Email</label>
					<input
						type="text"
						value={email}
						name="email"
						onChange={onChangeInputHandler}
						ref={emailRef}
					/>
				</div>
				<div className={cx("form__control")}>
					<label htmlFor="password">Mật Khẩu</label>
					<input
						type="password"
						value={password}
						name="password"
						onChange={onChangeInputHandler}
						ref={passwordRef}
					/>
				</div>
				<div className={cx("form__control")}>
					<label htmlFor="password">Xác Nhận Lại Mật Khẩu</label>
					<input
						type="password"
						value={cf_password}
						name="cf_password"
						onChange={onChangeInputHandler}
						ref={cf_passwordRef}
					/>
				</div>
				<button>Đăng nhập</button>
			</form>
			<div className={cx("form__login")}>
				<span>
					Nếu bạn đã có tài khoản thì hãy đăng nhập tại đây !
					<Link to="/users/login">
						<span className={cx("form__login__title")}>
							Đăng nhập tài khoản
						</span>
					</Link>
				</span>
			</div>
			<Button className={cx("form__close")} onClick={isCloseModal} to="/">
				<FontAwesomeIcon icon={faXmark} />
			</Button>
		</Modal>
	);
};

export default Register;
