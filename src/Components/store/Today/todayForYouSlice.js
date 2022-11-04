import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const STATUS = Object.freeze({
	IDLE: "idle",
	LOADING: "loading",
	ERROR: "error",
	SUCCESS: "successfully",
});

const initialState = {
	todayForYou: [],
	status: STATUS.IDLE,
	detail: {},
};

const todayForYouSlice = createSlice({
	name: "todayForYou",
	initialState,
	reducers: {
		setData: (state, action) => {
			state.todayForYou = action.payload;
		},
		setStatus: (state, action) => {
			state.status = action.payload;
		},
		setDetail: (state, action) => {
			state.detail = action.payload;
		},
	},
});
export const selectAllTodayForYou = (state) => state.todayForYou?.todayForYou;
export const selectDetailForYou = (state) => state.todayForYou?.detail;
export const { setData, setStatus, setDetail } = todayForYouSlice.actions;
export default todayForYouSlice.reducer;

export const getAllForYou = async (dispatch, type) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.get(
			`https://apitiki-myapp.herokuapp.com/v1/${type}`
		);
		dispatch(setData(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};

export const getMyTodaySlug = async (dispatch, id) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.get(
			`https://apitiki-myapp.herokuapp.com/v1/foryou/${id}`
		);
		dispatch(setDetail(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
