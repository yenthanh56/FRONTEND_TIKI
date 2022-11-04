import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ContextProvider from "./Components/store/ContextProvider";
import { store } from "~/Components/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "~/Components/store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <PersistGate loading={null} persistor={persistor}> */}
			<Router>
				<ContextProvider>
					<App />
				</ContextProvider>
			</Router>
			{/* </PersistGate> */}
		</Provider>
	</React.StrictMode>
);
