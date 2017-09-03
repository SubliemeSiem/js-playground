(function() {
    "use strict";

    // initialize npm modules (no need for the .js extension)
    const express = require('express'); // for routing
    const helmet = require('helmet'); // for more secure http headers
    const path = require('path'); // for joining path strings
    const bodyparser = require('body-parser'); // for parsing the http requests
    const regex = require('regex-email'); // for checking if an e-mail address is valid
    const cookieParser = require('cookie-parser'); // for using cookies in express
    const morgan = require('morgan');

    // initialize own modules (notice the './' in the path)
    const sse = require('./core/sse');
    const indexRouter = require('./routers/pages/index')(__dirname);

    // initialize variables
    const app = express(); // initialize express

    // initialize middleware
    app.use(helmet());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());
    app.use(cookieParser());
    //app.use(morgan('combined'));

    // self-written middleware
    app.use(sse.middleware);

    // use express.static to expose folders to the client
    app.use('/scripts', express.static(path.join(__dirname, 'clientScripts')));
    app.use('/css', express.static(path.join(__dirname, 'styles/core')));
    app.use('/css', express.static(path.join(__dirname, 'node_modules/font-awesome/css')));
    app.use('/fonts', express.static(path.join(__dirname, 'node_modules/font-awesome/fonts')));

    // use our routers for their respective paths
    app.use('/', indexRouter);

    // TEMP temporary routes for testing purposes
    app.get('/Test', function(req, res) {
        res.status(200).end(JSON.stringify({ title: "Test", html: "<div onclick='ajax.post(\"/Test\");'>Succes!</div>", js: "", css: "" }));
    });

    const viewBuilder = require('./core/viewBuilder');
    app.get('/index', function(req, res) {
        res.status(200).end(JSON.stringify({
            title: "js-playground",
            html: viewBuilder.parseContent(require('./viewModels/main'))
        }));
    });

    const tmp = [];
    let x = 0;

    app.get('/stream', function(req, res) {
        sse.setupConnection(req, res, tmp);
    });

    app.post('/Test', function(req, res) {
        tmp.push(x)
        x += 1;
        sse.updateConnections(tmp);
        res.sendStatus(200);
    })

    // TEMP

    // get the port given by the user (is undefined if not present)
    const portArgument = parseInt(process.argv[2]);
    // if we have an integer input, use the absolute value, 
    // otherwise default to port 3000
    const port = Number.isNaN(portArgument) ? 4000 : Math.abs(portArgument);

    // let express listen to the port
    app.listen(port, function() {
        console.log(`Listening on port: ${port}`);
        console.log(`Go to http://localhost:${port} to see the result.`);
        console.log("Press 'ctrl + c' to quit.");
    });
})();