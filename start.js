(function() {
    "use strict";

    // initialize npm modules (no need for the .js extension)
    const express = require('express'); // for routing
    const compression = require('compression'); // for gzip compression
    const helmet = require('helmet'); // for more secure http headers
    const path = require('path'); // for joining path strings
    const bodyparser = require('body-parser'); // for parsing the http requests
    const regex = require('regex-email'); // for checking if an e-mail address is valid
    const cookieParser = require('cookie-parser'); // for using cookies in express
    const morgan = require('morgan');
    const favicon = require('serve-favicon');

    // initialize own modules (notice the './' in the path)
    const sse = require('./core/sse');
    const indexRouter = require('./routers/pages/index')(__dirname);

    // initialize variables
    const app = express(); // initialize express

    // initialize middleware
    app.use(compression());
    app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(helmet());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());
    app.use(cookieParser());
    //app.use(morgan('combined'));

    // self-written middleware
    app.use(sse.middleware);

    // use express.static to expose folders to the client
    app.use('/', express.static(path.join(__dirname, 'public')));
    app.use('/scripts', express.static(path.join(__dirname, 'clientScripts')));
    app.use('/css', express.static(path.join(__dirname, 'styles/core')));
    app.use('/css', express.static(path.join(__dirname, 'node_modules/font-awesome/css')));
    app.use('/fonts', express.static(path.join(__dirname, 'node_modules/font-awesome/fonts')));

    app.all('/', function(req, res) {
        res.redirect('/index.html');
    })

    // use our routers for their respective paths
    app.use('/index.html', indexRouter);

    // TEMP temporary routes for testing purposes
    const viewBuilder = require('./core/viewBuilder');
    app.get('/test.html', function(req, res) {
        if (req.query.onlyContent) {
            res.status(200).end(JSON.stringify({ title: "Test", page: "test", html: "<div onclick='ajax.post(\"/Test\");'>Succes!</div>", js: "", css: "" }));
        } else {
            const fs = require('fs');
            const path = require('path');
            const view = fs.readFileSync('./views/main.html', 'utf8');
            const model = require('./viewModels/test').viewObjects;

            const page = viewBuilder.build(view, model);
            if (page) {
                res.status(200).send(page);
            } else {
                res.status(404).end();
            }
        }
    });

    const tmp = [];
    let x = 0;

    app.get('/stream', function(req, res) {
        sse.setupConnection(req, res, tmp);
    });

    app.post('/test.html', function(req, res) {
        tmp.push(x)
        x += 1;
        sse.updateConnections({ action: "new post", data: tmp });
        res.sendStatus(200);
    });
    // TEMP

    // catch routing errors
    app.get('*', function(req, res, next) {
        throw Error("404");
    });

    app.use(function(err, req, res, next) {
        if (err.message === "404") {
            res.status(404).send(require('./errorPages/404'));
        } else {
            next(err);
        }
    });

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