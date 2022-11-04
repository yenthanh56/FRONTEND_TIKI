import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import dealHotSlice from "./DealHot/DealHotSlice";
import todayForYouSlice from "./Today/todayForYouSlice";
import orderSlice from "./order/orderSlice";
export const store = configureStore({
	reducer: {
		auth: authSlice,
		cart: cartSlice,
		dealhot: dealHotSlice,
		todayForYou: todayForYouSlice,
		order: orderSlice,
	},
});
// import {
// 	persistStore,
// 	persistReducer,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// const persistConfig = {
// 	key: "root",
// 	version: 1,
// 	storage,
// };
// const rootReducer = combineReducers({
// 	auth: authSlice,
// 	cart: cartSlice,
// 	dealhot: dealHotSlice,
// 	todayForYou: todayForYouSlice,
// 	order: orderSlice,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [
// 					FLUSH,
// 					REHYDRATE,
// 					PAUSE,
// 					PERSIST,
// 					PURGE,
// 					REGISTER,
// 				],
// 			},
// 		}),
// });

// export const persistor = persistStore(store);
// Redux-Persist when load page still accounts
