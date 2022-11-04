import React, { Fragment } from "react";
import className from "classnames/bind";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";

const cx = className.bind(styles);

const BackRop = (props) => {
	const { isCloseModal } = props;
	return <div className={cx("backrop")} onClick={isCloseModal} />;
};

const Content = (props) => {
	return (
		<div className={cx("modal")}>
			<div className={cx("modal-content")}>{props.children}</div>
		</div>
	);
};

const CreatePortId = document.querySelector("#overlays");

const Modal = (props) => {
	const { isCloseModal } = props;
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<BackRop isCloseModal={isCloseModal} />,
				CreatePortId
			)}
			{ReactDOM.createPortal(
				<Content>{props.children}</Content>,
				CreatePortId
			)}
		</Fragment>
	);
};

export default Modal;
