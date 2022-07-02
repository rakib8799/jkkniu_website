import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
        <>
                {/* basename={process.env.PUBLIC_URL} */}
                <Router>
                        <App />
                </Router>
        </>,
        document.getElementById("root")
);
