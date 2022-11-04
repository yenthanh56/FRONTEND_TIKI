import React from "react";

const Input = React.forwardRef((props, ref) => {
	const { label, input } = props;
	return (
		<div>
			<label htmlFor="">{label}</label>
			<input {...input} ref={ref} />
		</div>
	);
});

export default Input;
