import React, { useState, useEffect } from "react";
import className from "classnames/bind";
import styles from "./Pagination.module.scss";
import Button from "~/Components/UI/Button/Button";
import Loading from "../Loading/Loading";

const cx = className.bind(styles);

const Pagination = ({ postPage, setPostPage, data, currentPage, type }) => {
	const [loading, setLoading] = useState(false);

	let pages = [];
	for (let i = 1; i <= Math.ceil(data / postPage); i++) {
		pages.push(i);
	}

	const loadMoreHandler = () => {
		setLoading(true);
		const clearTime = setTimeout(() => {
			setPostPage(postPage + 5);
			setLoading(false);
		}, 2000);
		return () => {
			clearTimeout(clearTime);
		};
	};

	return (
		<div className={cx("pagination")}>
			<div className={cx("pagination__loading")}>
				{loading && <Loading />}
			</div>
			<Button
				primary
				onClick={loadMoreHandler}
				disabled={currentPage === pages[pages.length - 1] || data === 0}
			>
				Xem Thêm
			</Button>
		</div>
	);
};

export default Pagination;
