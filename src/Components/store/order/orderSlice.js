import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
	IDLE: "idle",
	ERROR: "error",
	LOADING: "loading",
	SUCCESS: "successfully",
});

const initialState = {
	user: {
		data: [],
		status: STATUS.IDLE,
	},
	ordered: [],
	duplicates: {},
	createOrder: {
		status: STATUS.IDLE,
	},
};

const orderSlice = createSlice({
	name: "order",
	initialState,

	reducers: {
		setUserOrder: (state, action) => {
			// state.user.data = action.payload;
			state.user.data.push(action.payload);
		},

		setArrayUserOrdered: (state, action) => {
			state.ordered = action.payload;
		},

		setCreateOrder: (state, action) => {
			state.createOrder.status = action.payload;
		},
		setStatus: (state, action) => {
			state.user.status = action.payload;
		},
	},
});

export const selectAllUserOrder = (state) => state.order?.user?.data;
export const showAllOrdered = (state) => state.order?.ordered;
export const { setUserOrder, setCreateOrder, setStatus, setArrayUserOrdered } =
	orderSlice.actions;

export default orderSlice.reducer;

export const createUserOrder = async (userOrder, dispatch, navigate) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.post(
			"https://apitiki-myapp.herokuapp.com/v1/userorder/create",
			userOrder
		);
		dispatch(setUserOrder(res.data));
		dispatch(setCreateOrder(STATUS.SUCCESS));
		dispatch(setStatus(STATUS.SUCCESS));
		navigate("/pay");
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
//`https://apitiki-myapp.herokuapp.com/v1/userorder`
//`http:localhost:8080/v1/userorder`

export const getAllUserOrder = async (dispatch) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.get(
			`https://apitiki-myapp.herokuapp.com/v1/userorder`
		);
		dispatch(setArrayUserOrdered(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
