(function() {
    "use strict";
    const express = require('express');
    const helmet = require('helmet');
    const path = require('path');
    const bodyparser = require('body-parser');
    const regex = require('regex-email');
    const cookieParser = require('cookie-parser');

    const app = express();

    app.use(helmet());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());
    app.use(cookieParser());
    app.use('/scripts', express.static(path.join(__dirname, 'clientScripts')));
    app.use('/css', express.static(path.join(__dirname, 'node_modules/font-awesome/css')));
    app.use('/fonts', express.static(path.join(__dirname, 'node_modules/font-awesome/fonts')));


})();