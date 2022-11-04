import React, { useState } from "react";
import Modal from "~/Components/UI/Modal/Modal";
import Button from "~/Components/UI/Button/Button";

const NoticeOrdered = () => {
	return (
		<Modal>
			<p>Successfully sent the order!</p>
			<Button to="/pay" primary>
				Đi Đến Xem Đơn Hàng Đã Đặt{" "}
			</Button>
		</Modal>
	);
};

export default NoticeOrdered;
