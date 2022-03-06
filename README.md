# react-launchpad
A custom React toolchain

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

# Description
react-launchpad is a simple toolchain for building React JS applications with React-Bootstrap.

react-launchpad acts a foundation for scalable React JS applications. 

It includes a few essential npm dependencies for loading Bootstrap CSS styles & writing test suites for your application's code.

Unlike other React toolchains, react-launchpad's design allows developers to include 
additional dependencies, babel loaders, and libraries as needed throughout development.

# Installation
To install react-launchpad, open a new git bash terminal and navigate 
to the directory where you intend to store the new react-launchpad app.

### npx

Once inside of the directory, enter the following command into your terminal:
```
npx @rlpd/create-react-launchpad-app new-app-name
```
Where "new-app-name" is your preferred name for the directory of your new react-launchpad app.

This is the initial react-launchpad app's directory structure:
```
new-app-name
├── dist
|   ├── 45f8382c6f6e1f45f05d3cbd3dbccd1f.png
|   ├── bundle.js
|   └── bundle.LICENSE.txt
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
|   ├── images
|   |   └── launchpad_logo.png
│   └── index.html
└── src
|   ├── __tests__
|   |   ├── App.js
|   |   └── getReact.js
|   ├── util
|   |   └── API.js
|   ├── App.js
|   ├── index.js
|   └── setupTests.js
├── .babelrc
├── .gitignore
├── LICENSE.txt
├── package-lock.json
├── package.json
└── webpack.config.js
```

When the installation successfully completes, the terminal will display the following:
```
Congrats! Execute the following commands and you're ready to go. Happy coding!
cd new-app-name && npm start
```

Enter ```cd new-app-name && npm start``` into your terminal and your
new react-launchpad app should run on http://localhost:3000/.


Visit http://localhost:3000/ in your browser to see your new react-launchpad app.
<img src="https://i.ibb.co/LkZh7q8/launchpad-app-example.jpg" />

If the app has shut down, navigate to your react-launchpad's directory and run:
```
npm start
```
To restart your application on http://localhost:3000/

You do not need to install additional dependencies like webpack or babel to run react-launchpad.
These dependencies are already installed under devDependencies in the root directory's package.json.

# Usage
### npm run build
To run a production build of your app, you will need to change webpack configuration's mode from "development" to "production".

#### webpack.config.js
```
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",  // Change to "production"
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3000,
    open: true,
  },
};
```

Afterwards, you may run ```npm run build``` in a git bash terminal for a production build of the app.

### npm run test
react-launchpad has a setupTests.js file in your ```/src``` directory. This file will import dependencies for testing axios requests and 
React components using a jest-dom testing enviroment.
It is highly recommended that you do not delete this file, as it contains the necessary imports for axios to mock http requests and
allow jest to test your application's React components.

#### setupTests.js
```
// These are required imports for axios requests
// and allow jest to use jest-dom as a testing environment
import 'regenerator-runtime/runtime';
import "@testing-library/jest-dom";
```

All tests are located in ```./src/__tests__```. Each react-launchpad app will contain two initial Javascript files.
Each of these Javascript files provide examples for testing React components in a jest-dom environment and axios http requests.

#### App.js
```
/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App.js";

it('renders the App comoponent', () => {
    render(<App />);
    expect(screen.getByText('Welcome to Launchpad App!')).toBeInTheDocument();
});
```

Including
```
/**
 * @jest-environment jsdom
 */
```

At the top of every React component test file will allow jest to setup the proper testing environment for React components.

#### getReact.js
```
import axios from "axios";

jest.mock('axios');

it('makes a request to the react website', async () => {

    expect( await axios.get("https://reactjs.org/"))
        .not.toBeNull();
});
```

jest will mock axios http requests, in this example it expects a response object from <a href="https://reactjs.org/">https://reactjs.org/</a>

At your react-launchpad app's root directory, enter ```npm run test``` to run the test suites in your ```__tests__``` directory.

# Credits
react-launchpad is built by Triston Burns.

# License
react-launchpad is open source software licensed as MIT.
