(function() {
    "use strict";

    // initialize npm modules (no need for the .js extension)
    const express = require('express');            // for routing
    const helmet = require('helmet');              // for more secure http headers
    const path = require('path');                  // for joining path strings
    const bodyparser = require('body-parser');     // for parsing the http requests
    const regex = require('regex-email');          // for checking if an e-mail address is valid
    const cookieParser = require('cookie-parser'); // for using cookies in express

    // initialize own modules (notice the './' in the path)
    // routers:
    const indexRouter = require('./routers/index');

    // initialize variables
    const app = express(); // initialize express

    // initialize middleware
    app.use(helmet());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());
    app.use(cookieParser());

    // use express.static to expose folders to the client
    app.use('/scripts', express.static(path.join(__dirname, 'clientScripts')));
    app.use('/css', express.static(path.join(__dirname, 'node_modules/font-awesome/css')));
    app.use('/fonts', express.static(path.join(__dirname, 'node_modules/font-awesome/fonts')));

    // use our routers for their respective paths
    app.use('/', indexRouter);

    // get the port given by the user (is undefined if not present)
    const portArgument = parseInt(process.argv[2]);
    console.log(portArgument);
    // if we have an integer input, use the absolute value, 
    // otherwise default to port 3000
    const port = Number.isNaN(portArgument) ? 3000 : Math.abs(portArgument); 
    console.log(`Listening on port: ${port}`);
    console.log("Press 'ctrl + c' to quit")
    // let express listen to the port
    app.listen(port);
})();