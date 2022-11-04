import React, { Fragment, useState } from "react";
import className from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faMagnifyingGlass,
	faCaretDown,
	faPlus,
	faStore,
} from "@fortawesome/free-solid-svg-icons";
import Stylecategory from "../Stylecategory/Stylecategory";
import { mainNav } from "../fakecategoryHeader/mainNav";
import Login from "~/Components/Page/auth/Login/Login";
import Register from "~/Components/Page/auth/Register/Register";
import Button from "~/Components/UI/Button/Button";
import { logoutUser } from "~/Components/store/authSlice";
import { selectAllUser } from "~/Components/store/authSlice";

import HeaderCart from "~/Components/Layout/Components/HeaderCart/HeaderCart";
const cx = className.bind(styles);

const mainAccounts = [
	{
		path: "/pay",
		display: "Đơn hàng của tôi",
	},
	{
		path: "/quanlidoitra",
		display: "Quản lý đổi trả",
	},
	{
		path: "/thongbao",
		display: "Thông báo của tôi",
		notice: 0,
	},
	{
		path: "/taikhoancuatoi",
		display: "Tài khoản của tôi",
	},
	{
		path: "/nhanxetcuatoi",
		display: "Nhận xét sản phẩm của tôi",
	},
	{
		path: "/chinhsachdoitra",
		display: "Chính sách đổi trả",
	},
];

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const username = useSelector(selectAllUser);

	const accessToken = username?.accessToken;
	const [isShowModal, setIsShowModal] = useState(false);

	const isshowModalHandler = () => {
		setIsShowModal(true);
		navigate("/users/login");
	};
	const isCloseModalHandler = () => {
		setIsShowModal(false);
	};

	const logoutHandler = () => {
		setIsShowModal(false);
		logoutUser(dispatch, navigate, accessToken);
	};

	return (
		<Fragment>
			<header className={cx("header")}>
				<div className={cx("container")}>
					<div className={cx("header__menu")}>
						<div className={cx("header__logo")}>
							<Link to="/">
								<img
									src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
									alt="tiki"
								/>
							</Link>
						</div>
						<div className={cx("header__mid")}>
							<div className={cx("header__mid__search")}>
								<input
									type="text"
									placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
								/>
								<button>
									<i>
										{" "}
										<FontAwesomeIcon
											icon={faMagnifyingGlass}
										/>
									</i>
									<span>Tìm kiếm</span>
								</button>
							</div>
						</div>
						<div className={cx("header__rigth")}>
							{/* account  */}

							{username && username?.username ? (
								<Tippy
									interactive
									placement="bottom-start"
									delay={200}
									render={(attrs) => (
										<div
											className={cx("box")}
											tabIndex="-1"
											{...attrs}
										>
											<p>Tài khoản</p>
											{mainAccounts.map((item, index) => (
												<Link
													to={item.path}
													key={index}
												>
													<div
														className={cx(
															"box__item"
														)}
													>
														{item.display}
														{item.notice === 0 ? (
															<span
																className={cx(
																	"box__item__notice"
																)}
															>
																{item.notice}
															</span>
														) : (
															""
														)}
													</div>
												</Link>
											))}

											<Button
												text
												onClick={logoutHandler}
											>
												Logout
											</Button>
										</div>
									)}
								>
									<div className={cx("header__account")}>
										<div
											className={cx(
												"header__account__icon"
											)}
										>
											{/* icon */}
											<span
												className={cx(
													"header__account__user__avatar"
												)}
											>
												<img
													src={username?.avatar}
													alt={username?.username}
												/>
											</span>
										</div>
										<div
											className={cx(
												"header__account__user"
											)}
										>
											<div
												className={cx(
													"header__account__user__register"
												)}
											>
												Tài khoản
											</div>
											<div
												className={cx(
													"header__account__user__item"
												)}
											>
												<span>
													{username?.username}
												</span>
												<span>
													<i>
														<FontAwesomeIcon
															icon={faCaretDown}
														/>
													</i>
												</span>
											</div>
										</div>
									</div>
								</Tippy>
							) : (
								<div
									className={cx("header__account")}
									onClick={isshowModalHandler}
								>
									<div
										className={cx("header__account__icon")}
									>
										{/* icon */}
										<FontAwesomeIcon icon={faUser} />
									</div>
									<div
										className={cx("header__account__user")}
									>
										<div
											className={cx(
												"header__account__user__login"
											)}
										>
											Đăng nhập / Đăng ký
										</div>
										<div
											className={cx(
												"header__account__user__register"
											)}
										>
											Tài khoản
											{/* <span>ten ...</span> */}
											<i>
												<FontAwesomeIcon
													icon={faCaretDown}
												/>
											</i>
										</div>
									</div>
								</div>
							)}

							<HeaderCart />
						</div>
					</div>

					<div className={cx("header__bottom")}>
						<div className={cx("header__bottom__title")}>
							FREESHIP
							<span>
								<FontAwesomeIcon icon={faPlus} />
							</span>
						</div>
						<div className={cx("header__bottom__mid")}>
							<nav>
								<ul className={cx("header__mid__list")}>
									{mainNav.map((nav, index) => (
										<Link
											to={nav.path}
											key={index}
											className={cx(
												"header__mid__list__item"
											)}
										>
											<li>
												<span>{nav.display}</span>
											</li>
										</Link>
									))}
								</ul>
							</nav>
						</div>
						<div className={cx("header__bottom__mybuy")}>
							<Link to="/banhang">
								<span
									className={cx(
										"header__bottom__mybuy__icon"
									)}
								>
									<FontAwesomeIcon icon={faStore} />
								</span>
								Bán hàng cùng Tiki
							</Link>
						</div>
					</div>
				</div>
			</header>
			<div className={cx("header__category")}>
				<Stylecategory />
			</div>
			{isShowModal && <Login isCloseModal={isCloseModalHandler} />}
		</Fragment>
	);
};

export default Header;
