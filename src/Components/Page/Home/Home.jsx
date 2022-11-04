import React from "react";
import className from "classnames/bind";
import styles from "./Home.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Slider from "./Slider/Slider";
import Deal from "./Deal/Deal";
import Advertisement from "./Advertisement/Advertisement";
import QuickLink from "./QuickLink/QuickLink";
import Banner from "./Banner/Banner";
import Real from "./Real/Real";
import Outstanding from "./Outstanding/Outstanding";
import SuggestTodays from "./SuggestTodays/SuggestTodays";
const cx = className.bind(styles);

const Home = () => {
	return (
		<div className={cx("home")}>
			<div className={cx("container")}>
				{/* slider-top */}
				<Slider />
				{/* deal */}
				<Deal />
				{/* advertisement  */}
				<Advertisement />
				{/* quicklink */}
				<QuickLink />
				{/* banner */}
				<Banner />
				{/* Real */}
				<Real />
				{/* Outstanding */}
				<Outstanding />
				{/* SuggestTodays */}
				<SuggestTodays />
			</div>
		</div>
	);
};

export default Home;
