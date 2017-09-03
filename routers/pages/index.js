module.exports = function(rootDir) {
    "use strict";

    const router = require('express').Router();
    const fs = require('fs');
    const path = require('path');
    const view = fs.readFileSync(path.join(rootDir, 'views/main.html'), 'utf8');
    const model = require(path.join(rootDir, 'viewModels/main')).viewObjects;
    const viewBuilder = require(path.join(rootDir, 'core/viewBuilder'));

    router.get('/', function(req, res) {
        // replace keys in template with values from the model
        //const page = model.reduce((prev, curr) => prev.replace(curr.key, curr.value), view);
        const page = viewBuilder.build(view, model);
        if (page) {
            res.status(200).send(page);
        } else {
            res.status(404).end();
        }
    });

    return router;
}