import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import 'bootstrap/dist/css/bootstrap.min.css';

console.log(process.env.NODE_ENV);

// if (provess.env.NODE_ENV !== 'production') {
//     console.log('In development mode.');
// };

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);