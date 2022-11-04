import { toast } from "react-toastify";

const Valid = (username, email, password, cf_password) => {
	if (!username) {
		toast.error("Vui Lòng Nhập Tài Khoản ");

		return;
	}

	if (!ValidateEmail(email)) {
		toast.error("Vui Lòng Nhập Đầy Đủ Email");
		return "Invalid emails.";
	}
	if (password.length < 6) {
		toast.error("Vui Lòng Nhập Mật Khẩu Lớn Hơn 6 Kí Tự");
		return "Password must be at least 6 characters";
	}

	if (password !== cf_password) {
		toast.error(
			"Xác Nhận Mật Khẩu Không Trùng Khớp! Vui Lòng Kiểm Tra Lại!!!"
		);
		return "Confirm password did not match";
	}
};

const ValidateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};

export default Valid;
