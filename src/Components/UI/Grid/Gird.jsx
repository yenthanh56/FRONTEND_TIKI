import React from "react";
import PropTypes from "prop-types";

Gird.propTypes = {
	col: PropTypes.number.isRequired,
	mdCol: PropTypes.number,
	smCol: PropTypes.number,
	gap: PropTypes.number,
};

function Gird(props) {
	const style = {
		gap: props.gap ? `${props.gap}px` : "0",
	};

	const col = props.col ? `grid-col-${props.col}` : "";
	const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : "";
	const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : "";

	return (
		<div className={`gird ${col} ${mdCol} ${smCol}`} style={style}>
			{props.children}
		</div>
	);
}

export default Gird;
