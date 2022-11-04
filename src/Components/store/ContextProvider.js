import React, { useReducer } from "react";
import { CartContext } from "./CartContext";

const ContextProvider = (props) => {
	const defaultState = {
		items: [],
		totalAmount: 0,
	};

	const rootReducer = (state, action) => {
		if (action.type === "ADD") {
			const updateTotalAmount =
				state.totalAmount + action.item.price * action.item.amount;
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.item.id
			);
			const existingItem = state.items[existingItemIndex];
			let updateItems;
			if (existingItem) {
				const updateItem = {
					...existingItem,
					amount: existingItem.amount + action.item.amount,
				};
				updateItems = [...state.items];
				updateItems[existingItemIndex] = updateItem;
			} else {
				updateItems = state.items.concat(action.item);
			}

			return {
				items: updateItems,
				totalAmount: updateTotalAmount,
			};
		}

		if (action.type === "REMOVE") {
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.id
			);
			const existingItem = state.items[existingItemIndex];
			const updateTotalAmount = state.totalAmount - existingItem.price;
			let updateItems;

			if (existingItem.amount === 1) {
				updateItems = state.items.filter(
					(item) => item.id !== action.id
				);
			} else {
				const updateItem = {
					...existingItem,
					amount: existingItem.amount - 1,
				};
				updateItems = [...state.items];
				updateItems[existingItemIndex] = updateItem;
			}

			return {
				items: updateItems,
				totalAmount: updateTotalAmount,
			};
		}

		if (action.type === "CLEAR") {
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.id
			);
			const existingItem = state.items[existingItemIndex];

			const updateTotalAmount =
				state.totalAmount - existingItem.price * existingItem.amount;
			let updateItems;

			if (existingItem.amount > 1) {
				updateItems = state.items.filter(
					(item) => item.id !== action.id
				);
			}

			return {
				items: updateItems,
				totalAmount: updateTotalAmount,
			};
		}
	};

	const [cartState, disPatchActionCart] = useReducer(
		rootReducer,
		defaultState
	);

	const addItemHandler = (item) => {
		disPatchActionCart({ type: "ADD", item });
	};
	const removeItemHandler = (id) => {
		disPatchActionCart({ type: "REMOVE", id });
	};

	const clearItemHandler = (id) => {
		disPatchActionCart({ type: "CLEAR", id });
	};

	const contextValue = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
		clearItem: clearItemHandler,
	};

	return (
		<CartContext.Provider value={contextValue}>
			{props.children}
		</CartContext.Provider>
	);
};

export default ContextProvider;
