import React, { useState, useRef, useEffect } from "react";
import className from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styles from "./Login.module.scss";
import Modal from "~/Components/UI/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
	loginUser,
	getAllUser,
	selectAllUser,
} from "~/Components/store/authSlice";
import { getAllUserOrder } from "~/Components/store/order/orderSlice";
import Button from "~/Components/UI/Button/Button";

const cx = className.bind(styles);

const Login = (props) => {
	const { isCloseModal } = props;
	const usernameRef = useRef();
	const passwordRef = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const nameOnchangeHandler = (e) => {
		setUsername(e.target.value);
	};
	const passwordOnchangeHandler = (e) => {
		setPassword(e.target.value);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const newData = {
			username,
			password,
		};

		if (!username) {
			toast.error("Bạn Chưa Nhập Tên Đăng Nhập");
			usernameRef.current.focus();
			return;
		}
		if (!password) {
			toast.error("Bạn Chưa Nhập Mật Khẩu");
			passwordRef.current.focus();
			return;
		}

		if (username && password) {
			loginUser(newData, dispatch, navigate);
		}
	};

	return (
		<Modal isCloseModal={isCloseModal}>
			<form className={cx("form")} onSubmit={onSubmitHandler}>
				<div className={cx("form__control")}>
					<label htmlFor="username">Tài khoản</label>
					<input
						type="text"
						value={username}
						onChange={nameOnchangeHandler}
						ref={usernameRef}
					/>
				</div>
				<div className={cx("form__control")}>
					<label htmlFor="password">Mật Khẩu</label>
					<input
						type="password"
						value={password}
						onChange={passwordOnchangeHandler}
						ref={passwordRef}
					/>
				</div>
				<button>Đăng nhập</button>
			</form>
			<div className={cx("form__register")}>
				<span>
					Bạn chưa có tài khoản thì đăng ký tại đây!
					<Link to="/users/register">
						<span className={cx("form__register__title")}>
							Đăng ký tài khoản
						</span>
					</Link>
				</span>
			</div>
			<Button className={cx("form__close")} to="/" onClick={isCloseModal}>
				<FontAwesomeIcon icon={faXmark} />
			</Button>
		</Modal>
	);
};

export default Login;
