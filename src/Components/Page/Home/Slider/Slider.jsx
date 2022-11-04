import React from "react";
import className from "classnames/bind";
import styles from "./Slider.module.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { mainSlider } from "../../../fakeData/mainSlider";

const cx = className.bind(styles);

const Slider = () => {
	SwiperCore.use([Autoplay]);

	return (
		<div className={cx("slider")}>
			<Swiper
				grabCursor={true}
				autoplay={{ delay: 2000 }}
				modules={[Navigation, Pagination, Autoplay]}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				className={cx("slider__top")}
			>
				{mainSlider.map((item, index) => (
					<SwiperSlide key={index}>
						<Link to={item.path}>
							<img src={item.image} alt="imageSlider" />
						</Link>
					</SwiperSlide>
				))}
			</Swiper>

			<div className={cx("slider__rigth")}>
				<img
					src="https://salt.tikicdn.com/cache/w400/ts/banner/6a/db/09/25456daf05eae0a1f7be018a5e108cb5.png.webp"
					alt="slider-rigth"
				/>
			</div>
		</div>
	);
};

export default Slider;
