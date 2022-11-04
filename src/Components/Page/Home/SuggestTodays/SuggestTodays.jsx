import React, { useState, useEffect, useRef } from "react";
import className from "classnames/bind";
import styles from "./SuggestTodays.module.scss";
import { Link } from "react-router-dom";
import { suggestToday } from "../../../fakeData/suggestToday";

import { useDispatch, useSelector } from "react-redux";
import {
	getAllForYou,
	selectAllTodayForYou,
} from "~/Components/store/Today/todayForYouSlice";
import Pagination from "./Pagination/Pagination";
import Loading from "./Loading/Loading";

const cx = className.bind(styles);

const SuggestTodays = () => {
	const dispatch = useDispatch();
	const ref = useRef();
	const dataTodayForYou = useSelector(selectAllTodayForYou);
	// const [data, setData] = useState(dataTodayForYou);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPage, setPostPage] = useState(5);
	const [type, setType] = useState("foryou");
	const [loading, setLoading] = useState(false);
	const scrollToRef = (ref) => {
		window.scrollTo(0, ref.current.offsetTop);
		setLoading(false);
	};
	const executeScroll = (item) => {
		scrollToRef(ref);
		setType(item);
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);

		if (type) {
			getAllForYou(dispatch, type);
		} else {
			return;
		}
		setLoading(false);
	}, [dispatch, type]);
	useEffect(() => {
		setLoading(true);
		const clearTime = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => {
			clearTimeout(clearTime);
		};
	}, [type]);

	const lastPostIndex = currentPage * postPage;
	const firstPostIndex = lastPostIndex - postPage;
	const currentPosts = dataTodayForYou.slice(firstPostIndex, lastPostIndex);
	// console.log(currentPosts);
	// if (loading) {
	// 	return (
	// 		<section style={{ textAlign: "center" }}>
	// 			<Loading />
	// 		</section>
	// 	);
	// }
	return (
		<div className={cx("suggesttodays")} ref={ref}>
			<div className={cx("suggesttodays__sticky")}>
				<p className={cx("suggesttodays__title")}>Gợi Ý Hôm Nay</p>
				{/* tab heading */}
				<div className={cx("suggesttodays__group")}>
					{suggestToday.map((item) => (
						<button
							className={
								type === item.tab
									? cx("suggesttodays__group__item", "active")
									: cx("suggesttodays__group__item")
							}
							key={item.id}
							onClick={() => executeScroll(item.tab)}
						>
							<img src={item.image} alt={item.display} />
							<span>{item.display}</span>
						</button>
					))}
				</div>
			</div>
			{loading ? (
				<div className={cx("content__loading")}>
					<Loading />
				</div>
			) : (
				// {/* content */}
				<>
					<div className={cx("content")}>
						<div className={cx("content__tabs")}>
							{currentPosts?.map((goods) => (
								<Link
									to={`/mytodaydetail/${goods?._id}`}
									key={goods?._id}
								>
									<div>
										<div
											className={cx(
												"content__tabs__wrapper"
											)}
										>
											<div
												className={cx(
													"content__tabs__gird"
												)}
											>
												<div
													className={cx(
														"contentforyou__wrapper"
													)}
												>
													<div
														className={cx(
															"contentforyou__image"
														)}
													>
														<img
															src={goods?.image}
															alt={goods?.title}
															className={cx(
																"contentforyou__thumbnail"
															)}
														/>
														<img
															src={
																goods?.freeShip
															}
															alt={goods?.title}
															className={cx(
																"contentforyou__freeship"
															)}
														/>
													</div>
													<div>
														<p
															className={cx(
																"contentforyou__brand"
															)}
														>
															{goods?.brand}
														</p>
														<p
															className={cx(
																"contentforyou__title"
															)}
														>
															{goods?.title}
														</p>
														<div
															className={cx(
																"contentforyou__sold"
															)}
														>{`${goods?.sold}`}</div>

														<span
															className={cx(
																"contentforyou__cash"
															)}
														>
															{`${goods?.currentPrice?.toFixed(
																3
															)}đ`}
														</span>
														<span
															className={cx(
																"contentforyou__salepercent"
															)}
														>
															{`${goods?.salePercent} %`}
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>

					<div>
						<Pagination
							postPage={postPage}
							currentPage={currentPage}
							setPostPage={setPostPage}
							data={dataTodayForYou.length}
							type={type}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default SuggestTodays;
