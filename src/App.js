import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import className from "classnames/bind";
import { Routes, Route } from "react-router-dom";
import styles from "./App.scss";

import "react-toastify/dist/ReactToastify.css";
import { DefaultLayout } from "./Components/Layout";
import { publicRouters } from "./Components/Router";

const cx = className.bind(styles);
const App = () => {
	return (
		<div className={cx("app")}>
			<Routes>
				{publicRouters.map((route, index) => {
					const Page = route.component;
					let Layout = DefaultLayout;
					if (route.layout) {
						Layout = route.layout;
					} else if (route.layout === null) {
						Layout = Fragment;
					}
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						/>
					);
				})}
			</Routes>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default App;
