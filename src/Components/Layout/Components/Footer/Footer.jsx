import React from "react";
import className from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { supportCustomer } from "~/Components/fakeData/displayFooter/supportCustomer";
import { aboutTiki } from "~/Components/fakeData/displayFooter/aboutTiki";
import { partnerOperate } from "~/Components/fakeData/displayFooter/partner";

// pay
import LogoTiki from "~/Components/fakeData/displayFooter/Logo/logoTiki.svg";
import LogoVisa from "~/Components/fakeData/displayFooter/Logo/logoVisa.svg";
import LogoBorder from "~/Components/fakeData/displayFooter/Logo/logoBorder.svg";
import LogoJcb from "~/Components/fakeData/displayFooter/Logo/logoJcb.svg";
import LogoAtm from "~/Components/fakeData/displayFooter/Logo/logoAtm.svg";
import LogoMomo from "~/Components/fakeData/displayFooter/Logo/logoMomo.svg";
import LogoZaloPay from "~/Components/fakeData/displayFooter/Logo/logoZalopay.svg";
import LogoMoca from "~/Components/fakeData/displayFooter/Logo/logoMoca.svg";
import LogoViettelPay from "~/Components/fakeData/displayFooter/Logo/logoViettelpay.svg";
import LogoVnPay from "~/Components/fakeData/displayFooter/Logo/logoVnpay.svg";
import LogoDolars from "~/Components/fakeData/displayFooter/Logo/logoDolars.svg";
import LogoPay from "~/Components/fakeData/displayFooter/Logo/logoPay.svg";
import LogoTikiNow from "~/Components/fakeData/displayFooter/Logo/logoTikiNow.svg";

// logo connect
import LogoFb from "~/Components/fakeData/displayFooter/socialMedia/logoFb.svg";
import LogoYt from "~/Components/fakeData/displayFooter/socialMedia/logoYt.svg";
import LogoZalo from "~/Components/fakeData/displayFooter/socialMedia/logoZalo.svg";

// Product Category

// 1
import { toyMomvsBaby } from "~/Components/fakeData/displayFooter/fakeCategory/toyMomvsBaby";
import { freshFood } from "~/Components/fakeData/displayFooter/fakeCategory/freshFood";
import { telephoneIpad } from "~/Components/fakeData/displayFooter/fakeCategory/telephoneIpad";
import { healthBeauty } from "~/Components/fakeData/displayFooter/fakeCategory/healthBeauty";
import { appliancesElectric } from "~/Components/fakeData/displayFooter/fakeCategory/appliancesElectric";

// 2
import { womenFashion } from "~/Components/fakeData/displayFooter/fakeCategory/womenFashion";
import { menFashion } from "~/Components/fakeData/displayFooter/fakeCategory/menFashion";
import { womenShoes } from "~/Components/fakeData/displayFooter/fakeCategory/womenShoes";
import { menShoes } from "~/Components/fakeData/displayFooter/fakeCategory/menShoes";
import { womenHandbag } from "~/Components/fakeData/displayFooter/fakeCategory/womenHandbag";
import { menHandbag } from "~/Components/fakeData/displayFooter/fakeCategory/menHandbag";

// 3
import { backpackSuitcase } from "~/Components/fakeData/displayFooter/fakeCategory/backpackSuitcase";
import { accessoryFashion } from "~/Components/fakeData/displayFooter/fakeCategory/accessoryFashion";
import { watchJewels } from "~/Components/fakeData/displayFooter/fakeCategory/watchJewels";
import { accessoryComputer } from "~/Components/fakeData/displayFooter/fakeCategory/accessoryComputer";
import { houseLife } from "~/Components/fakeData/displayFooter/fakeCategory/houseLife";
import { departmentStoreOnline } from "~/Components/fakeData/displayFooter/fakeCategory/departmentStoreOnline";

