import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import 'bootstrap/dist/css/bootstrap.min.css';

if(process.env.NODE_ENV !== 'production') {
    console.log('We are in development');
}

ReactDOM.render(
    // <React.StrictMode>
        <App />,
    // </React.StrictMode>,
    document.getElementById("root")
);