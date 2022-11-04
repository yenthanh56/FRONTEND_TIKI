import React, { useState, useEffect } from "react";
import className from "classnames/bind";
import styles from "./Deal.module.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import { mainDealCoin, mainDeal } from "../../../fakeData/mainDeal";
import { getAllDealHot } from "~/Components/store/DealHot/DealHotSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectAllDealHot } from "~/Components/store/DealHot/DealHotSlice";
const cx = className.bind(styles);

const Deal = () => {
	SwiperCore.use([Autoplay]);
	const dispatch = useDispatch();
	// const [day, setDay] = useState();
	const [hour, setHour] = useState();
	const [minus, setMinus] = useState();
	const [seconds, setSeconds] = useState();
	const dataDealHot = useSelector(selectAllDealHot);
	let interval;

	const startTimer = () => {
		const countDownDate =
			Date.now() + 60 * 1000 + 3600 * 1000 + 3540 * 1000;
		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countDownDate - now;

			// const days = Math.floor(distance / (24 * 60 * 60 * 1000));
			const hours = Math.floor(
				(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(distance % (60 * 60 * 1000)) / (1000 * 60)
			);
			const seconds = Math.floor((distance % (60 * 1000)) / 1000);

			if (distance < 0) {
				//

				clearInterval(interval);
			} else {
				// setDay(days);
				setHour(hours);
				setMinus(minutes);
				setSeconds(seconds);
			}
		});
	};

	useEffect(() => {
		startTimer();
		getAllDealHot(dispatch);
	}, [dispatch]);

	return (
		<div className={cx("deal")}>
			<div className={cx("deal__day")}>
				<div className={cx("deal__day__header")}>
					<div className={cx("deal__day__left")}>
						<img
							src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"
							alt="flash deal"
						/>

						<img
							width="21"
							src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
							alt="flash deal"
							className={cx("icon__deal")}
						/>

						<img
							src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"
							alt="flash deal"
						/>
						<div className={cx("deal__day__left__countdown")}>
							{/* <span className={cx("day")}>{day}</span> : */}
							<span className={cx("hour")}>
								{hour < 10 ? `0${hour}` : hour}
							</span>{" "}
							:
							<span className={cx("minus")}>
								{minus < 10 ? `0${minus}` : minus}
							</span>{" "}
							:
							<span className={cx("second")}>
								{seconds < 10 ? `0${seconds}` : seconds}
							</span>
						</div>
					</div>
					<div className={cx("deal__day__rigth")}>
						<Link to="deal/day">Xem thêm</Link>
					</div>
				</div>

				<Link to="/deal-hot" className={cx("deal__hot")}>
					<div className={cx("deal__day__percent")}>
						<Swiper
							grabCursor={true}
							// autoplay={{ delay: 2000 }}
							modules={[Autoplay]}
							slidesPerView={5}
							className={cx("deal__day__percent__slider")}
						>
							{dataDealHot?.map((item) => (
								<SwiperSlide key={item?._id}>
									<div
										className={cx(
											"deal__day__percent__image"
										)}
									>
										<img
											src={item?.image}
											alt="image_sale"
											width="124px"
											height="124px"
										/>
										<div
											className={cx(
												"deal__day__percent__discount"
											)}
										>
											<span>
												{item?.price.toFixed(3)}đ
											</span>
											<span>{item?.percent}</span>
										</div>
										<div
											className={cx(
												"deal__day__percent__quantity"
											)}
										>
											<div
												className={cx(
													"deal__day__percent__quantity__progress"
												)}
												style={{
													width: `${item?.sell}%`,
												}}
											></div>
											<span>{item?.titleSell}</span>
											<img
												src={item?.dealhot}
												alt="dealhot"
											/>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</Link>
			</div>
			{/* error image */}
			<div className={cx("deal__slider")}>
				<Swiper
					grabCursor={true}
					// autoplay={{ delay: 2000 }}
					modules={[Autoplay]}
					slidesPerView={1}
					className={cx("deal__slider__result")}
				>
					{mainDealCoin.map((item, index) => {
						const isImage = item.image;

						return (
							<SwiperSlide key={index}>
								<Link to={item.path}>
									{isImage ? (
										<img src={item.image} alt={item.path} />
									) : (
										<video
											className={cx("video")}
											src={item.video}
											width="100%"
											height="100%"
											controls
										></video>
									)}
								</Link>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default Deal;