// 4
import { internationalGoods } from "~/Components/fakeData/displayFooter/fakeCategory/internationalGoods";
import { digitalDevice } from "~/Components/fakeData/displayFooter/fakeCategory/digitalDevice";
import { voucherService } from "~/Components/fakeData/displayFooter/fakeCategory/voucherService";
import { carMotorCycleBicycle } from "~/Components/fakeData/displayFooter/fakeCategory/carMotorCycleBicycle";
import { bookStoreTiki } from "~/Components/fakeData/displayFooter/fakeCategory/bookStoreTiki";

// 5
import { electronicRefrigeration } from "~/Components/fakeData/displayFooter/fakeCategory/electronicRefrigeration";
import { sportPicnic } from "~/Components/fakeData/displayFooter/fakeCategory/sportPicnic";
import { camera } from "~/Components/fakeData/displayFooter/fakeCategory/camera";

const cx = className.bind(styles);

const Footer = () => {
	return (
		<div className={cx("container")}>
			<footer className={cx("footer")}>
				<div className={cx("footer__information")}>
					<div className={cx("footer__information__support")}>
						<h4>Hỗ trợ khách hàng</h4>
						<p>
							Hotline:<a href="tel:1900-6035">1900-6035</a>
							<span>(1000 đ/phút, 8-21h kể cả T7, CN)</span>
						</p>
						{supportCustomer.map((item, index) => (
							<Link to={item.path} key={index}>
								<p>{item.display}</p>
							</Link>
						))}
						<p>
							Hỗ trợ khách hàng:{" "}
							<a href="mailto:hotro@tiki.vn">hotro@tiki.vn</a>
						</p>
						<p>
							Báo lỗi bảo mật:{" "}
							<a href="mailto:security@tiki.vn">
								security@tiki.vn
							</a>
						</p>
					</div>

					<div className={cx("footer__information__about")}>
						<h4>Về Tiki</h4>
						{aboutTiki.map((item, index) => (
							<Link to={item.path} key={index}>
								<p>{item.display}</p>
							</Link>
						))}
					</div>

					<div className={cx("footer__information__partner")}>
						<h4>Hợp tác và liên kết</h4>
						{partnerOperate.map((item, index) => (
							<Link to={item.path} key={index}>
								<p>{item.display}</p>
							</Link>
						))}
						<div
							className={cx("footer__information__partnerimage")}
						>
							<h4>Chứng nhận bởi</h4>
							<img
								src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
								alt="imageicon"
								width={32}
								style={{ marginRight: "8px" }}
							/>
							<img
								src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
								alt="subcribe"
								width={83}
							/>
						</div>
					</div>

					<div className={cx("footer__information__methodpay")}>
						<h4>Phương thức thanh toán</h4>
						<p
							className={cx(
								"footer__information__methodpay__icon"
							)}
						>
							<span>
								<img src={LogoTiki} alt="logoTiki" />
							</span>
							<span>
								<img src={LogoVisa} alt="logoVisa" />
							</span>
							<span>
								<img src={LogoBorder} alt="logoBorder" />
							</span>
							<span>
								<img src={LogoJcb} alt="logoJcb" />
							</span>
							<span>
								<img src={LogoAtm} alt="logoAtm" />
							</span>
							<span>
								<img src={LogoMomo} alt="logoMomo" />
							</span>
							<span>
								<img src={LogoZaloPay} alt="logoZaloPay" />
							</span>

							<span>
								<img src={LogoMoca} alt="logoMoca" />
							</span>
							<span>
								<img
									src={LogoViettelPay}
									alt="logoViettelPay"
								/>
							</span>
							<span>
								<img
									src={LogoVnPay}
									alt="logovnPay"
									width={30}
								/>
							</span>
							<span>
								<img src={LogoDolars} alt="logoDolars" />
							</span>
							<span>
								<img src={LogoPay} alt="logoPay" />
							</span>
						</p>
						<div>
							<h4>Dịch vụ giao hàng</h4>
							<img src={LogoTikiNow} alt="logoTiki" />
						</div>
					</div>

					<div className={cx("footer__information__connect")}>
						<h4>Kết nối với chúng tôi</h4>
						<div
							className={cx(
								"footer__information__connect__socialmedia"
							)}
						>
							<span>
								<img src={LogoFb} alt="logoFb" />
							</span>
							<span>
								<img src={LogoYt} alt="logoYt" />
							</span>
							<span>
								<img src={LogoZalo} alt="logoZalo" />
							</span>
						</div>
						<div>
							<h4>Tải ứng dụng trên điện thoại</h4>

							<div
								className={cx(
									"footer__information__connect__download"
								)}
							>
								<img
									src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png"
									alt="imageQr"
									width={80}
								/>
								<div
									className={cx(
										"footer__information__connect__download__main"
									)}
								>
									<img
										src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
										alt="imageAppstore"
										width={122}
									/>
									<img
										src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
										alt="imageGoogleplay"
										width={122}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={cx("address-info")}>
					<p>
						Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng
						Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh
					</p>
					<p>
						Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa
						hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc
						trung tâm xử lý đơn hàng
					</p>
					<p>
						Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở
						Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu
						ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022
					</p>
					<p>© 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
				</div>

				<div className={cx("tiki__about")}>
					<h1>Tiki - Thật nhanh, thật chất lượng, thật rẻ</h1>
					<h2>Tiki có tất cả</h2>
					<p>
						Với hàng triệu sản phẩm từ các thương hiệu, cửa hàng uy
						tín, hàng nghìn loại mặt hàng từ&nbsp;
						<a href="https://tiki.vn/dien-thoai-smartphone/c1795">
							Điện thoại smartphone
						</a>
						&nbsp;tới&nbsp;
						<a href="https://tiki.vn/di-cho-online">
							Rau củ quả tươi
						</a>
						, kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang
						đến cho bạn một trải nghiệm mua sắm online bắt đầu bằng
						chữ tín. Thêm vào đó, ở Tiki bạn có thể dễ dàng sử dụng
						vô vàn các tiện ích khác như&nbsp;
						<a href="https://tiki.vn/san-pham-so">
							mua thẻ cào, thanh toán hoá đơn điện nước, các dịch
							vụ bảo hiểm.
						</a>
					</p>
					<h2>Khuyến mãi, ưu đãi tràn ngập</h2>
					<p>
						Bạn muốn săn giá sốc, Tiki có&nbsp;
						<a href="https://tiki.vn/deal-hot">
							giá sốc mỗi ngày
						</a>{" "}
						cho bạn! Bạn là tín đồ của các thương hiệu, các&nbsp;
						<a href="https://tiki.vn/khuyen-mai/thuong-hieu-chinh-hang-tiki">
							cửa hàng Official chính hãng
						</a>
						&nbsp;đang chờ đón bạn. Không cần săn mã freeship, vì
						Tiki đã có hàng triệu sản phẩm trong&nbsp;
						<a href="https://tiki.vn/khuyen-mai/mien-phi-van-chuyen">
							chương trình Freeship+
						</a>
						, không giới hạn lượt đặt, tiết kiệm thời gian vàng bạc
						của bạn. Mua thêm gói&nbsp;
						<a href="https://tiki.vn/hoi-vien-tikinow">
							TikiNOW tiết kiệm
						</a>
						&nbsp;để nhận 100% free ship 2h & trong ngày, hoặc mua
						gói TikiNOW cao cấp để nhận được 100% freeship, áp dụng
						cho 100% sản phẩm, 100% tỉnh thành Việt Nam. Bạn muốn
						tiết kiệm hơn nữa? Đã có TikiCARD,
						<a href="https://tiki.vn/khuyen-mai/mo-the-tikicard">
							thẻ tín dụng Tiki hoàn tiền 15%
						</a>
						&nbsp;trên mọi giao dịch (tối đa hoàn 600k/tháng)
					</p>
				</div>

				<div className={cx("tiki__category")}>
					<h1>Danh Mục Sản Phẩm</h1>
					{/* grid */}{" "}
					<div className={cx("tiki__grid")}>
						{/* column */}
						<div className={cx("tiki__column")}>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Đồ Chơi - Mẹ & Bé
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{toyMomvsBaby.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Chuẩn bị mang thai" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Thực Phẩm Tươi Sống
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{freshFood.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Chăm sóc nhà cửa" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Điện Thoại - Máy Tính Bảng
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{telephoneIpad.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Máy tính bảng" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Làm Đẹp - Sức Khỏe
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{healthBeauty.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Dược mỹ phẩm" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Làm Đẹp - Sức Khỏe
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{appliancesElectric.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Thiết bị gia đình" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
						</div>
						<div className={cx("tiki__column")}>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Thời trang nữ
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{womenFashion.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Thời trang trung niên" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Thời trang nam
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{menFashion.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Quần áo nam kích cỡ lớn" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Giày - Dép nữ
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{womenShoes.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Giày Dế xuồng nữ" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Giày - Dép nữ
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{menShoes.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Giày Dế xuồng nữ" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Túi thời trang nữ
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{womenHandbag.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Phụ kiện túi" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Túi thời trang nam
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{menHandbag.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Túi bao tử, túi đeo bụng" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
						</div>
						<div className={cx("tiki__column")}>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Balo và vali
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{backpackSuitcase.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Vali, phụ kiên vali" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Phụ kiện thể thao
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{accessoryFashion.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Phụ kiện thời trang nam" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Đồng hồ và trang sức
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{watchJewels.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Đồng hồ trẻ em" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Laptop - Máy vi tính - Link kiện
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{accessoryComputer.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display === "Laptop" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Nhà cửa - Đời sồn
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{houseLife.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Hoa tươi và cây cảnh" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Bách hóa Online
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{departmentStoreOnline.map(
										(item, index) => (
											<span key={index}>
												<Link to={item.path}>
													{item.display}
												</Link>
												<>
													{item.display ===
													"Bộ quà tặng" ? (
														""
													) : (
														<>&nbsp;/&nbsp;</>
													)}
												</>
											</span>
										)
									)}
								</p>
							</div>
						</div>
						<div className={cx("tiki__column")}>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Hàng quốc tế
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{internationalGoods.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Điện thoại - Máy tính bảng" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Thiết bị số - Phụ kiện số
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{digitalDevice.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Thiêt bị chơi game và phụ kiện" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Voucher - Dịch vụ
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{voucherService.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Sim số - thẻ cào - thẻ game" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Ô tô - Xe máy - Xe đạp
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{carMotorCycleBicycle.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Dịch vụ , lắp đặt" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Nhà sách tiki
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{bookStoreTiki.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"English Books" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
						</div>
						<div className={cx("tiki__column")}>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Điện tử - Điện lanh
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{electronicRefrigeration.map(
										(item, index) => (
											<span key={index}>
												<Link to={item.path}>
													{item.display}
												</Link>
												<>
													{item.display ===
													"Tủ ướp rượu" ? (
														""
													) : (
														<>&nbsp;/&nbsp;</>
													)}
												</>
											</span>
										)
									)}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Thể thao - Dã ngoại
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{sportPicnic.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display ===
												"Dụng cụ leo núi" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
							<div>
								<div>
									<a href="https://tiki.vn/do-choi-me-be/c2549">
										Máy ảnh - Máy quay phim
									</a>
								</div>
								<p
									style={{
										fontSize: "12px",
										lineHeight: "16px",
									}}
								>
									{camera.map((item, index) => (
										<span key={index}>
											<Link to={item.path}>
												{item.display}
											</Link>
											<>
												{item.display === "Máy ảnh" ? (
													""
												) : (
													<>&nbsp;/&nbsp;</>
												)}
											</>
										</span>
									))}
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
