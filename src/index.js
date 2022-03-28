import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import EditPosts from "./component/EditPosts";
//import AddTest from "./component/AddTest";
//import AddPosts from "./component/AddPosts";
import { Provider } from "react-redux";
import store from "./store";
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
