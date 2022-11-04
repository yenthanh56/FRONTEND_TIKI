import React from "react";
import Header from "../Components/Header/Header";

const HeaderOnly = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	);
};

export default HeaderOnly;
