import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import styles from "./Dealhot.module.scss";
import { Link } from "react-router-dom";
import { mainDeal } from "~/Components/fakeData/mainDeal";
import { getDealHotDetail } from "~/Components/store/DealHot/DealHotSlice";
import { useSelector, useDispatch } from "react-redux";
import {
	selectAllDealHot,
	getAllDealHot,
} from "~/Components/store/DealHot/DealHotSlice";
import { addToCart } from "~/Components/store/cartSlice";

import Button from "~/Components/UI/Button/Button";

const cx = className.bind(styles);
const Dealhot = () => {
	const dispatch = useDispatch();
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
		window.scroll(0, 0);
		getAllDealHot(dispatch);
	}, [dispatch]);

	return (
		<div className={cx("container", "dealhot")}>
			<img
				src="https://salt.tikicdn.com/ts/brickv2og/e4/0f/f3/ed1b12221c289369e26ce3bee2b93421.png"
				alt="dealBg"
			/>
			<div className={cx("deal__day")}>
				<div className={cx("deal__day__header")}>
					<div className={cx("deal__day__left")}>
						<img
							src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc-white.svg"
							alt="flash deal"
							width={89}
							height={28}
						/>

						<img
							width="21"
							src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
							alt="flash deal"
							className={cx("icon__deal")}
						/>

						<img
							src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay-white.svg"
							alt="flash deal"
							width={114}
							height={28}
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
				</div>
			</div>
			<div className={cx("deal__day__percent")}>
				{dataDealHot?.map((item) => (
					<div className={cx("deal__hot")} key={item?._id}>
						<div className={cx("deal__day__percent__image")}>
							<img
								src={item?.image}
								alt="image_sale"
								width="124px"
								height="124px"
							/>
							<div className={cx("deal__day__percent__discount")}>
								<span>{item?.price.toFixed(3)}đ</span>
								<span>{item?.percent}</span>
							</div>
							<div className={cx("deal__day__percent__quantity")}>
								<div
									className={cx(
										"deal__day__percent__quantity__progress"
									)}
									style={{
										width: `${item?.sell}%`,
									}}
								></div>
								<span>{item?.titleSell}</span>
								<img src={item?.dealhot} alt="dealhot" />
							</div>
						</div>
						<Button large to={`/productdetail/${item?._id}`}>
							Xem Sản Phẩm
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dealhot;
