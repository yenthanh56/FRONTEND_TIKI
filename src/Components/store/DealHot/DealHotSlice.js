import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
	IDLE: "idle",
	LOADING: "loading",
	ERROR: "error",
	SUCCESS: "successfully",
});

const initialState = {
	dealhots: [],
	status: STATUS.IDLE,
	detail: {},
};

const dealHotSlice = createSlice({
	name: "dealhot",
	initialState,
	reducers: {
		setData: (state, action) => {
			state.dealhots = action.payload;
		},

		setStatus: (state, action) => {
			state.status = action.payload;
		},
		setDetail: (state, action) => {
			state.detail = action.payload;
		},
	},
});
export const selectAllDealHot = (state) => state.dealhot?.dealhots;
export const selectDetailDealHot = (state) => state.dealhot?.detail;

export const { setData, setStatus, setDetail } = dealHotSlice.actions;
export default dealHotSlice.reducer;

export const getAllDealHot = async (dispatch) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.get(
			"https://apitiki-myapp.herokuapp.com/v1/dealhot"
		);
		dispatch(setData(res.data));
		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
export const getDealHotSlug = async (dispatch, id) => {
	dispatch(setStatus(STATUS.LOADING));
	try {
		const res = await axios.get(
			`https://apitiki-myapp.herokuapp.com/v1/dealhot/${id}`
		);
		dispatch(setDetail(res.data));

		dispatch(setStatus(STATUS.SUCCESS));
	} catch (error) {
		dispatch(setStatus(STATUS.ERROR));
	}
};
