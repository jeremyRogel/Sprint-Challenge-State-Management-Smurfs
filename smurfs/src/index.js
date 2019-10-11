import React from "react";
import ReactDOM from "react-dom";
//create store and middleware
import { createStore, applyMiddleware } from "redux";
//import Thunk
import thunk from "redux-thunk";
//import Provider
import { Provider } from "react-redux";
//import reducer
import reducer from "./reducer";
import "./index.css";
import App from "./components/App";
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));