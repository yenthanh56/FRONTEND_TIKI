import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { getDealHotSlug } from "~/Components/store/DealHot/DealHotSlice";
import { selectDetailDealHot } from "~/Components/store/DealHot/DealHotSlice";
import Button from "~/Components/UI/Button/Button";
import { useParams } from "react-router-dom";
import { addToCart } from "~/Components/store/cartSlice";

const cx = className.bind(styles);
const ProductDetail = () => {
	const dispatch = useDispatch();

	const { id } = useParams();
	const product = useSelector(selectDetailDealHot);

	let total = useSelector((state) => state.cart.data?.cartTotalAmount);
	total = `${total.toFixed(3)} đ`;
	const priceCurrent = `${product?.price?.toFixed(3)} đ`;
	const priceOld = `${product?.priceOld?.toFixed(3)} đ`;
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scroll(0, 0);
		getDealHotSlug(dispatch, id);
		setLoading(false);
	}, [dispatch, id]);

	const addToCartHandler = (e) => {
		e.preventDefault();
		dispatch(
			addToCart({
				id: product?._id,
				title: product?.title,
				price: product?.price,
				image: product?.image,
			})
		);
		toast.success("Bạn đã Thêm vào giỏ hàng");
	};

	const formRenderItems = (
		<>
			<form className={cx("product")}>
				<img
					src={product?.image}
					alt={product?.title}
					className={cx("product__image")}
				/>
				<div className={cx("product__detail")}>
					<h1>{product?.title}</h1>
					<p>{product?.description}</p>

					<div className={cx("product__price")}>
						<span className={cx("product__price__current")}>
							{priceCurrent}
						</span>
						<span className={cx("product__price__old")}>
							{priceOld}
							<span
								className={cx(
									"product__price__old__underlined"
								)}
							></span>
						</span>
					</div>
					<div className={cx("product__sell")}>
						<span className={cx("product__sell__title")}>
							{product?.titleSell}
						</span>
						<span
							className={cx("product__sell__percent")}
						>{`${product?.sell} %`}</span>
					</div>
				</div>
			</form>
			<div className={cx("product__btn")}>
				<Button large onClick={(e) => addToCartHandler(e)}>
					Thêm Vào Giỏ Hàng
				</Button>
				<Button large to="/giohang">
					Đi Đến Giỏ Hàng
				</Button>
				<Button large to="/deal-hot">
					Tiếp Tục Mua Hàng
				</Button>
			</div>
		</>
	);
	const notProduct = (
		<div className={cx("page__not")}>
			<p style={{ marginBottom: "8px" }}>Sản phẩm không tồn tại</p>
			<Button large to="/deal-hot">
				Tiếp tục mua hàng
			</Button>
		</div>
	);
	if (loading) {
		return (
			<section style={{ textAlign: "center", color: "#000" }}>
				<p>Loading....</p>
			</section>
		);
	}

	return <>{id === product?._id ? formRenderItems : notProduct}</>;
};

export default ProductDetail;
