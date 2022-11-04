import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const STATUS = Object.freeze({
	IDLE: "idle",
	ERROR: "error",
	LOADING: "loading",
	SUCCESS: "successfully",
});

const initialState = {
	login: {
		data: [],
		status: STATUS.IDLE,
	},
	register: {
		status: STATUS.IDLE,
	},
	logout: {
		status: STATUS.IDLE,
	},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLogin: (state, action) => {
			state.login.data = action.payload;
			state.login.status = action.payload;
		},
		setRegister: (state, action) => {
			state.register.status = action.payload;
		},
		setLogout: (state) => {
			state.login.data = null;
		},
		setStatus: (state, action) => {
			state.login.status = action.payload;
		},
	},
});

export const selectAllUser = (state) => state.auth?.login?.data;

export const { setLogin, setRegister, setLogout, setStatus } =
	authSlice.actions;

export default authSlice.reducer;

// http://localhost:8080/v1/auth/login
// http://localhost:8080/v1/auth/register
//"https://apitiki-myapp.herokuapp.com/v1/auth/login",

export const getAllUser = async (dispatch) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.get(
			"https://apitiki-myapp.herokuapp.com/v1/user"
		);
		dispatch(setLogin(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
export const loginUser = async (user, dispatch, navigate) => {
	dispatch(setStatus(STATUS.LOADING));

	try {
		const res = await axios.post(
			"https://apitiki-myapp.herokuapp.com/v1/auth/login",
			user
		);
		if (!user) {
			return;
		}
		if (user) {
			dispatch(setLogin(res.data));
			dispatch(setStatus(STATUS.SUCCESS));
			navigate("/");
		}
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
export const registerUser = async (user, dispatch, navigate) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.post(
			"https://apitiki-myapp.herokuapp.com/v1/auth/register",
			user
		);
		dispatch(setLogin(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
		navigate("/login");
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
export const logoutUser = async (dispatch, navigate) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		dispatch(setLogout());
		dispatch(setStatus(STATUS.SUCCESS));

		navigate("/");
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
