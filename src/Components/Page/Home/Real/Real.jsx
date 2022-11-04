import React from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import styles from "./Real.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

import { productReal } from "../../../fakeData/productReal";
import { buyGiveGift } from "../../../fakeData/buygivetogift";
const cx = className.bind(styles);

const Real = () => {
	SwiperCore.use([Autoplay]);

	return (
		<div className={cx("real")}>
			<div className={cx("real__title")}>
				<div className={cx("real__title__left")}>
					<span>
						<img
							src="https://salt.tikicdn.com/ts/upload/33/0f/67/de89fab36546a63a8f3a8b7d038bff81.png"
							alt="real"
						/>
					</span>
					<span>Thương Hiệu Chính Hãng</span>
				</div>
				<span className={cx("real__title__right")}>
					<Link to="/chinhhang">Xem thêm</Link>
				</span>
			</div>
			<div>
				<Swiper
					grabCursor={true}
					// autoplay={{ delay: 2000 }}
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={10}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					className={cx("real__slider")}
				>
					{productReal.map((item, index) => (
						<SwiperSlide key={index}>
							<div className={cx("real__slider__item")}>
								<Link to={item.path0}>
									<img src={item.image0} alt="imageSlider0" />
								</Link>
								<Link to={item.path1}>
									<img src={item.image1} alt="imageSlider0" />
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div>
				<Swiper
					grabCursor={true}
					autoplay={{ delay: 2000 }}
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={-14}
					slidesPerView={6}
					className={cx("real__slider")}
				>
					{buyGiveGift.map((item, index) => (
						<SwiperSlide key={index}>
							<div className={cx("real__slider__trademark")}>
								<Link to={item.path}>
									<img src={item.image} alt="imageSlider0" />
									<span>{item.display}</span>
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Real;
