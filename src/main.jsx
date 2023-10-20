import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import store from "../src/redux/store/store.js";
import "./index.css";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
