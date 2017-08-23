module.exports = function(rootDir){
    "use strict";
    const build = function(view, model){
        return view.split(/\{\{|\}\}/).map((x, index) => index % 2 === 1 && model[x] ? model[x] : x).join('');
    }
    const router = require('express').Router();
    const fs = require('fs');
    const path = require('path');
    const view = fs.readFileSync(path.join(rootDir, 'views/index.html'), 'utf8');
    const model = require(path.join(rootDir, 'models/index'));
    router.get('/', function(req, res){
        // replace keys in template with values from the model
        //const page = model.reduce((prev, curr) => prev.replace(curr.key, curr.value), view);
        const page = build(view, model);
        if (page){
            res.status(200).send(page);
        } else {
            res.status(404).end();
        }
    });

    return router;
}