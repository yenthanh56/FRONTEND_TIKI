import React from "react";
import className from "classnames/bind";
import styles from "./Stylecategory.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";

import SwiperCore, { Autoplay } from "swiper/core";

const cx = className.bind(styles);

const mainStyleCategory = [
	{ path: "/bachhoa", display: "Bách Hóa" },
	{ path: "/nhacua", display: "Nhà Cửa" },
	{ path: "/dientu", display: "Điện Tử" },
	{ path: "/thietbiso", display: "Thiết Bị Số" },
	{ path: "/dienthoai", display: "Điện Thoại" },
	{ path: "/mevabe", display: "Mẹ & Bé" },
	{ path: "/lamdep", display: "Làm Đẹp" },
	{ path: "/giadung", display: "Gia Dụng" },
	{ path: "/thoitrangnu", display: "Thời Trang Nữ" },
	{ path: "/thoitrangnam", display: "Thời Trang Nam" },
	{ path: "/giaynu", display: "Giày Nữ" },
	{ path: "/tuinu", display: "Túi Nữ" },
	{ path: "/tuinam", display: "Túi Nam" },
	{ path: "/balovali", display: "Balo & Vali" },
	{ path: "/phukien", display: "Phụ Kiện" },
	{ path: "/dongho", display: "Đồng Hồ" },
	{ path: "/laptop", display: "Laptop" },
	{ path: "/quocte", display: "Quốc Tế" },
	{ path: "/voucher", display: "Voucher" },
	{ path: "/xe", display: "Xe" },
	{ path: "/sach", display: "Sách" },
	{ path: "/thethao", display: "Thể Thao" },
	{ path: "/mayanh", display: "Máy Ảnh" },
];

const Stylecategory = () => {
	SwiperCore.use([Autoplay]);
	return (
		<div className={cx("category")}>
			<Swiper
				freeMode={true}
				modules={[Autoplay]}
				grabCursor={true}
				spaceBetween={0}
				slidesPerView={10}
				autoplay={{ delay: 3000 }}
			>
				{mainStyleCategory.map((item, index) => (
					<SwiperSlide key={index}>
						<Link to={item.path}>
							<span>{item.display}</span>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Stylecategory;
