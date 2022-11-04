import React from "react";
import PropTypes from "prop-types";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = className.bind(styles);

const Button = (props) => {
	const {
		to,
		href,
		onClick,
		text,
		primary,
		small,
		large,
		disabled,
		className,
		...passprops
	} = props;
	const _props = {
		onClick,

		...passprops,
	};
	let Comp = "button";

	if (to) {
		_props.to = to;
		Comp = Link;
	} else if (href) {
		_props.href = href;
		Comp = "a";
	}

	const classesBtn = cx("button", {
		[className]: className,
		text,
		primary,
		small,
		large,
		disabled,
	});

	return (
		<Comp className={classesBtn} {..._props}>
			{props.children}
		</Comp>
	);
};

Button.propTypes = {
	to: PropTypes.string,
	href: PropTypes.string,
	text: PropTypes.bool,
	primary: PropTypes.bool,
	small: PropTypes.bool,
	className: PropTypes.string,
	large: PropTypes.bool,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
